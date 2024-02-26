import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class AlteraEntrada_SaidaDTO{
    @IsBoolean()
    @IsNotEmpty({message:"O tipo não pode ser vazio"})
    @IsOptional()
    @ApiPropertyOptional({
        example:" 'false' or 'true' ",
        description:"O número 0 representa as operações de 'Saída' e o número 1 representa as operações de 'Entrada'"
    })
    tipo:boolean

    @IsNumber()
    @IsNotEmpty({message:"O valor não pode ser vazio"})
    @IsOptional()
    @ApiPropertyOptional({
        example:"'100' or '100.00'",
        description:"O valor pode ser tanto inteiro ou decimal"
    })
    valor:Number
}   