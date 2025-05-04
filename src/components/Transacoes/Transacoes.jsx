// components/Transacoes.jsx
import "./Transacoes.css";

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
