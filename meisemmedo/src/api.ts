
export const api = {

    CriarConta: async (nome: string, email: string, cpf: string, cnpj: string, senha: string) => {
        const response = await fetch('http://localhost:3010/usuarios', {
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                email: email,
                cpf: cpf,
                cnpj: cnpj,
                senha: senha,
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        let json = await response.json()
        return (json)
    },

    Logar: async(username:string, password:String) => {
        {            
           
            let response = await fetch('http://localhost:3010/usuarios/login',
            {              
                method: 'POST',
                body: JSON.stringify
                ({        
                   email:username, 
                   senha:password 
                }),                  
                headers: {              
                    'Content-Type': 'application/json; charset=utf-8'
                    }                
               
             }  
             );
            let json = await response.json();        
   
            console.log(json);
            return json;
        }
    },

    AdiconarOperacao: async(sTipo:String, fValor:String, sIdusuario:String) => {
        {            
           
            let response = await fetch('http://localhost:3010/entrada_saida',
            {              
                method: 'POST',
                body: JSON.stringify
                ({        
                   tipo:sTipo, 
                   valor:fValor,
                   idusuario:sIdusuario 
                }),                  
                headers: {              
                    'Content-Type': 'application/json; charset=utf-8'
                    }                
               
             }  
             );    
            let json = await response.json();        
   
            console.log(json);
            return json;
        }
    }

}
