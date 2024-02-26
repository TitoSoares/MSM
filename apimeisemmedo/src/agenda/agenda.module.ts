import { Module } from "@nestjs/common";
import { AgendaController } from "./agenda.controller";
import { AgendaArmazenados } from "./agenda.dm";

@Module({
    controllers:[AgendaController],
    providers:[AgendaArmazenados]
})
export class AgendaModule{
    
}