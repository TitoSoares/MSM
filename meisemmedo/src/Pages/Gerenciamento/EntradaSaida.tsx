import { useState,useContext } from "react";
import { api } from "../../api";
import BarraLateral from "../../Componentes/BarraLateral"
import FuncaoCabecalho from "../../Componentes/Cabecalho"
import "../../Componentes/estyle/estilonew.css" 
import { UsuarioLogadoContext } from "../../contexts/contextAuth";


function EntradaSaida(){

    const [operacao, setOperacao] = useState('');
    const [valor, setValor] = useState('');    
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);
    

  
    const handleAddOperation = async () => {   

        alert(operacao);
        alert(valor);
        alert(UsuarioLogadoCtx?.idusuario);
   

        // let json = await api.AdiconarOperacao(operacao, valor, idUsuario);
        // alert(operacao);
        // alert(valor);
        // alert(UsuarioLogadoCtx?.idusuario);

        // if (json.id) {
        //     alert('Operação Adicionado com sucesso!')    

        // } else {
        //     alert('Falha ao adicionar Operação ' + json.message)
        // }        
    }  

    return(           
        <div className="DivTela">
            <FuncaoCabecalho/>
            <div className="bodyy">
                <BarraLateral/>
                <div className="container">
                    <div className="input-section">
                        <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="true">Entrada</option>
                        <option value="false">Saida</option>
                        </select>
                        
                        <input type="currency" placeholder="Digite um valor" value={valor} onChange={(e) => setValor(e.target.value)}/>
                        
                        <button onClick={handleAddOperation}>Enviar</button>
                    </div>
                    <div className="history">
                        <p>Histórico:</p>
                        {UsuarioLogadoCtx?.idusuario}
                        {/* {history.map((entry, index) => (
                        <p key={index}>{entry}</p>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>        
    )
}
export default EntradaSaida;