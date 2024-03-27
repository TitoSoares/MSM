export class AgendaEntity{
    id:string
    data:string
    hora:string
    atividade:string
    idusuario:string
    
    constructor(id:string,data:string,hora:string,atividade:string,idusuario:string){
    this.id=id;
    this.data=data;
    this.hora=hora;
    this.atividade=atividade;
    this.idusuario=idusuario
    }
}