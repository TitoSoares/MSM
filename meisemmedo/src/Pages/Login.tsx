import { useContext, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";
import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilonew.css"

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
       navigate('/Gerenciamento');
     }

    return(
        <div className="DivTela">

            <FuncaoCabecalho/>

            <div className="Divlogin">
                
                <div className="DivLeftLogin">

                    <p className="TxtMSMLogin">MEI SEM MEDO</p>
                    <br/>
                    <h4 className="TxtLeftLogin">Desvende o caminho do empreendedorismo com confiança, sem medos, sem barreiras.</h4>
                    <h4 className="TxtLeftLogin">Transformando sonhos em negócios reais, facilitando sua jornada para o sucesso</h4>
                    <br/>
                    <h4 className="TxtLeftLogin">Seu negócio, nossa missão, sem limites para suas conquistas</h4>

                    <img src="Login1.png" className="ImgLeftLogin"/>
                        
                </div>

                
                <div className="DivRightLogin">

                    <img src="Login2.png" className="ImgRightLogin"/>

                    
                    <input placeholder="Insira seu login" type="text"  value={login} onChange={handleLoginInput} className="InputLogin"></input>
                    <input placeholder="Insira sua senha" type="text" value={senha} onChange={handleSenhaInput} className="InputLogin"></input>

                    <br />
                    <div className="DivBotoesLogin">
                        <button className="ButtonLogin">Logar</button>
                        <button className="ButtonLogin" onClick={AcessoDireto}>Acesso</button>
                    </div>

                    <br/><br/>
                    <Link to="/cadastro" className="LinkLogin">Não tem Login? Faça seu Cadastro</Link>
                </div>

            </div>
        </div>
    )
}
export default Login