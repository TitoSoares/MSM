import { useState } from "react";
import "../Componentes/estyle/estilo.css"

function Entrada_Saida(){

    const[tipo, setEntrada]=useState("")
    const[valor, setSaida]=useState("")

    function handleEntradaInput(event:React.ChangeEvent<HTMLInputElement>){
        setEntrada(event.target.value)
    }
    function handleSaidaInput(event:React.ChangeEvent<HTMLInputElement>){
        setSaida(event.target.value)
    }


    return(
        <div className="ConfComponentesEspecial">
            <div className="caixaInputEspecial">Coloque o tipo:<input type="text" value={tipo} onChange={handleEntradaInput} className="InputsEspecial"></input></div>
            <div className="caixaInputEspecial">Coloque o valor:<input type="text" value={valor} onChange={handleSaidaInput} className="InputsEspecial"></input></div>
        </div>
    )
}
export default Entrada_Saida