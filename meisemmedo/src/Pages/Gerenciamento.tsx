import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioLogadoContext } from "../contexts/contextAuth";

function Gerenciamento(){
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    return(
        <div className="DivTela">
            {( !UsuarioLogadoCtx?.name || !UsuarioLogadoCtx?.name === null) &&
                <>
                    Você precisa estar logado!
                    <Link className="Link" to="/login"><div className=""><button className="">LOGIN</button></div></Link>
                </>
            }
            
            {UsuarioLogadoCtx?.name &&
            <div>
                <FuncaoCabecalho/>
                <div className="DivTela">

                    <div id="sidebar">
                        <ul>
                            <li><a href="#">Item 1</a></li>
                            <li><a href="#">Item 2</a></li>
                            <li><a href="#">Item 3</a></li>
                            <li><a href="#">Item 4</a></li>
                        </ul>
                    </div>

                    <div id="content">
                        <h1>Conteúdo Principal</h1>
                        <p>Este é o conteúdo principal da página com um menu lateral.</p>
                    </div>

                </div>

            </div>
            }
        </div>
    )
}

{/* <Link className="Link" to="/historico"><div className="caixaFuncGen">Historico de serviços</div></Link>
<Link className="Link" to="/relatorio"><div className="caixaFuncGen">Relatorio Mensal</div></Link>
<Link className="Link" to="/entrada_saida"><div className="caixaFuncGen">Entrada/Saida</div></Link>
<Link className="Link" to="/agenda"><div className="caixaFuncGen">Agendamento</div></Link> */}


                    {/* <a className="function1">
                        <h2 className="h2">Entrada e Saida</h2>
                        <p className="p1">Descrição da Função 1.</p>
                    </a>

                    <a className="function1">
                        <h2 className="h2">Indisponivel</h2>
                        <p className="p1">A fazer</p>
                    </a>

                    <a href="#" className="function1">
                        <h2 className="h2">Indisponivel</h2>
                        <p className="p1">A fazer</p>
                    </a>

                    <a className="function1">
                        <h2 className="h2">Indisponivel</h2>
                        <p className="p1"> A fazer</p>
                    </a> */}


export default Gerenciamento;