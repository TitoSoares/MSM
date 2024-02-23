export class AgendaEntity{
    id:string
    data:string
    hora:string
    atividade:string
    
    constructor(id:string,data:string,hora:string,atividade:string){
    this.id=id;
    this.data=data;
    this.hora=hora
    this.atividade=atividade
    }
}