type Props={
    dados:{
        id:string
        entrada:string
        saida:string
        liquido:string
    }
}
function Relatorio({dados}:Props){
    return(
        <div className="lista">
            <ul className="tiraFormatacao">
                <li>ID:{dados.id}</li>
                <li>Entradas:{dados.entrada}</li> 
                <li>Saida:{dados.saida}</li>
                <li>Líquido:{dados.liquido}</li>
            </ul>
        </div>
    )
}
export default Relatorio