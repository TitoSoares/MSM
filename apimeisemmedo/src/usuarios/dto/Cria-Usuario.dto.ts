import { IsString } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
import { IsNotEmpty } from "class-validator";
import { IsEmail } from "class-validator";
import { MinLength } from "class-validator";
import { SenhaForte } from "../validacao/strongpass.valitor";
import { ApiProperty } from "@nestjs/swagger";

export class CriaUsuariosDTO{
    
    // NOME
 // ====================================== //// ====================================== //// ====================================== //    
        @ApiProperty({
            example:"Victor Augusto Farias Ferreira",
            description:"O nome é usado para identificar o usuário"
        })
        //=====//
        @IsString()
        @IsNotEmpty({message:"O nome do usuário não pode ser vazio"})
        nome:string

    // EMAIL
 // ====================================== //// ====================================== //// ====================================== //
        @ApiProperty({
            example:"vitor.iac20166@gmail.com",
            description:"O email é usado para fazer o Login e identificação"
        })
        //=====//
        @IsEmail(undefined,{message:"O e-mail é inválido, tente novamente"})
        @EmailUnico({message:"Já existe esse e-mail cadastrado"})
        email:string

    // CPF
 // ====================================== //// ====================================== //// ====================================== //
        @ApiProperty({
            example:"999.999.999.99",
            description:"O Cpf é usado para identificar se o usuário como válido"
        })
        //=====//
        @IsString()
        cpf:string

    // CNPJ
 // ====================================== //// ====================================== //// ====================================== //
        @ApiProperty({
            example:"99.999.999/9999-99",
            description:"O Cnpj é usado para idenficar se o Cnpj cadastradado é válido"
        })
        //=====//
        @IsString()
        cnpj:string

    // SENHA
 // ====================================== //// ====================================== //// ====================================== //
        @ApiProperty({
            example:"Senh@l58#7",
            description:"A senha deve ser uma senha forte, com esse tipo de formatação"
        })
        //=====//
        @MinLength(8,{message:"Senha inválida, tente novamente"})
        @SenhaForte({message:"Senha muito fraca"})
        senha:string

 // ====================================== //// ====================================== //// ====================================== //    
}