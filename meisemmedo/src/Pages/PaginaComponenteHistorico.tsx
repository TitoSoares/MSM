import FuncaoCabecalho from "../Componentes/Cabecalho"
import DetalheHistorico from "../Componentes/detalhes/detalheHistorico"
import CompHistServ from "../ComponentesGerenciamento/CompHistServ"

let lista=[
    {id:"Cliente1",data:"14141", hora:"10/10/2023",atividade:""},
    {id:"Cliente2",data:"14144", hora:"30/11/2023",atividade:""},
    {id:"Cliente3",data:"47474", hora:"20/11/2023",atividade:""},
    {id:"Cliente4",data:"585858", hora:"10/11/2023",atividade:""},
    {id:"Cliente5",data:"696969", hora:"30/12/2023",atividade:""},
    {id:"Cliente6",data:"36363", hora:"20/12/2023",atividade:""},
    {id:"Cliente7",data:"56545", hora:"10/12/2023",atividade:""}
]
function Historico(){
    return(
        <div className="planoFundo">
            <FuncaoCabecalho/>
            <div className="Controle">
                <CompHistServ/><br />
                <div className="botaoRespostas">
                    <div><button className="botaosCadastro">Enviar</button></div>
                    <div><button className="botaosCadastro">Cancelar</button></div>
                </div>
                <br /><br />
                <div className="listagem">
                    {lista.map((item, index)=>(  
                        <DetalheHistorico key={index} dados={item}/>
                    ))}
                </div>  
            </div>
        </div>
    )
}
export default Historico