export class ListaAgendaDTO{
    constructor(
        readonly id:string,
        readonly data:string,
        readonly hora:string,
        readonly atividade:string
    ){}
}