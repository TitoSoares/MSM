export class Entrada_SaidaEntity{
    id:string
    tipo:boolean
    valor:Number
    foto:string

    constructor(id:string, tipo:boolean,valor:Number, foto:string){
    this.id=id;
    this.tipo=tipo;
    this.valor=valor;
    this.foto=foto;
    }
}