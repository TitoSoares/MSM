import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
import "../Componentes/estyle/estilonew.css"
import { useContext, useState } from "react";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import BarraLateral from "../Componentes/BarraLateral";
import Historico from "./Gerenciamento/PaginaComponenteHistorico";


function Gerenciamento(){
    
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    const [conteudoVisivel, setConteudoVisivel] = useState(false);
      
    function toggleDiv (){
      setConteudoVisivel(!conteudoVisivel);
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
  
                <div className="aaaal">
                    <div className="testaa" onClick={toggleDiv}> Cabeçalho da Div</div>

                    {conteudoVisivel && (
                        <div style={{ padding: '10px' }}>
                            <Historico/>
                        </div>
                    )}
                </div>

                

            </div>
            {/* } */}
        </div>
    )
}

export default Gerenciamento;