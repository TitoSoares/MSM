import { Controller, Post } from "@nestjs/common";
import { Body, Delete, Get, Param, Put } from "@nestjs/common";
import {v4  as uuid} from 'uuid'
import { ApiResponse, ApiResponseProperty, ApiTags } from "@nestjs/swagger";
import { Entrada_SaidaArmazenados } from "./entrada_saida.dm";
import { CriaEntrada_SaidaDTO } from "./dto/entrada_saida.dto";
import { Entrada_SaidaEntity } from "./entrada_saida.entity";
import { AlteraEntrada_SaidaDTO } from "./dto/atualizaEntrada_Saida.dto";
import { ListaEntrada_Saida } from "./dto/listaEntrada_Saida.dto";
import { AlteraFotoEntrada_SaidaDTO } from "./dto/alteraFotoEntrada_Saida.dto";

@Controller('/entrada_saida')
@ApiTags('entrada_saida')
export class Entrada_saidaController{

    constructor(private claEntrada_SaidaArmazenados:Entrada_SaidaArmazenados){}

    // Cria Entrada/Saida
    // ====================================== //// ====================================== //// ====================================== //    
        // ====Swagger============================ //
        @ApiResponse({status:200, description:"A operação foi um sucesso"})
        @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
        // ====Swagger============================ //

        @Post()

        async criaEntrada_Saida(@Body() dadosEntrada_Saida:CriaEntrada_SaidaDTO){

            var entrada_saida=new Entrada_SaidaEntity(uuid(),dadosEntrada_Saida.tipo,dadosEntrada_Saida.valor,dadosEntrada_Saida.foto,dadosEntrada_Saida.idusuario)

            this.claEntrada_SaidaArmazenados.AdicionarEntrada_Saida(entrada_saida)

            var retorno={
                id:entrada_saida.id,
                message:"Operação feita"
            }
            return retorno
        }
    // ====================================== //// ====================================== //// ====================================== //


        // Altera Entrada/Saida
    // ====================================== //// ====================================== //// ====================================== //
    // ====Swagger============================ //
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
    // ====Swagger============================ //

    @Put("/:id")

    async atualizaEntrada_Saida(@Param('id') id:string,@Body() novosDados:AlteraEntrada_SaidaDTO){

        const entrada_saidaAtualizado=await this.claEntrada_SaidaArmazenados.atualizaEntrada_Saida(id, novosDados)

        return{
            usuario:entrada_saidaAtualizado,
            message:"Operação atulizada"
        }   
    }
    // ====================================== //// ====================================== //// ====================================== //


        // Retorna Entrada/Saida
    // ====================================== //// ====================================== //// ====================================== //
    // ====Swagger============================ //
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
    // ====Swagger============================ //

    @Get()
    
    async RetornoEntrada_Saida(){
        
        const entrada_saidaListados=await this.claEntrada_SaidaArmazenados.Entrada_Saida;
        
        const listaRetorno=entrada_saidaListados.map(
            
            entrada_saida=> new ListaEntrada_Saida(
                entrada_saida.id,
                entrada_saida.tipo,
                entrada_saida.valor,
                entrada_saida.foto          
            )
        )

        return listaRetorno
    }
    // ====================================== //// ====================================== //// ====================================== //


        // Deleta Entrada/Saida
    // ====================================== //// ====================================== //// ====================================== //
    // ====Swagger============================ //
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
    // ====Swagger============================ //

    @Delete('/:id')

    async removeEntrada_Saida(@Param("id")id:string){
        
        const entrada_saidaRemovido=await this.claEntrada_SaidaArmazenados.removeEntrada_Saida(id)
        
        return{
            usuario:entrada_saidaRemovido,
            message:"Operação cancelada"
        }
    }
    // ====================================== //// ====================================== //// ====================================== //


        // Adiciona Foto (Opcional)
    // ====================================== //// ====================================== //// ====================================== //
    // ====Swagger============================ //
    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao trocar a foto.'})
    @ApiResponse({ status: 500, description: 'Retorna que o usuário não foi encontrado.'})
    // ====Swagger============================ //
    
    @Post('/foto/:id')

    async atualizaFoto(@Param('id') id: string,@Body() AlteraFotoEntrada_Saida: AlteraFotoEntrada_SaidaDTO){

        const entrada_saida = await this.claEntrada_SaidaArmazenados.atualizaEntrada_Saida(id,AlteraFotoEntrada_Saida)

        return{
            entrada_saida: entrada_saida            
        }
    }
    // ====================================== //// ====================================== //// ====================================== //
}