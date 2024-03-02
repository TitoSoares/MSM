import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";
import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CriaEntrada_SaidaDTO{

 // ====================================== //// ====================================== //// ====================================== // 
    @ApiProperty({
        example:" 'false'=Saida / 'true'=Entrada ",
        description:"O tipo é usado para determinar se a operação é de saída('0') e entrada('1')"
    })
    //=====//

    @IsBoolean({message:"Esse valor de tipo não é válido"})
    @IsNotEmpty({message:"O campo não pode ser vazio"})
    tipo:boolean

 // ====================================== //// ====================================== //// ====================================== // 
    @ApiProperty({
        example:"'10' or '1000' '10.45'",
        description:"O valor é a quantia cadastrada"
    })
    //=====//

    @IsNumber(undefined,{message:"Esse valor de número não é válido"})
    @IsNotEmpty({message:"O campo não pode ser vazio"})
    valor:Number

 // ====================================== //// ====================================== //// ====================================== // 
    @ApiProperty({
    example: 'nomearquivo-idarquivo.png',
    description: "Esse campo é responsável pela foto do usuário, para ser enviado o dado correto é necessário que seja feito o upload pelo modulo FILES."
    })
    //=====//

    @IsOptional()
    foto: string; 
 // ====================================== //// ====================================== //// ====================================== // 
    @ApiProperty({
    example: 'nomearquivo-idarquivo.png',
    description: "Esse campo é responsável pela foto do usuário, para ser enviado o dado correto é necessário que seja feito o upload pelo modulo FILES."
    })
    //=====//

    @IsNotEmpty({message:"O campo não pode ser vazio"})
    idusuario: string; 
 // ====================================== //// ====================================== //// ====================================== // 
}