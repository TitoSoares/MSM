import { Controller, Post } from "@nestjs/common";
import { Body, Delete, Get, Param, Put } from "@nestjs/common";
import { CriaUsuariosDTO } from "./dto/usuarios.dto";
import { UsuariosEntity } from "./usuario.entity";
import {v4  as uuid} from 'uuid'
import { UsuariosArmazenados } from "./usuarios.dm";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { LoginUsuarioDTO } from "./dto/loginUsuario.dto";
import { ApiResponse, ApiResponseProperty, ApiTags } from "@nestjs/swagger";

@Controller('/usuarios')
@ApiTags('usuarios')
export class UsuariosController{
    constructor(private claUsuariosArmazenados:UsuariosArmazenados){
    }
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
    @Post()
    async criaUsuario(@Body() dadosUsuarios:CriaUsuariosDTO){
        var usuarios=new UsuariosEntity(uuid(),dadosUsuarios.nome,dadosUsuarios.email,dadosUsuarios.cpf,dadosUsuarios.cnpj,dadosUsuarios.dataNasc,dadosUsuarios.senha)
        this.claUsuariosArmazenados.AdicionarUsuarios(usuarios)
        var retorno={
            id:usuarios.id,
            message:"Usuario Criado"
        }
        return retorno
    }
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
    @Put("/:id")
    async atualizaUsuario(@Param('id') id:string,@Body() novosDados:AlteraUsuarioDTO){
        const usuarioAtualizado=await this.claUsuariosArmazenados.atualizaUsuario(id, novosDados)
        return{
            usuario:usuarioAtualizado,
            message:"Usuário atulizado"
        }   
    }
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
    @Get()
    async RetornoUsuarios(){
        const usuariosListados=await this.claUsuariosArmazenados.Usuarios;
        const listaRetorno=usuariosListados.map(
            usuario=> new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.email,
                usuario.cpf,
                usuario.cnpj,
                usuario.dataNasc,
                usuario.senha
            )
        )
        return listaRetorno
    }
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
    @Delete('/:id')
    async removeUsuario(@Param("id")id:string){
        const usuarioRemovido=await this.claUsuariosArmazenados.removeUsuario(id)
        return{
            usuario:usuarioRemovido,
            message:"Usuário removido"
        }
    }
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
    @Post('/login')
    async Login(@Body() dadosUsuario:LoginUsuarioDTO){
    var login = this.claUsuariosArmazenados.validarLogin(dadosUsuario.email,dadosUsuario.senha)
    return{
        usuario: login[0],
            status: login[1],
            message: login[1] ? "Login efetuado" : "Usuario ou senha inválidos"
        }
    }
}