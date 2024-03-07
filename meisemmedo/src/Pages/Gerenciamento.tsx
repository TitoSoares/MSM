import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
import "../Componentes/estyle/estilonew.css"
import { useContext, useState } from "react";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import BarraLateral from "../Componentes/BarraLateral";


function Gerenciamento(){
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    const [expandido, setExpandido] = useState(false);
      
    function expandirContrair () {
          setExpandido(!expandido);
        };

    return(
        <div className="DivTela">
            {/* {( !UsuarioLogadoCtx?.name || !UsuarioLogadoCtx?.name === null) &&
                <>
                    Você precisa estar logado!
                    <Link className="Link" to="/login"><div className=""><button className="">LOGIN</button></div></Link>
                </>
            }
            
            {UsuarioLogadoCtx?.name && */}
            <div className="DivTela">
                <FuncaoCabecalho/>
                <div className="DivTelaGerenciamento">

                    <BarraLateral/>
                    <div className="Conteudo">

                        <div className={`expansivel ${expandido ? 'expandido' : ''}`} id="minhaDiv">
                            <div className="conteudo">
                            <p>Conteúdo da div expansível.</p>
                            <p>Outras informações podem estar aqui.</p>
                            </div>
                        </div>

                        <div className="botao-expansao" onClick={expandirContrair}>
                            {expandido ? 'Contrair' : 'Expandir'}
                        </div>
                        
                        {/* <a className="rectangle">Usuario</a>
                        <a className="rectangle" href="entrada_saida">Gerenciamento</a>
                        <a className="rectangle" href="Historico">Historico</a>
                        <a className="rectangle" href="Agenda">Agenda</a>
                        <a className="rectangle" href="Relatorio">Relatorio</a>
                        <a className="rectangle">🛑Em Reforma🛑</a> */}
                        
                    </div>

                </div>

            </div>
            {/* } */}
        </div>
    )
}

export default Gerenciamento;