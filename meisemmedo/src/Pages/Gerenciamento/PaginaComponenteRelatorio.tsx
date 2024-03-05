import BarraLateral from "../../Componentes/BarraLateral"
import FuncaoCabecalho from "../../Componentes/Cabecalho"
import DetalheRelatorio from "../../Componentes/detalhes/detalheRelatorio"
import "../Componentes/estyle/estilonew.css"    


let lista=[
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""}
]
function Relatorio(){
    return(
        <div className="DivTelaGerenciamento">
            <FuncaoCabecalho/>
            <BarraLateral/>
            <div className="Controle">
                <div className="listagemEspesifica">
                    {lista.map((item, index)=>(
                    <DetalheRelatorio key={index} dados={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Relatorio