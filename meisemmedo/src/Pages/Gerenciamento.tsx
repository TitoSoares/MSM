import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
import "../Componentes/estyle/estilonew.css"
import { useContext } from "react";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import BarraLateral from "../Componentes/BarraLateral";

function Gerenciamento(){
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

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
                        <a className="rectangle">1</a>
                        <a className="rectangle">2</a>
                        <a className="rectangle">3</a>
                        <a className="rectangle">4</a>
                        <a className="rectangle">5</a>
                        <a className="rectangle">6</a>
                    </div>

                </div>

            </div>
            {/* } */}
        </div>
    )
}

export default Gerenciamento;