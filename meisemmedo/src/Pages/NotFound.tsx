import { useNavigate } from "react-router-dom";
import "../Componentes/estyle/estilo.css"

function NotFound(){

    const navigate = useNavigate();
    function handleClick(){
        navigate('/');
    }

    return(
        <div className="notFound">

          <button className="botaoNotFound" onClick={handleClick}>Home</button>
        
        </div>
    )
}
export default NotFound;