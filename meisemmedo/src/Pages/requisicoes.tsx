// import { title } from "process"
// import { ChangeEvent, useEffect, useState } from "react"
// import { api } from "../api"
// import { Produto } from "../Types/produto"
// import { UsuarioNew } from "../Types/usuarionew"

import { useNavigate } from "react-router-dom";

// function Requisicoes(){
//     const[produtos, setProdutos]=useState<Produto[]>([])
//     const[loading, setLoading]=useState(false)

//     const [addTitleText, setaddTitleText] = useState('');
//     const [addBodyText, setaddBodyText] = useState('');

//     const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setaddTitleText(e.target.value)
//     }

//     const handleAddBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setaddBodyText(e.target.value)
//     }

//     useEffect(()=>{

//     },[])
//     const carregarProdutos= async ()=>{
  
//         setLoading(true)
//         let json= await api.CarregarTodosUsuarios();
//         const dataArray=Array.isArray(json)?json:[json]
//         setLoading(false)
//         setProdutos(dataArray)
//     }

//     const handleAddClick = async () => {

//         if (addTitleText && addBodyText) { {

//             let json = await api.AdicionarUsuario(addTitleText, addBodyText, 1);
//             if (json.id) {
//                 alert('Post Adicionado com sucesso!')
//                 setUsuarios((UsuarioNew) => [...usuarios, json] );
//             } else {
//                 alert('Falha ao adicionar usuário')
//             }
//         } else {
//             alert('Prencha as informações.');
//         }

//     }



// /*=================================================================================================================================*/    

//     return(
//         <div>
//             {loading &&
//             <div>Carregando o conteudo desejado</div>
//             }
//             {!loading &&
//                 <div> <button onClick={carregarProdutos}>Carregar Produtos</button><br/></div>
//             }
            
//             <div>
//                 <hr />
//                 <h2>Adicionar novo Post</h2>
//                 <br />
//                 <input 
//                     value={setaddTitleText}
//                     type="text" 
//                     placeholder="Titulo"
//                     onChange={handleAddTitleChange}/>
//                 <br />
//                 <br />
//                 <textarea 
//                 value={addBodyText}
//                 onChange={handleAddBodyChange}/>
//                 <br /><br />
//                 <button onClick={handleAddClick}> Adicionar</button>
//             </div>

//             <div>
//                 <br /><hr />
//                 {produtos.map((item, index)=>(
//                     <div key={index}>
//                         <img src={item.image} className="requisicoes"/>
//                         {item.title} <br /><br />
//                         {item.description} <br />
//                     </div>
//                 ))}
//             </div>
         
//         </div>
        
//     )
// }
// export default Requisicoes;

function Requisicoes(){

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
export default Requisicoes;