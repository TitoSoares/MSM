import * as bcrypt from 'bcrypt'
export class UsuariosEntity{
    id:string
    nome:string
    email:string
    cpf:string
    cnpj:string
    dataNasc:string
    senha:string

    trocaSenha(senha){
        const saltOrRounds=10
        this.senha=bcrypt.hashSync(senha,saltOrRounds)
    }
    login(senha){
        return bcrypt.compareSync(senha,this.senha)
    }
    constructor(id:string,nome:string,email:string,cpf:string,cnpj:string,dataNasc:string,senha:string){
    const saltOrRounds=10
    this.id=id;
    this.nome=nome;
    this.email=email
    this.cpf=cpf
    this.cnpj=cnpj
    this.dataNasc=dataNasc
    this.senha=bcrypt.hashSync(senha, saltOrRounds)
    }
}