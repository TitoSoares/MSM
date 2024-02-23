export class ListaUsuarioDTO{
    constructor(
        readonly id:string,
        readonly nome:string,
        readonly email:string,
        readonly cpf:string,
        readonly cnpj:string,
        readonly dataNasc:string,
        readonly senha:string
    ){}
}