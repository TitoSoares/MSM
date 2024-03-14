import BarraLateral from "../../Componentes/BarraLateral"
import FuncaoCabecalho from "../../Componentes/Cabecalho"
import "../../Componentes/estyle/estilonew.css" 

function AreaDeUsuario(){
    return(
        <div className="DivTela">
            <FuncaoCabecalho/>
            <div className="DivFuncoes">
                <BarraLateral/>
            </div>
        </div>
    )
}
export default AreaDeUsuario