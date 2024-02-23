import { IsString } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
import { IsNotEmpty } from "class-validator";
import { IsEmail } from "class-validator";
import { MinLength } from "class-validator";
import { SenhaForte } from "../validacao/strongpass.valitor";
import { ApiProperty } from "@nestjs/swagger";

export class CriaUsuariosDTO{
    @IsString()
    @IsNotEmpty({message:"O nome do usuário não pode ser vazio"})
    @ApiProperty({
        example:"Victor Augusto Farias Ferreira",
        description:"O nome é usado para identificar o usuário"
    })
    nome:string

    @IsEmail(undefined,{message:"O e-mail é inválido, tente novamente"})
    @EmailUnico({message:"Já existe esse e-mail cadastrado"})
    @ApiProperty({
        example:"vitor.iac20166@gmail.com",
        description:"O email é usado para fazer o Login e identificação"
    })
    email:string

    @IsString()
    @ApiProperty({
        example:"999.999.999.99",
        description:"O Cpf é usado para identificar se o usuário como válido"
    })
    cpf:string

    @IsString()
    @ApiProperty({
        example:"99.999.999/9999-99",
        description:"O Cnpj é usado para idenficar se o Cnpj cadastradado é válido"
    })
    cnpj:string

    @IsString()
    @ApiProperty({
        example:"04/01/2006",
        description:"A data é usada para vincular uma data ao usuário"
    })
    dataNasc:string

    @MinLength(8,{message:"Senha inválida, tente novamente"})
    @SenhaForte({message:"Senha muito fraca"})
    @ApiProperty({
        example:"Senh@l58#7",
        description:"A senha deve ser uma senha forte, com esse tipo de formatação"
    })
    senha:string
}