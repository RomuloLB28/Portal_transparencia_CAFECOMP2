import { useEffect, useState } from "react";
import "./App.css";
import MenuLateral from "./components/MenuLateral/MenuLateral";
import QuadroValores from "./components/QuadroValores/QuadroValores";
import Footer from "./components/Footer/Footer";
import Transacoes from "./components/Transacoes/Transacoes";
import Graficos from "./components/Graficos/Graficos";
import Alertas from "./components/Alertas/Alertas";
import Sobre from "./components/Sobre/Sobre";
import { Menu } from "lucide-react";

function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [saldo, setSaldo] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState("dashboard");
  const [paginaSelecionada, setPaginaSelecionada] = useState("dashboard");
  const [saldoCompleto, setSaldoCompleto] = useState([]);

  // ✅ Estados para o formulário de feedback
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const onSelecionarPagina = (pagina) => {
    setPaginaSelecionada(pagina);
    setPaginaAtual(pagina);
  };

  useEffect(() => {
    fetch(
      "https://portal-transparencia-cafecomp-backend.onrender.com/api/caixa"
    )
      .then((res) => res.json())
      .then((data) => {
        const ultimo = data
          .sort((a, b) => new Date(a.data) - new Date(b.data))
          .at(-1);
        setSaldo([ultimo]);
        setSaldoCompleto(data);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
      });
  }, []);

  const formatarData = (dataISO) => {
    const data = new Date(dataISO);
    return data.toLocaleDateString("pt-BR");
  };

  const formatarValor = (valor) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const abrirModal = () => {
    // ✅ Limpa os campos toda vez que abrir o modal
    setEmail("");
    setAssunto("");
    setMensagem("");
    setModalAberto(true);
  };

  const enviarFeedback = () => {
    console.log("Email:", email);
    console.log("Assunto:", assunto);
    console.log("Mensagem:", mensagem);

    alert("Feedback enviado com sucesso!");

    // ✅ Limpa os campos após enviar (opcional)
    setEmail("");
    setAssunto("");
    setMensagem("");

    setModalAberto(false);
  };

  return (
    <div className="window">
      <button
        className="botaoMenuMobile"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <Menu size={30} />
      </button>
      <MenuLateral
        visivel={menuAberto}
        onFechar={() => setMenuAberto(false)}
        onSelecionarPagina={onSelecionarPagina}
        paginaSelecionada={paginaSelecionada}
      />

      <main className={`content ${modalAberto ? "blur" : ""}`}>
        {paginaAtual === "dashboard" && (
          <div id="aux">
            <h1>Resumo Financeiro</h1>
            <p>Aqui você pode ver os principais indicadores.</p>

            <div id="valores">
              {saldo.length > 0 ? (
                saldo.map((item) => (
                  <QuadroValores
                    key={item.id}
                    valor={formatarValor(item.saldo)}
                    complemento={`Data: ${formatarData(item.data)}`}
                  />
                ))
              ) : (
                <p>Carregando valores...</p>
              )}
            </div>

            <div id="info">
              <p>
                O caixa do CAFECOMP é formado por arrecadações de eventos,
                vendas e contribuições diversas. Esses recursos são usados para
                promover atividades, apoiar projetos estudantis, organizar
                eventos e oferecer suporte aos alunos da FECOMP. Prezamos pela
                transparência, e todos os valores arrecadados e utilizados estão
                sempre acessíveis para consulta. Nosso objetivo é reinvestir
                cada centavo em benefícios para a comunidade acadêmica, tornando
                a experiência de todos mais rica e colaborativa.
              </p>
            </div>

            <div id="feedback">
              <p>
                Dúvidas? Reclamações? Envie um feedback e entraremos em contato!
              </p>
              <button id="botaoFeedback" onClick={abrirModal}>
                FEEDBACK
              </button>
            </div>
          </div>
        )}

        {paginaAtual === "transacoes" && <Transacoes dados={saldoCompleto} />}
        {paginaAtual === "graficos" && <Graficos dados={saldoCompleto} />}
        {paginaAtual === "alertas" && <Alertas dados={saldoCompleto} />}
        {paginaAtual === "sobre" && <Sobre />}

        <Footer />
      </main>

      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>FEEDBACK</h2>
            <label>Seu email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Assunto</label>
            <input
              type="text"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
            />
            <label>Mensagem</label>
            <textarea
              rows="5"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            ></textarea>
            <p className="warning">
              Atenção: isto é uma mensagem de envio único, então revise seu
              texto antes do envio!
            </p>
            <button className="send" onClick={enviarFeedback}>
              Enviar
            </button>
            <button className="cancel" onClick={() => setModalAberto(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
