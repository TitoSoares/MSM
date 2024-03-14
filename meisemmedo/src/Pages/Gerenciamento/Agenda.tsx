import BarraLateral from "../../Componentes/BarraLateral"
import FuncaoCabecalho from "../../Componentes/Cabecalho"
import "../../Componentes/estyle/estilonew.css" 

function Agenda(){
    return(
        <div className="DivTela">
            <FuncaoCabecalho/>
            <div className="DivFuncoes">
                <BarraLateral/>
            </div>
        </div>
    )
}
export default Agenda