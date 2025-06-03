import './Footer.css';

/**
 * Componente de rodapé da aplicação.
 * 
 * Exibe informações institucionais do CAFECOMP e da Universidade Federal do Pará,
 * além de logomarcas.
 * 
 * @component
 * @returns {JSX.Element} O componente de rodapé.
 */
function Footer() {
    return (
        <footer id="footer">
            <div id="esquerda">
                <h1>CAFECOMP</h1>
                <p>
                    Centro acadêmico de Engenharia de Computação “Janderson Souza“ <br />
                    Universidade Federal do Pará <br />
                    Campus Universitário de Tucuruí
                </p>
            </div>
            <div id="direita">
                <img src="/assets/images/Logomarca BRANCA.png" alt="" />
                <img src="/assets/images/ufpa.png" alt="" />
            </div>
        </footer>
    );
}

export default Footer;