import "../estyle/estilonew.css"

function BarraLateral(){
    return(
  
        <div className="DivTelaGerenciamento">

            <div className="BarraLateral">
                <h1 className="BarraLateralTitulo">Menu</h1>
                <ul className="MenuBarraLateral">
                    <li className="ItemBarraLateral"><a className="linkGen" href="#">Usuario</a></li>
                    <li className="ItemBarraLateral"><a className="linkGen" href="entrada_saida">Gerenc</a></li>
                    <li className="ItemBarraLateral"><a className="linkGen" href="Historico">Hist</a></li>
                    <li className="ItemBarraLateral"><a className="linkGen" href="Agenda">Agenda</a></li>
                    <li className="ItemBarraLateral"><a className="linkGen" href="Relatorio">Relatorio</a></li>
                </ul>
            </div>
        </div>

    )
}

export default BarraLateral;