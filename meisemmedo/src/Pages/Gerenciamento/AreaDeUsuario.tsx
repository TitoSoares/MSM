import BarraLateral from "../../Componentes/BarraLateral"
import FuncaoCabecalho from "../../Componentes/Cabecalho"
import "../../Componentes/estyle/estilonew.css" 

function AreaDeUsuario(){
    return(
        <div className="DivTela">
            <FuncaoCabecalho/>
            <div className="bodyo">
                <div className="container">
                    <section className="user-info">
                        <h2>Detalhes do Usuário</h2>
                        <p><strong>Nome:</strong> Fulano de Tal</p>
                        <p><strong>Email:</strong> fulano@example.com</p>
                        <p><strong>Nível de Acesso:</strong> Usuário Regular</p>
                    </section>
                    <section className="user-actions">
                        <h2>Ações Disponíveis</h2>
                        <ul>
                            <li><a href="#">Editar Perfil</a></li>
                            <li><a href="#">Alterar Senha</a></li>
                            <li><a href="#">Histórico de Compras</a></li>
                            <li><a href="#">Sair</a></li>
                        </ul>
                    </section>
                </div>

                <div className="edit-profile-container">
                    <h2>Editar Perfil</h2>
                    <form action="#" method="post">
                        <label>Nome:</label>
                        <input type="text" id="name" name="name" value="Fulano de Tal" required/>

                        <label>Email:</label>
                        <input type="email" id="email" name="email" value="fulano@example.com" required/>

                        <label>Nova Senha:</label>
                        <input type="password" id="password" name="password"/>

                        <input type="submit" value="Salvar Alterações"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AreaDeUsuario