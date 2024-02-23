import { useContext, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";
import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
import { UsuarioLogadoContext } from "../contexts/contextAuth";

function Login(){
    const[login,setLogin]=useState("")
    const[senha,setSenha]=useState("")

    function handleLoginInput(event: React.ChangeEvent<HTMLInputElement>) {
        setLogin(event.target.value);
    }
    function handleSenhaInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
    }

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    const navigate = useNavigate();

    const AcessoDireto = () => {
    UsuarioLogadoCtx?.setName(login);
       navigate('/gen');
     }

    return(
        <div>
                <FuncaoCabecalho/>
            <div className="logincoluna">
                
                <div className="escritaMEI">
                    <div className="fundoTexto">
                        <h1>MEI SEM MEDO</h1><br/>
                        
                            Desvende o caminho do empreendedorismo com confiança, sem medos, sem barreiras. 
                            <br /> Transformando sonhos em negócios reais, facilitando sua jornada para o sucesso
                            <br />
                            Seu negócio, nossa missão, sem limites para suas conquistas
                            <br /><br /><br /><br />
                            <div className="img"></div>  
                        

                      
                    </div>
                    
                </div>
                <div className="login">
                    <div className="imagemLogin"></div>

                    <input placeholder="Insira seu login" type="text" value={login} onChange={handleLoginInput} className="caixaTexto"></input>
                    <input placeholder="Insira sua senha" type="text" value={senha} onChange={handleSenhaInput} className="caixaTexto"></input>
                    <div className="funLogin">

                    <button className="txtBotao">Logar</button>
                    <button className="txtBotao" onClick={AcessoDireto}>Acesso</button>


                        {/* <div className="botaoLogin"><div className="txtBotao">Logar</div></div>
                        <div className="botaoCancel"><div className="txtBotao">Cancelar</div></div>
                        <div className="botaoCancel"><div className="txtBotao" onClick={AcessoDireto}>Acesso D</div></div>  */}
                    </div>
                    <Link to="/cadastro"><div className="textFacaCadastro">Não tem Login? Faça seu Cadastro</div></Link>
                </div>
            </div>
        </div>
    )
}
export default Login