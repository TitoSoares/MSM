import { Module } from "@nestjs/common";
import { UsuariosController } from "./usuarios.controller";
import { UsuariosArmazenados } from "./usuarios.dm";
import { EmailUnicoValidator } from "./validacao/email-unico.validator";


    @Module({

        controllers:[UsuariosController],
        providers:[UsuariosArmazenados, EmailUnicoValidator]

    })
    
   export class UsuariosModule{}