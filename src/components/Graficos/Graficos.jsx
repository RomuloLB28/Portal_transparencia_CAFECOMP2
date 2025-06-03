import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Graficos.css";

/**
 * Agrupa os dados por mês, mantendo o saldo final de cada mês.
 * 
 * @param {Array<{data: string, saldo: number}>} dados - Lista de transações com data e saldo.
 * @returns {Array<{mes: string, saldo: number}>} Dados agrupados por mês e ano.
 */
function agruparPorMes(dados) {
  const agrupado = {};

  dados.forEach((item) => {
    const data = new Date(item.data);
    const mesAno = `${data.getMonth() + 1}/${data.getFullYear()}`;

    // Mantém o último saldo do mês
    agrupado[mesAno] = item.saldo;
  });

  return Object.entries(agrupado).map(([mesAno, saldo]) => ({
    mes: mesAno,
    saldo,
  }));
}

/**
 * Componente que exibe dois gráficos:
 * 
 * - 📈 Evolução diária do saldo (gráfico de linha)
 * - 📊 Saldo final por mês (gráfico de barras)
 * 
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {Array<{id: number, data: string, saldo: number}>} props.dados - Lista de transações.
 * 
 * @returns {JSX.Element} O componente de gráficos.
 */
function Graficos({ dados }) {
  const dadosOrdenados = [...dados].sort((a, b) => new Date(a.data) - new Date(b.data));

  const dadosLinha = dadosOrdenados.map((item) => ({
    data: new Date(item.data).toLocaleDateString("pt-BR"),
    saldo: item.saldo,
  }));

  const dadosBarra = agruparPorMes(dadosOrdenados);

  return (
    <div className="graficos-container">
      <h2>Gráficos</h2>

      <div className="grafico">
        <h3>📈 Evolução Diária do Saldo</h3>
        <ResponsiveContainer width="100%" height={170}>
          <LineChart data={dadosLinha}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
            <Line type="monotone" dataKey="saldo" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grafico">
        <h3>📊 Saldo Final por Mês</h3>
        <ResponsiveContainer width="100%" height={170}>
          <BarChart data={dadosBarra}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
            <Bar dataKey="saldo" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graficos;
