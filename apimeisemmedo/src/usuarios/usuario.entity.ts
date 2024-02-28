import * as bcrypt from 'bcrypt'


export class UsuariosEntity{
    
    // 1° etapa - cria
    id:string
    nome:string
    email:string
    cpf:string
    cnpj:string
    senha:string

    // 2° etapa - criptografa
    trocaSenha(senha){
        const saltOrRounds=10
        this.senha=bcrypt.hashSync(senha,saltOrRounds)
    }
    login(senha){
        return bcrypt.compareSync(senha,this.senha)
    }

    // 2° etapa - constroe
    constructor(id:string,nome:string,email:string,cpf:string,cnpj:string,senha:string){
    const saltOrRounds=10
    this.id=id;
    this.nome=nome;
    this.email=email
    this.cpf=cpf
    this.cnpj=cnpj
    this.senha=bcrypt.hashSync(senha, saltOrRounds)
    }
}