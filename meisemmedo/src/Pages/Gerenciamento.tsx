import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioLogadoContext } from "../contexts/contextAuth";

function Gerenciamento(){
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    return(
        <div className="planoFundoInfinito">
            {( !UsuarioLogadoCtx?.name || !UsuarioLogadoCtx?.name === null) &&
                <>
                    Você precisa estar logado!
                    <Link className="Link" to="/login"><div className=""><button className="">LOGIN</button></div></Link>
                    <div className="escritaMEI">
                    <div className="fundoTexto">
                        <div className="txt1">MEI SEM MEDO</div><br/>
                        <div className="txt2">
                            Desvende o caminho do empreendedorismo com confiança, sem medos, sem barreiras. <br /> Transformando sonhos em negócios reais, facilitando sua jornada para o sucesso
                        </div><br />
                        <div className="txt3"> Seu negócio, nossa missão, sem limites para suas conquistas</div>
                    </div>
                    <div className="img"></div>
                </div>
                </>
            }
            
            {UsuarioLogadoCtx?.name &&
            <div>
            <FuncaoCabecalho/>
            <Link className="Link" to="/historico"><div className="caixaFuncGen">Historico de serviços</div></Link>
            <Link className="Link" to="/relatorio"><div className="caixaFuncGen">Relatorio Mensal</div></Link>
            <Link className="Link" to="/entrada_saida"><div className="caixaFuncGen">Entrada/Saida</div></Link>
            <Link className="Link" to="/agenda"><div className="caixaFuncGen">Agendamento</div></Link>
            </div>
            }
        </div>
    )
}
export default Gerenciamento;