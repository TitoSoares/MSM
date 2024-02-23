
import FuncaoCabecalho from "../Componentes/Cabecalho"
import DetalheAgenda from "../Componentes/detalhes/detalheAgenda"
import CompAgendaServ from "../ComponentesGerenciamento/CompAgendaServ"


let lista=[
    {id:"Cliente1",data:"Segunda", hora:"14:00", atividade:"aaaaa"},
    {id:"Cliente2",data:"Terça", hora:"16:30",atividade:"aaaaaaaaa"},
    {id:"Cliente3",data:"Quarta", hora:"18:00",atividade:"aaaaaaa"},
    {id:"Cliente4",data:"Quinta", hora:"20:30",atividade:"aaaaaa"},
    {id:"Cliente5",data:"Sexta", hora:"08:00",atividade:"aaaaaaaa"},
    {id:"Cliente6",data:"Sexta", hora:"09:30",atividade:"aaaaaaaa"},
    {id:"Cliente7",data:"Sabado", hora:"11:00",atividade:"aaaaaa"}
]


function Agenda(){
    return(
        <div className="planoFundo">
            <FuncaoCabecalho/>
            <div className="Controle">
                <CompAgendaServ/><br />
                <div className="botaoRespostas">
                        <div><button className="botaosCadastro">Enviar</button></div>
                        <div><button className="botaosCadastro">Cancelar</button></div>
                </div><br /><br />
                <div className="listagem">
                    {lista.map((item, index)=>(
                        <DetalheAgenda key={index} dados={item}/>
                    ))}
                </div>
            </div>
        </div>
        
    )
}
export default Agenda