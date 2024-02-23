
type Props={
    dados:{
        id:string
        data:string
        hora:string
        atividade:string
    }
}

function DetalheHistorico({dados}:Props){
    return(
        <div className="lista">
            <ul className="tiraFormatacao">
                <div className="unidadeLista"><li>ID:{dados.id}</li></div>
                <div className="unidadeLista"><li>Data de atendimento:{dados.data}</li></div>
                <div className="unidadeLista"><li>Horario de atendimento:{dados.hora}</li></div>
                <div className="unidadeLista"><li>Atividade realizada:{dados.atividade}</li></div>
            </ul>
        </div>  
    )
}
export default DetalheHistorico