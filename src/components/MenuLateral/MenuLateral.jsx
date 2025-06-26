import "./MenuLateral.css";
import { X } from "lucide-react";

/**
 * Componente de menu lateral da aplicação.
 * 
 * Permite navegação entre páginas e possui botão para fechar no mobile.
 * 
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {boolean} props.visivel - Define se o menu está visível.
 * @param {Function} props.onFechar - Função chamada ao fechar o menu.
 * @param {Function} props.onSelecionarPagina - Função chamada ao selecionar uma página.
 * @param {string} props.paginaSelecionada - Página atualmente selecionada.
 * 
 * @returns {JSX.Element} O componente de menu lateral.
 */
function MenuLateral({ visivel, onFechar, onSelecionarPagina, paginaSelecionada }) {
  return (
    <aside className={`menuLateral ${visivel ? "mostrar" : ""}`}>
      {visivel && (
        <button className="botaoFecharMenuMobile" onClick={onFechar}>
          <X size={30} color="white" />
        </button>
      )}

      <img src="/assets/images/cafecompLogo.png" alt="Logo" />
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
          <li
            className={paginaSelecionada === "sobre" ? "ativo" : ""}
            onClick={() => onSelecionarPagina("sobre")}
          >
            Sobre
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default MenuLateral;
