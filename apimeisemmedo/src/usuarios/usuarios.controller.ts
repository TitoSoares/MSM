import { Controller, Post } from "@nestjs/common";
import { Body, Delete, Param, Put } from "@nestjs/common";
import { CriaUsuariosDTO } from "./dto/Cria-Usuario.dto";
import { UsuariosEntity } from "./usuario.entity";
import {v4  as uuid} from 'uuid'
import { UsuariosArmazenados } from "./usuarios.dm";
import { AlteraUsuarioDTO } from "./dto/Atualiza-Usuario.dto";
import { LoginUsuarioDTO } from "./dto/Login-Usuario.dto";
import { ApiResponse, ApiResponseProperty, ApiTags } from "@nestjs/swagger";

@Controller('/usuarios')
@ApiTags('usuarios')
export class UsuariosController{
    constructor(private claUsuariosArmazenados:UsuariosArmazenados){}

    // Cria Usuario
    // ====================================== //// ====================================== //// ====================================== //
        // ====Swagger============================ //
        @ApiResponse({status:200, description:"A operação foi um sucesso"})
        @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
        // ====Swagger============================ //
    
        @Post()

        async criaUsuario(@Body() dadosUsuarios:CriaUsuariosDTO){

            var usuarios=new UsuariosEntity(uuid(),dadosUsuarios.nome,dadosUsuarios.email,dadosUsuarios.cpf,dadosUsuarios.cnpj,
            dadosUsuarios.senha)

            this.claUsuariosArmazenados.AdicionarUsuarios(usuarios)
            var retorno={
                id:usuarios.id,
                message:"Usuario Criado"
            }
            return retorno
        }
    // ====================================== //// ====================================== //// ====================================== //


    // Atualiza Usuario
    // ====================================== //// ====================================== //// ====================================== //
        // ====Swagger============================ //
        @ApiResponse({status:200, description:"A operação foi um sucesso"})
        @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
        // ====Swagger============================ //

        @Put("/:id")

        async atualizaUsuario(@Param('id') id:string,@Body() novosDados:AlteraUsuarioDTO){

            const usuarioAtualizado=await this.claUsuariosArmazenados.atualizaUsuario(id, novosDados)

            return{
                usuario:usuarioAtualizado,
                message:"Usuário atulizado"
            }

        }
    // ====================================== //// ====================================== //// ====================================== //

    
    // Remove Usuarios
    // ====================================== //// ====================================== //// ====================================== //
        // ====Swagger============================ //
        @ApiResponse({status:200, description:"A operação foi um sucesso"})
        @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
        // ====Swagger============================ //

        @Delete('/:id')

        async removeUsuario(@Param("id")id:string){

            const usuarioRemovido=await this.claUsuariosArmazenados.removeUsuario(id)

            return{
                usuario:usuarioRemovido,
                message:"Usuário removido"
            }

        }

    // ====================================== //// ====================================== //// ====================================== //  
    
    
    // Login
    // ====================================== //// ====================================== //// ====================================== //  
        // ====Swagger============================ //
        @ApiResponse({status:200, description:"A operação foi um sucesso"})
        @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
        // ====Swagger============================ //

        @Post('/login')

        async Login(@Body() dadosUsuario:LoginUsuarioDTO){

            var login = this.claUsuariosArmazenados.validarLogin(dadosUsuario.email,dadosUsuario.senha)

            
                return{
                    usuario: login[1] ? login[0] : null,
                    status: login[1],
                    message: login[1] ? "Login Efetuado" : "Usuario ou senha invalidos !"
                }
        }
    // ====================================== //// ====================================== //// ====================================== // 
}