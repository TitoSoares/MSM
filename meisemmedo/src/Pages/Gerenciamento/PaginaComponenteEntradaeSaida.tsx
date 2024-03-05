import FuncaoCabecalho from "../../Componentes/Cabecalho"
import CompEntra_Saida from "../../Componentes//ComponentesGerenciamento/CompEntra_Saida"
import BarraLateral from "../../Componentes/BarraLateral"
import "../Componentes/estyle/estilonew.css"

function EntradaSaida(){
    return(
        <div className="DivTelaGerenciamento">
        <FuncaoCabecalho/>
        <BarraLateral/>
        <div className="Controle"><CompEntra_Saida/><br/></div>
        <div className="botaoRespostas">
            <div><button className="botaosCadastro">Enviar</button></div>
            <div><button className="botaosCadastro">Cancelar</button></div>
        </div>
        </div>
    )
}
export default EntradaSaida