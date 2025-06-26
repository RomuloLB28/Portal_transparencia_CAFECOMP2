import React from "react";
import "./Sobre.css";

/**
 * Componente que exibe informações sobre o propósito do projeto e os desenvolvedores.
 *
 * @returns {JSX.Element} O componente de informações "Sobre".
 */
function Sobre() {
  return (
    <div className="sobre-container">
      <h2>Sobre</h2>
      <div className="sobre-conteudo">
        <p>
          Nosso objetivo é garantir total transparência quanto aos recursos arrecadados pelo centro acadêmico.
          Por isso, desenvolvemos este projeto com a finalidade de que os alunos possam acessar e acompanhar qualquer
          atualização nos valores do caixa.
        </p>
        <p className="desenvolvedores">Desenvolvedores</p>
        <p><a href="https://www.linkedin.com/in/romulo-lobato/">ROMULO LOBATO BEZERRA</a></p>
        <p><a href="https://www.linkedin.com/in/williamsdavid5/">WILLIAMS DAVID DUARTE</a></p>
      </div>
    </div>

  );
}

export default Sobre;
