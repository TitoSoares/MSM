import { useNavigate } from "react-router-dom";
import "../Componentes/estyle/estilonew.css"
import FuncaoCabecalho from "../Componentes/Cabecalho";

function NotFound(){

    const navigate = useNavigate();
    function handleClick(){
        navigate('/');
    }

    return(
        <div className="DivNotFound">

            <FuncaoCabecalho/>
            <div className="DivButton404"><button className="ButtonNotFound" onClick={handleClick}>Home</button></div>

        </div>
    )
}
export default NotFound;