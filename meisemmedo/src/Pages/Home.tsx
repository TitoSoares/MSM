import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilonew.css"
function Home(){
    return(
        <div className="DivTela">

            <FuncaoCabecalho/>
        
            <h1 className="TxtMSM">Mei Sem Medo</h1>

            <div className="DivHome">
                
                <p className="TxtHome">Bem-vindo ao Mei Sem Medo, um projeto dedicado a descomplicar o processo de abertura e gestão de Microempreendedor Individual (MEI). Nossa missão é proporcionar a orientação e ferramentas necessárias para que empreendedores possam estabelecer e administrar sua MEI com confiança e tranquilidade.</p>
                <a href="Tutorial" className="ButtonHome">Saiba Mais</a>

            </div>

        </div>
    )
}
export default Home;