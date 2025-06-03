import "./Transacoes.css";

/**
 * Componente que exibe uma tabela de transações com data e saldo.
 * 
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {Array<{id: number, data: string, saldo: number}>} props.dados - Lista de transações contendo id, data e saldo.
 * 
 * @returns {JSX.Element} O componente de transações.
 */
function Transacoes({ dados }) {
  return (
    <div className="transacoes-container">
      <h2>Transações</h2>
      <div className="tabela-scroll">
        <table className="tabela-transacoes">
          <thead>
            <tr>
              <th>Data</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item) => (
              <tr key={item.id}>
                <td>{new Date(item.data).toLocaleDateString("pt-BR")}</td>
                <td>
                  {item.saldo.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transacoes;
