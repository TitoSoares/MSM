import "../estyle/estilonew.css"
import { Link } from "react-router-dom";


function FuncaoCabecalho(){
    return(
        <div>
            <header className="HeadCabecalho">
            
                <div><img className="ImgCabecalho" src="MSM_logo.png"/></div>

                <div className="DivCabecalho">
              
                    <div className="ItemCabecalho"><Link className="LinkCabecalho" to="/">Home</Link></div>
                    <div className="ItemCabecalho"><Link className="LinkCabecalho" to="/tutorial">Como criar uma MEI</Link></div>
                    <div className="ItemCabecalho"><Link className="LinkCabecalho" to="/gov">Funções Gov</Link></div>
                    <div className="ItemCabecalho"><Link className="LinkCabecalho" to="/login">Login</Link></div>
                    {/* QUANDO ESTIVER LOGADO <div className="ItemCabecalho"><a href="#"><Link to="/gen">Gerenciamento</Link></a></div> */}
                </div>

            </header>

        </div>
    )
}

export default FuncaoCabecalho;