import { Injectable } from "@nestjs/common";
import { Entrada_SaidaEntity } from "./entrada_saida.entity";

@Injectable()
export class Entrada_SaidaArmazenados{

    #entrada_saida:Entrada_SaidaEntity[]=[]
    async AdicionarEntrada_Saida(entrada_saida:Entrada_SaidaEntity){
        this.#entrada_saida.push(entrada_saida)
    }

    get Entrada_Saida(){
        return this.#entrada_saida
    }

    atualizaEntrada_Saida(id: string, dadosAtualizacao: Partial<Entrada_SaidaEntity>){
        
        const entrada_saida = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                entrada_saida[chave] = valor;
            }
        )
        
        return entrada_saida;
    }

    private buscaPorID(id:string){

        const possivelEntrada_Saida=this.#entrada_saida.find(
            entrada_saidaSalvo=>entrada_saidaSalvo.id===id
        )
        if(!possivelEntrada_Saida){
            throw new Error("Postagem não localizada!")
        }

        return possivelEntrada_Saida
    }

    async removeEntrada_Saida(id:string){

        const entrada_saida=this.buscaPorID(id)
        this.#entrada_saida=this.#entrada_saida.filter(
            entrada_saidaSalvo=>entrada_saidaSalvo.id !==id
        )

        return entrada_saida
    }

}