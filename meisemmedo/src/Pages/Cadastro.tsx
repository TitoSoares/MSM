import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilonew.css"
import { useState } from "react";
import { Link } from "react-router-dom";

function Cadastro(){

    const [nome, setNome]=useState("")
    const [email, setEmail]=useState("")
    const [cpf, setCpf]=useState("")
    const [cnpj, setCnpj]=useState("")
    const [data, setData]=useState("")
    const [senha, setSenha]=useState("")
    const [senhaConfirmacao, setSenhaConfirmacao]=useState("")
    
    function handleNomeInput(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }
    function handleCpfInput(event: React.ChangeEvent<HTMLInputElement>) {
        setCpf(event.target.value);
    }
    function handleCnpjInput(event: React.ChangeEvent<HTMLInputElement>) {
        setCnpj(event.target.value);
    }
    function handleSenhaInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
    }
    function handleSenhaConfirmacaoInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSenhaConfirmacao(event.target.value);
    }

    

    return(

        <div className="DivTela">
        
            <FuncaoCabecalho/>

            <div className="DivLinkCadastro">
                <Link className="LinkCadastro" to="/login">Já tem seu Login? Entre aqui</Link>
            </div>

            <div className="DivCadastro">

                
                <div className="DivInputCadastro">
                    <label className="LabelCadastro">Nome:</label>
                    <input className="InputCadastro" type="text" placeholder="Digite seu nome" onChange={handleNomeInput}/>
                </div>

                <div className="DivInputCadastro">
                    <label className="LabelCadastro">Email:</label>
                    <input className="InputCadastro" type="email" placeholder="Digite seu email" onChange={handleEmailInput}/>
                </div>

                <div className="DivInputCadastro">
                    <label className="LabelCadastro">CPF:</label>
                    <input className="InputCadastro" type="CPF" placeholder="Digite seu CPF" onChange={handleCpfInput}/>
                </div>

                <div className="DivInputCadastro">
                    <label className="LabelCadastro">CNPJ:</label>
                    <input className="InputCadastro" type="CPNJ"placeholder="Digite seu CNPJ" onChange={handleCnpjInput}/>
                </div>

                <div className="DivInputCadastro">
                    <label className="LabelCadastro">Senha:</label>
                    <input className="InputCadastro" type="Senha" placeholder="Digite sua senha" onChange={handleSenhaInput}/>
                </div>

                <div className="DivInputCadastro">
                    <label className="LabelCadastro">Repita sua senha:</label>
                    <input className="InputCadastro" type="SenhaConfirmacao" placeholder="Digite novamente sua senha" onChange={handleSenhaConfirmacaoInput}/>
                </div>
        
                <button className="ButtonCadastro">Cadastrar</button>

            </div>

        </div>

    )
}
export default Cadastro