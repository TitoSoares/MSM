import "../estyle/estilonew.css"

function BarraLateral(){
    return(
  
        <div className="DivTelaGerenciamento">

            <div className="BarraLateral">
                <h1 className="BarraLateralTitulo">Menu</h1>
                <ul className="MenuBarraLateral">
                    <li className="ItemBarraLateral"><a className="LinkLateral" href="Gerenciamento">Home</a></li>
                    <li className="ItemBarraLateral"><a className="LinkLateral" href="EntradaSaida">Gerenciamento</a></li>
                    <li className="ItemBarraLateral"><a className="LinkLateral" href="AreaDeUsuario">Area de Usuario</a></li>
                    <li className="ItemBarraLateral"><a className="LinkLateral" href="Agenda">Agenda</a></li>
                </ul>
            </div>
        </div>

    )
}

export default BarraLateral;