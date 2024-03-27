import { Controller, Post } from "@nestjs/common";
import { Body, Delete, Get, Param, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import {v4  as uuid} from 'uuid'
import { AgendaArmazenados } from "./agenda.dm";
import { AgendaEntity } from "./agenda.entity";
import { CriaAgendaDTO } from "./dto/agenda.dto";
import { AlteraAgendaDTO } from "./dto/atualizaAgenda.dto";
import { ListaAgendaDTO } from "./dto/listaAgenda.dto";


@Controller('/agenda')
@ApiTags('agenda')
export class AgendaController{
    constructor(private claAgendaArmazenados:AgendaArmazenados){
    }

 // ====================================== //// ====================================== //// ====================================== //

    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
    @Post()
    async criaAgenda(@Body() dadosAgenda:CriaAgendaDTO){
        var agenda=new AgendaEntity(uuid(),dadosAgenda.data,dadosAgenda.hora,dadosAgenda.atividade,dadosAgenda.idusuario)
        this.claAgendaArmazenados.AdicionarAgenda(agenda)
        var retorno={
            id:agenda.id,
            message:"O Agendamento foi feito!"
        }
        return retorno
    }
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})

 // ====================================== //// ====================================== //// ====================================== //    
    @Put("/:id")
    async atualizaAgenda(@Param('id') id:string,@Body() novosDados:AlteraAgendaDTO){
        const AgendaAtualizado=await this.claAgendaArmazenados.atualizaAgenda(id, novosDados)
        return{
            usuario:AgendaAtualizado,
            message:"O agendamento foi atulizado!"
        }   
    }
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})

 // ====================================== //// ====================================== //// ====================================== //
    @Get()
    async RetornoAgenda(){
        const agendaListados=await this.claAgendaArmazenados.Agenda;
        const listaRetorno=agendaListados.map(
            Agenda=> new ListaAgendaDTO(
                Agenda.id,
                Agenda.data,
                Agenda.hora,
                Agenda.atividade          
            )
        )
        return listaRetorno
    }
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})

 // ====================================== //// ====================================== //// ====================================== // 
    @Delete('/:id')
    async removeAgenda(@Param("id")id:string){
        const agendaRemovido=await this.claAgendaArmazenados.removeAgenda(id)
        return{
            usuario:agendaRemovido,
            message:"O agendamento foi cancelado!"
        }
    } 
}
 // ====================================== //// ====================================== //// ====================================== //