// components/MenuLateral.jsx
import "./MenuLateral.css";
import { X } from "lucide-react";

function MenuLateral({ visivel, onFechar, onSelecionarPagina, paginaSelecionada }) {
  return (
    <aside className={`menuLateral ${visivel ? "mostrar" : ""}`}>
      {visivel && (
        <button className="botaoFecharMenuMobile" onClick={onFechar}>
          <X size={30} color="white" />
        </button>
      )}

      <img src="./src/assets/images/cafecompLogo.png" alt="Logo" />
      <nav>
        <ul>
          <li
            className={paginaSelecionada === "dashboard" ? "ativo" : ""}
            onClick={() => onSelecionarPagina("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={paginaSelecionada === "graficos" ? "ativo" : ""}
            onClick={() => onSelecionarPagina("graficos")}
          >
            Gráficos
          </li>
          <li
            className={paginaSelecionada === "transacoes" ? "ativo" : ""}
            onClick={() => onSelecionarPagina("transacoes")}
          >
            Transações
          </li>
          <li
            className={paginaSelecionada === "alertas" ? "ativo" : ""}
            onClick={() => onSelecionarPagina("alertas")}
          >
            Alertas
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default MenuLateral;
