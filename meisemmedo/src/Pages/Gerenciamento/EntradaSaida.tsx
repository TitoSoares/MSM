import { useState } from "react";
import BarraLateral from "../../Componentes/BarraLateral"
import FuncaoCabecalho from "../../Componentes/Cabecalho"
import "../../Componentes/estyle/estilonew.css" 

function EntradaSaida(){

    const [valorInput, setValorInput] = useState('');
    const [booleanoInput, setBooleanoInput] = useState('');
    const [history, setHistory] = useState([]);
  
    const handleSubmit = () => {
      if (valorInput !== '' && booleanoInput !== '') {
        const newEntry = `Valor: ${valorInput} | Tipo: ${booleanoInput}`;
        // setHistory([...history, newEntry]);
        setValorInput('');
        setBooleanoInput('');   
      } else {
        alert('Por favor, preencha ambos os campos!');
      }
    };

    return(
        <div className="DivTela">
            {/* <FuncaoCabecalho/> */}
            <div className="bodyy">
                <BarraLateral/>
                <div className="container">
                    <div className="input-section">
                        <input
                        type="number"
                        placeholder="Digite um valor"
                        value={valorInput}
                        onChange={(e) => setValorInput(e.target.value)}
                        />
                        <select
                        value={booleanoInput}
                        onChange={(e) => setBooleanoInput(e.target.value)}
                        >
                        <option value="">Selecione</option>
                        <option value="Entrada">Entrada</option>
                        <option value="Saida">Saida</option>
                        </select>
                        <button onClick={handleSubmit}>Enviar</button>
                    </div>
                    <div className="history">
                        <p>Histórico:</p>
                        {history.map((entry, index) => (
                        <p key={index}>{entry}</p>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default EntradaSaida;