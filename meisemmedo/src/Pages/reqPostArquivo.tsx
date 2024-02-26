import { ChangeEvent, useRef, useState } from "react";
import { api } from "../api";



function ReqPostArquivo(){

    const handleAddPost = async () => {
        
        if(fileInput.current?.files && fileInput.current.files?.length > 0){

        const fileItem = fileInput.current.files[0];
        console.log(fileItem);

            const tiposPermitidos = ['image/png', 'image/jpg', 'image/gif', 'image/jpeg']

            if(tiposPermitidos.includes(fileItem.type)){

            const data = new FormData();
            data.append('image', fileItem);
            data.append('nome_cliente', legenda);

            let json = await api.AdicionarcomArquivo(data);
            if (json.id) {
            alert('Post Adcionado com sucesso!')
            // setUsuarios((usuarios) => [...usuarios, json] );
            } else {
                alert('falha ao adicionar usuario')
            }
            } else {
                alert ('Tipo do arquivo invalido')
            }
        } else {
            alert('ARQUIVO INEXISTENTE')
        }
    }

    const fileInput = useRef<HTMLInputElement>(null)
    const [legenda, setlegenda] = useState('')

    const handleLegendaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setlegenda(e.target.value)
    }

    return(
        <div >

          <input type="file" placeholder="Imagem" ref={fileInput}/>
          <br />
          <input type="text" placeholder="Descrição Imagem" value={legenda} onChange={handleLegendaChange} />
          <br />
          <button onClick={handleAddPost}> Adicionar </button>
        
        </div>
    )
}
export default ReqPostArquivo;


