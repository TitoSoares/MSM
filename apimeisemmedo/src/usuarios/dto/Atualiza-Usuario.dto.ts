import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
import { SenhaForte } from "../validacao/strongpass.valitor";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class AlteraUsuarioDTO{

    // nome
 // ====================================== //// ====================================== //// ====================================== //
    @IsString()
    @IsNotEmpty({message:"O nome não pode ser vazio"})
    @IsOptional()

    @ApiPropertyOptional({
        example:"Victor Augusto Farias Ferreira",
        description:"O nome é usado para identificar o usuário"
    })
    nome:string


    // email
 // ====================================== //// ====================================== //// ====================================== //
    @IsEmail(undefined,{message:"O email está inválido"})
    @EmailUnico({message:"O email informado já existe"})
    @IsOptional()

    @ApiPropertyOptional({
        example:"vitor.iac20166@gmail.com",
        description:"O email é usado para fazer o Login e identificação"
    })
    email:string
 

    // CPF
 // ====================================== //// ====================================== //// ====================================== //
    @IsString()
    @IsOptional()

    @ApiPropertyOptional({
        example:"999.999.999.99",
        description:"O Cpf é usado para identificar se o usuário como válido"
    })
    cpf:string

    // CNPJ
 // ====================================== //// ====================================== //// ====================================== //
    @IsString()
    @IsOptional()

    @ApiPropertyOptional({
        example:"99.999.999/9999-99",
        description:"O Cnpj é usado para idenficar se o Cnpj cadastradado é válido"
    })
    cnpj:string


    // senha
 // ====================================== //// ====================================== //// ====================================== //
    @MinLength(8,{message: "Senha precisa de pelo menos 8 caracteres"})
    @IsOptional()

    @ApiPropertyOptional({
        example:"Senh@l58#7",
        description:"A senha deve ser uma senha forte, com esse tipo de formatação"
    })
    @SenhaForte({message:"Senha muito fraca"})
    senha:string
 // ====================================== //// ====================================== //// ====================================== //
}   