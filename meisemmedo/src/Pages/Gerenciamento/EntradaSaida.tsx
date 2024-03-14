import { useState } from "react";
import BarraLateral from "../../Componentes/BarraLateral"
import FuncaoCabecalho from "../../Componentes/Cabecalho"
import Entrada_Saida from "../../Componentes/ComponentesGerenciamento/CompEntra_Saida"
import "../../Componentes/estyle/estilonew.css" 

function EntradaSaida(){

        const [sidebarOpen, setSidebarOpen] = useState(false);
        const [input1, setInput1] = useState('');
        const [input2, setInput2] = useState('');
      
        const toggleSidebar = () => {
          setSidebarOpen(!sidebarOpen);
        };
      
        // const handleSubmit = (event) => {
        //   event.preventDefault();
        //   // Aqui você pode adicionar a lógica para lidar com os dados do formulário
        //   console.log("Dados do formulário:", input1, input2);
        // };

    return(
        <div className="DivTela">
            <FuncaoCabecalho/>
            <BarraLateral/>
            <div className="DivFuncoes">
                <div className="content">
                    <h1>Conteúdo</h1>
                    <form /*onSubmit={handleSubmit} */>
                        <div className="form-group">
                            <label htmlFor="input1">Input 1:</label>
                            <input
                            type="text"
                            id="input1"
                            name="input1"
                            placeholder="Digite algo..."
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="input2">Input 2:</label>
                            <input
                            type="number"
                            id="input2"
                            name="input2"
                            placeholder="Digite um número..."
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
                            />
                        </div>
                            <button type="submit">Enviar</button>
                        </form>
                </div>
            </div>

        </div>
    )
}
export default EntradaSaida;