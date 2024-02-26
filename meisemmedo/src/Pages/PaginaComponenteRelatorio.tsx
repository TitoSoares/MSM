
import FuncaoCabecalho from "../Componentes/Cabecalho"
import DetalheRelatorio from "../Componentes/detalhes/detalheRelatorio"

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
        <div className="planoFundo">
            <FuncaoCabecalho/>
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