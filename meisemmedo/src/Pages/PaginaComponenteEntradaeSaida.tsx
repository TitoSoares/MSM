import FuncaoCabecalho from "../Componentes/Cabecalho"
import CompEntra_Saida from "../ComponentesGerenciamento/CompEntra_Saida"

function EntradaSaida(){
    return(
        <div className="planoFundoInfinito">
        <FuncaoCabecalho/>
        <div className="Controle"><CompEntra_Saida/><br/></div>
        <div className="botaoRespostas">
            <div><button className="botaosCadastro">Enviar</button></div>
            <div><button className="botaosCadastro">Cancelar</button></div>
        </div>
        </div>
    )
}
export default EntradaSaida