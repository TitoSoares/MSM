import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
import "../Componentes/estyle/estilonew.css"



function Gerenciamento(){
    
    return(
        <div className="DivTela">
            <FuncaoCabecalho/>
                
            <div className="DivGerenciamento">
                <a className="DivGen1" href="EntradaSaida">
                    <h1>Entradas e Saidas</h1>
                    <img className="imgGen" src="EntradaSaida_Gerenciamento.png"/>
                </a>

                <a className="DivGen1" href="Agenda">
                    <h1>Agenda</h1>
                    <img className="imgGen" src="Agenda_Gerenciamento.png"/>
                </a>
            </div>

            <div className="DivGerenciamento">
                <a className="DivGen2" href="AreaDeUsuario">
                    <h1>Area de Usuario</h1>
                    <img className="imgGen" src="User_Gerenciamento.png"/>
                </a>
            </div>
        </div>
    )
}

export default Gerenciamento;