import "../Componentes/estyle/estilo.css"
import FuncaoCabecalho from "../Componentes/Cabecalho";
import { Link } from "react-router-dom";

function FuncaoGov() {
  return (
    <div className="planoFundo">
      <FuncaoCabecalho/>
        <div className="DivCenter">
            <div className="DivCenter">
              <Link className="Link" target="_blank"to="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/emissao-de-comprovante-ccmei"><div className="caixa1"></div></Link>
              <Link className="Link" target="_blank"to="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/relatorio-mensal"><div className="caixa2"></div></Link>
              <Link className="Link" target="_blank"to="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/declaracao-anual-de-faturamento"><div className="caixa3"></div></Link>
            </div>
            <div className="DivCenter">
              <Link className="Link" target="_blank" to="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/nota-fiscal"><div className="caixa4"></div></Link>
              <Link className="Link" target="_blank"to="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/certidoes-e-comprovantes"><div className="caixa5"></div></Link>
              <Link className="Link" target="_blank"to="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/solucoes-financeiras-para-o-seu-negocio-credmei"><div className="caixa6"></div></Link>
            </div>
            <div className="DivCenter">
                <Link className="Link" target="_blank" to="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/contratacao-de-empregado"><div className="caixa7"></div></Link>
                <Link className="Link" target="_blank" to="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/cadastro-de-atividade-turistica-cadastur"><div className="caixa8"></div></Link>
                <Link className="Link" target="_blank" to="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/baixa-de-mei"><div className="caixa9"></div></Link>
            </div>
        </div>
    </div>
  )
}

export default FuncaoGov;
