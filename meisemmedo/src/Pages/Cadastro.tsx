import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilo.css"
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
    function handleDataInput(event: React.ChangeEvent<HTMLInputElement>) {
        setData(event.target.value);
    }
    function handleSenhaInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
    }
    function handleSenhaConfirmacaoInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSenhaConfirmacao(event.target.value);
    }
    return(
        <div className="planoFundoInfinito">
            <FuncaoCabecalho/>
            <Link className="textFacaCadastro" to="/login"><div>Já tem seu Login? Entre aqui</div></Link>
            <div className="formatacaoCadastro">
                <div className="imagemLogo"></div>
                    <div className="cadastro">

                        <input placeholder="Insira o Nome" type="text" value={nome} onChange={handleNomeInput}  className="caixaTexto"></input>
                        <input placeholder="Insira o E-mail" type="text" value={email} onChange={handleEmailInput}  className="caixaTexto"></input>
                        <input placeholder="Insira o CPF" type="text" value={cpf} onChange={handleCpfInput}  className="caixaTexto"></input>
                        <input placeholder="Insira o CNPJ" type="text" value={cnpj} onChange={handleCnpjInput}  className="caixaTexto"></input>
                        <input placeholder="Insira a Data de Nascimento" type="text" value={data} onChange={handleDataInput} className="caixaTexto"></input>
                        <input placeholder="Insira a Senha" type="text" value={senha} onChange={handleSenhaInput}  className="caixaTexto"></input>
                        <input placeholder="Confirme sua senha" type="text" value={senhaConfirmacao} onChange={handleSenhaConfirmacaoInput}  className="caixaTexto"></input>

                        {/* <div className="elementoCadastro">Nome:<input type="text" value={nome} onChange={handleNomeInput}  className="caixaCadastro"></input></div>
                        <div className="elementoCadastro">Email:<input type="text" value={email} onChange={handleEmailInput}  className="caixaCadastro"></input></div>
                        <div className="elementoCadastro">Cpf:<input type="text" value={cpf} onChange={handleCpfInput}  className="caixaCadastro"></input></div>
                        <div className="elementoCadastro">Cnpj:<input type="text" value={cnpj} onChange={handleCnpjInput}  className="caixaCadastro"></input></div>
                        <div className="elementoCadastro">Data de nasc:<input type="text" value={data} onChange={handleDataInput} className="caixaCadastro"></input></div>
                        <div className="elementoCadastro">Senha:<input type="text" value={senha} onChange={handleSenhaInput}  className="caixaCadastro"></input></div>
                        <div className="elementoCadastro">Confirmar senha:<input type="text" value={senhaConfirmacao} onChange={handleSenhaConfirmacaoInput}  className="caixaCadastro"></input></div> */}

                    </div>
                    <div className="botaoRespostas">
                        <div><button className="botaosCadastro">Enviar</button></div>
                        <div><button className="botaosCadastro">Cancelar</button></div>
                    </div>
            </div>
        </div>
    )
}
export default Cadastro