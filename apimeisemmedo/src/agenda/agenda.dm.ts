import { Injectable } from "@nestjs/common";
import { AgendaEntity } from "./agenda.entity";

@Injectable()
export class AgendaArmazenados{

    #agenda:AgendaEntity[]=[]
    async AdicionarAgenda(agenda:AgendaEntity){
        this.#agenda.push(agenda)
    }
    get Agenda(){
        return this.#agenda
    }
    atualizaAgenda(id: string, dadosAtualizacao: Partial<AgendaEntity>){
        const agenda = this.buscaPorID(id);
        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                agenda[chave] = valor;
            }
        )
        return agenda;
    }
    private buscaPorID(id:string){
        const possivelAgenda=this.#agenda.find(
            agendaSalvo=>agendaSalvo.id===id
        )
        if(!possivelAgenda){
            throw new Error("Agendamento não encontrado")
        }
        return possivelAgenda
    }
    async removeAgenda(id:string){
        const agenda=this.buscaPorID(id)
        this.#agenda=this.#agenda.filter(
            agendaSalvo=>agendaSalvo.id !==id
        )
        return agenda
    }
}