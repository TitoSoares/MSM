import { type } from "@testing-library/user-event/dist/type";
import "../estyle/estilonew.css"

import { Link } from "react-router-dom";


function FuncaoCabecalho(){
    return(
        <div>
            <header className="HeadCabecalho">
            
                <div><img className="ImgCabecalho" src="MSM_logo1.png"/></div>

                <div className="DivCabecalho">
                    
                    <div className="ItemCabecalho"><a href="#"><Link to="/">Home</Link></a></div>
                    <div className="ItemCabecalho"><a href="#"><Link to="/tutorial">Como criar uma MEI?</Link></a></div>
                    <div className="ItemCabecalho"><a href="#"><Link to="/gov">Funções Gov</Link></a></div>
                    <div className="ItemCabecalho"><a href="#"><Link to="/gen">Login</Link></a></div>
                 
                </div>

            </header>

        </div>
    )
}

export default FuncaoCabecalho;