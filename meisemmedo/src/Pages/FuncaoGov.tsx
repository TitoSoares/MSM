import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilonew.css"
function FuncaoGov(){
    return(
        <div className="DivTela">

            <FuncaoCabecalho/>
        
            <div className="DivFuncao">

                <a target="_blank" href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/emissao-de-comprovante-ccmei" className="FuncaoGov">
                    <h2 className="TxtTitulo">EMISSÃO DE COMPROVANTE (CCMEI)</h2>
                    <p className="TxtDescricao">O CCMEI certifica a abertura da empresa, dispensa alvará e licença ao cumprir obrigações legais. Essencial para abrir conta jurídica, vender a grandes empresas, comprovar CNPJ e atender requisitos diversos.</p>
                </a>

                <a target="_blank" href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/relatorio-mensal" className="FuncaoGov">
                    <div className="TxtTitulo">Relatório Mensal de Receitas Brutas</div>
                    <p className="TxtDescricao">O Relatório Mensal de Receitas Brutas é um registro obrigatório para o MEI no Brasil, documentando mensalmente o faturamento bruto. Preenchido até o dia 20 do mês seguinte às vendas, é crucial para a conformidade fiscal e facilita a Declaração Anual de Faturamento (DASN).</p>
                </a>

                <a target="_blank" href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/declaracao-anual-de-faturamento" className="FuncaoGov">
                    <h2 className="TxtTitulo">Declaração Anual de Faturamento - DASN</h2>
                    <p className="TxtDescricao">A DASN é um documento anual obrigatório para o MEI, enviado à Receita Federal para informar o faturamento bruto do ano anterior, incluindo vendas e serviços. Verifica se o MEI ultrapassou o limite de faturamento permitido. O prazo é geralmente até o final de maio, e o não cumprimento implica em multas.</p>
                </a>

                <a target="_blank" href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/nota-fiscal" className="FuncaoGov">
                    <h2 className="TxtTitulo">Nota Fiscal Eletrônica (NF-e) e Nota Fiscal de Serviço Eletrônica (NFS-e)</h2>
                    <p className="TxtDescricao">NF-e registra venda de produtos, NFS-e documenta prestação de serviços. Ambas são versões eletrônicas para eficiência e transparência nas transações comerciais. NF-e usada em operações entre empresas e para consumidores finais. NFS-e emitida por prestadores de serviços, com regras municipais específicas para o ISS. Simplificam e automatizam processos fiscais.</p>
                </a>

                <a target="_blank" href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/certidoes-e-comprovantes" className="FuncaoGov">
                    <h2 className="TxtTitulo">Certidões e Comprovantes</h2>
                    <p className="TxtDescricao">Certidões e comprovantes do MEI são documentos que atestam sua situação fiscal e regularidade. Certidões, emitidas por órgãos governamentais, confirmam a conformidade em áreas específicas, como tributos e débitos trabalhistas. Comprovantes, como o CCMEI, servem como evidência da condição de MEI. Essenciais para cumprir requisitos legais e participar de transações comerciais.</p>
                </a>

                <a target="_blank" href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/solucoes-financeiras-para-o-seu-negocio-credmei" className="FuncaoGov">
                    <h2 className="TxtTitulo">Contratação de empregado</h2>
                    <p className="TxtDescricao">O (MEI) pode contratar um único empregado. O salário deve ser equivalente ao salário mínimo ou piso da categoria, com recolhimento de encargos como INSS e FGTS. É necessário realizar o registro formal do empregado, cumprir obrigações trabalhistas e previdenciárias, e utilizar o sistema e-Social para registro de informações. Orientação contábil ou jurídica é recomendada para garantir conformidade com as normas.</p>
                </a>

                <a target="_blank" href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/contratacao-de-empregado" className="FuncaoGov">
                    <h2 className="TxtTitulo">Registro no Cadastur</h2>
                    <p className="TxtDescricao">O Registro no Cadastur é uma obrigação para prestadores de serviços turísticos no Brasil, mantido pelo Ministério do Turismo. Abrange agências de turismo, meios de hospedagem, guias, transportadoras e organizadoras de eventos. O cadastro visa regulamentar e fiscalizar o setor, assegurando qualidade e segurança para os turistas. O não cumprimento pode resultar em penalidades.</p>
                </a>

                <a target="_blank" href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/cadastro-de-atividade-turistica-cadastur" className="FuncaoGov">
                    <h2 className="TxtTitulo">Baixa da Empresa</h2>
                    <p className="TxtDescricao">A baixa da empresa MEI é feita, preenchendo formulários e emitindo o DAS para pagamento. Após processamento, obtém-se o Certificado de Baixa, confirmando o encerramento das atividades. A função é encerrar formalmente as atividades do MEI, assegurando conformidade legal. Recomenda-se a orientação de um contador para procedimentos corretos.</p>
                </a>
                
            </div>

            <label className="TxtPasso">Login</label>
                <br /><a href="/Login" className="ButtonTutorial">Login</a>

        </div>
    )
}
export default FuncaoGov;