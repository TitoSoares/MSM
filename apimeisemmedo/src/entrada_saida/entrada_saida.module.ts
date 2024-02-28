import { Module } from "@nestjs/common";
import { Entrada_saidaController } from "./entrada_saida.controller";
import { Entrada_SaidaArmazenados } from "./entrada_saida.dm";

@Module({

    controllers:[Entrada_saidaController],
    providers:[Entrada_SaidaArmazenados]

})

export class Entrada_SaidaModule{
    
}