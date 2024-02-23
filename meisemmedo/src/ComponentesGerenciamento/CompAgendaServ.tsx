import { useState } from "react";
import "../Componentes/estyle/estilo.css"


function AgendaServicos(){

    const [nome, setNome]=useState("")
    const [data, setData]=useState("")
    const [hora, setHora]=useState("")
    const [atividade, setAtividade]=useState("")

    function handleNomeAgendaInput(event:React.ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleDataAgendaInput(event:React.ChangeEvent<HTMLInputElement>){
        setData(event.target.value)
    }
    function handleHoraAgendaInput(event:React.ChangeEvent<HTMLInputElement>){
        setHora(event.target.value)
    }
    function handleAtividadeAgendaInput(event:React.ChangeEvent<HTMLInputElement>){
        setAtividade(event.target.value)
    }
    

    return(
        <div className="ConfComponentes">
            <div className="caixaInput">Nome do Cliente:<input type="text" value={nome} onChange={handleNomeAgendaInput} className="Inputs"></input></div>
            <div className="caixaInput">Dia:<input type="text" value={data} onChange={handleDataAgendaInput} className="Inputs"></input></div>
            <div className="caixaInput">Horário:<input type="text" value={hora} onChange={handleHoraAgendaInput} className="Inputs"></input></div>
            <div className="caixaInput">Atividade:<input type="text" value={atividade} onChange={handleAtividadeAgendaInput} className="Inputs"></input></div><br />
        </div>
    )
}
export default AgendaServicos