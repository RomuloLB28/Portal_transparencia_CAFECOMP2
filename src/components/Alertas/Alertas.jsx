import React, { useEffect, useState } from "react";
import "./Alertas.css";

/**
 * Calcula a quantidade de dias desde a data do último relatório até hoje.
 * 
 * @param {string|Date} dataUltimoRelatorio - A data do último relatório (string ou objeto Date).
 * @returns {number} Quantidade de dias desde o último relatório.
 */
const calcularDiasDesdeUltimoRelatorio = (dataUltimoRelatorio) => {
  const hoje = new Date();
  const ultimoRelatorio = new Date(dataUltimoRelatorio);
  const diffTime = Math.abs(hoje - ultimoRelatorio);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays;
};

/**
 * Componente que exibe alertas sobre o saldo atual,
 * progresso para uma meta financeira e a atualização dos relatórios.
 * 
 * @param {Object} props - Propriedades do componente.
 * @param {Array<{saldo: number, data: string}>} props.dados - Lista de objetos com saldo e data dos relatórios.
 * 
 * @returns {JSX.Element} O componente de alertas.
 */
function Alertas({ dados }) {
  const [alertaRelatorio, setAlertaRelatorio] = useState("");
  const [saldoAtual, setSaldoAtual] = useState(0);
  const [progressoMeta, setProgressoMeta] = useState(0);
  const [dataUltimoRelatorio, setDataUltimoRelatorio] = useState("");

  useEffect(() => {
    if (dados && dados.length > 0) {
      // Pega o saldo mais recente
      const saldoMaisRecente = dados[dados.length - 1].saldo;
      setSaldoAtual(saldoMaisRecente);

      // Calcula o progresso para a meta de R$ 1000
      const progresso = (saldoMaisRecente / 1000) * 100;
      setProgressoMeta(progresso.toFixed(2));

      // Pega o último dia do relatório
      const ultimoDiaRelatorio = dados[dados.length - 1].data;
      setDataUltimoRelatorio(ultimoDiaRelatorio);

      // Verifica se o relatório está desatualizado
      const diasDesdeUltimoRelatorio = calcularDiasDesdeUltimoRelatorio(ultimoDiaRelatorio);
      if (diasDesdeUltimoRelatorio > 30) {
        setAlertaRelatorio("Relatório desatualizado");
      } else {
        setAlertaRelatorio("Relatório atualizado");
      }
    }
  }, [dados]);

  return (
    <div className="alertas-container">
      <h2>Alertas</h2>
      <div className="alerta">
        <h3>💸 Saldo Atual: R$ {saldoAtual.toFixed(2)}</h3>
        <h4>📈 Progresso para Meta de R$ 1000: {progressoMeta}%</h4>
      </div>
      <div className="alerta">
        <h3>{alertaRelatorio}</h3>
        <p>Último relatório: {new Date(dataUltimoRelatorio).toLocaleDateString("pt-BR")}</p>
      </div>
    </div>
  );
}

export default Alertas;
