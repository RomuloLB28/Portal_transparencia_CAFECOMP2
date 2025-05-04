// components/Graficos.jsx
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
  
  function Graficos({ dados }) {
    // Ordena os dados por data
    const dadosOrdenados = [...dados].sort((a, b) => new Date(a.data) - new Date(b.data));
  
    // Gráfico de linha (saldo diário)
    const dadosLinha = dadosOrdenados.map((item) => ({
      data: new Date(item.data).toLocaleDateString("pt-BR"),
      saldo: item.saldo,
    }));
  
    // Gráfico de barras (saldo final de cada mês)
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
  