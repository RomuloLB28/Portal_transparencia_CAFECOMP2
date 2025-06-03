import './QuadroValores.css';

/**
 * Componente que exibe um quadro com título, valor e complemento.
 * 
 * Usado para apresentar informações resumidas, como valores ou metas.
 * 
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.titulo - Título do quadro.
 * @param {string|number} props.valor - Valor principal exibido.
 * @param {string} props.complemento - Texto complementar.
 * 
 * @returns {JSX.Element} O componente de quadro de valores.
 */
function QuadroValores({ titulo, valor, complemento }) {
    return (
        <div className='valoresjanela'>
            <p>{titulo}</p>
            <h1>{valor}</h1>
            <p>{complemento}</p>
        </div>
    );
}

export default QuadroValores;
