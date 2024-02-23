import { Link } from "react-router-dom"
import { UncontrolledCarousel } from "reactstrap"
import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilo.css"
function Tutorial(){
    return(
        <div className="planoFundo">
            <FuncaoCabecalho/>
            <br />
            <div className="txtTitulo">Como criar minha conta MEI?</div>
            <div className="carrossel">
            <UncontrolledCarousel
  items={[
    {
      key: 1,
      src: '/Tutorial_1_Slide.png'
    },
    {
      key: 2,
      src: '/Tutorial_2_Slide.png'
    },
    {
      key: 3,
      src: '/Tutorial_3_Slide.png'
    },
    {
        key: 4,
        src: '/Tutorial_4_Slide.png'
    }
  ]}
 />
            </div>
            <div className="txtTutorial">Já é MEI?<br /> Na página Funções Gov redirecionaremos você até as principais funções do Gov.br</div>
            <Link className="Link" to='/gov'><button className="botaoFunGov">Ir para Função Gov</button></Link>
        </div>
    )
}
export default Tutorial