import React, { useState } from "react";
function HistoricoServicos(){

    const[cliente, setCliente]=useState("")

    function handleClienteInput(event:React.ChangeEvent<HTMLInputElement>){
        setCliente(event.target.value)
    }

    return(
        <div className="ConfComponentes">
            <div className="caixaInput">Coloque o ID do cliente para saber o histórico de atendimento:<input type="text" value={cliente} onChange={handleClienteInput} className="Inputs"></input></div>
        </div>
    )
}
export default HistoricoServicos