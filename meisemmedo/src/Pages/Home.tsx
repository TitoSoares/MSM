import { Link } from "react-router-dom";
import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
function Home(){
    return(
        <div className="planoFundo">
            <FuncaoCabecalho/>
            <div className="home">
                <div className="quemsomos">
                    <div className="escritaQuemSomos">Quem somos..?</div>
                    <div className="imgQuemsomos"></div>
                </div>
                <br /><br />
                <div className="meiSemMedo">MEI Sem Medo</div>
                <div className="textoMei">
                    <div className="txtMEI"><br /><br />O Projeto MeiSemMedo é uma ideia desenvolvida por alunos do curso de Desenvolvedor Full-Stack, com o objetivo de demonstrar as funcionalidades do Nest.js. <br /> O projeto consiste em uma plataforma de auxílio à rotina de um Microempreendedor Individual em sua primeira MEI, proporcionando um sistema de cadastro de clientes, cadastro de serviços em formato de agenda semanal e um registro de renda com as entradas e saídas devidamente cadastradas. <br />O Projeto foi desenvolvido pelos alunos Kristopher e Victor, para o nosso Projeto Integrador.</div>
                    <div className="imgMEI"></div>
                </div>
               <div className="textofinal">Se interessou?<br />Cadastre-se já</div>
               <div className="botaoLogar_Cadastrar">
                    <Link className="Link" to="/login"><div className="DivbotaoLogin"><button className="botaosHome">LOGIN</button></div></Link>
                    <Link className="Link" to="/cadastro"><div className="DivbotaoCadastro"><button className="botaosHome">CADASTRAR</button></div></Link>
               </div>
            </div>
        </div>
    )
}
export default Home;