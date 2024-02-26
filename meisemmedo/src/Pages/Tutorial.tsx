import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilonew.css"

function Tutorial(){
    return(
        <div className="DivTelona">

            <FuncaoCabecalho/>
            
            <div className="DivTutorial">
            
                <div className="DivPasso">

                    <h2 className="TxtTutorial">Passo 1</h2>
                    <ul className="ListaTutorial">
                        <li className="TxtPasso">Acesse o site oficial do Gov.br (<a href="https://www.gov.br/" target="blank" className="testlink">https://www.gov.br/</a>).</li> 
                        <li className="TxtPasso">Caso não possua uma conta, clique em "Acesse sua conta" e siga as instruções para criar uma.</li>
                    </ul>

                </div>

                <div className="DivPasso">

                    <h2 className="TxtTutorial">Passo 2</h2>
                    <ul className="ListaTutorial">
                        <li className="TxtPasso">Após o login, utilize a barra de busca para procurar por "MEI" ou "Microempreendedor Individual".</li>
                        <li className="TxtPasso">Selecione a opção correspondente e clique para acessar a página do MEI no Gov.br.</li>
                    </ul>

                </div>

                <div className="DivPasso">

                    <h2 className="TxtTutorial">Passo 3</h2>
                    <ul className="ListaTutorial">
                        <li className="TxtPasso">Na página do MEI, localize e clique na opção "Formalize-se".</li>
                        <li className="TxtPasso">Siga as instruções para preencher as informações solicitadas, incluindo dados pessoais e sobre o empreendimento.</li>
                    </ul>

                </div>

                <div className="DivPasso">

                    <h2 className="TxtTutorial">Passo 4</h2>
                    <ul className="ListaTutorial">
                        <li className="TxtPasso">Após preencher todas as informações, revise os dados e confirme a abertura da MEI.</li>
                        <li className="TxtPasso">Baixe e guarde esses documentos, pois serão essenciais para operações comerciais e obrigações fiscais.</li>
                    </ul>

                </div>

                <p className="AlertaTutorial">Lembre-se de que este tutorial é apenas uma orientação geral. 
                    Recomenda-se seguir atentamente as instruções do Gov.br e, se necessário, 
                    buscar auxílio de profissionais especializados para garantir o correto registro e funcionamento da sua.
                </p>
                <br />
               
                <label className="TxtPasso">Na página Funções Gov redirecionaremos você até as principais funções do Gov.br</label>
                <a href="/gov" className="ButtonTutorial">Funções Gov</a>
                
            </div>   

        </div>
    )
}
export default Tutorial;