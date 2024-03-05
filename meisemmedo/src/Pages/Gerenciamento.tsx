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
                        <h1></h1>
                        <p>Este é o conteúdo principal da página com um menu lateral.</p>
                    </div>

                </div>

            </div>
            {/* } */}
        </div>
    )
}

export default Gerenciamento;