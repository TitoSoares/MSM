import { IsString } from "class-validator";
import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CriaAgendaDTO{

    @IsString()
    @IsNotEmpty({message:"A data não pode ser vazia "})
    @ApiProperty({
        example:"04/01/2006",
        description:"A data é usada para salvar os dias, meses e ano que deseja marcar um agendamento"
    })
    data:string

    @IsString()
    @IsNotEmpty({message:"A hora não pode ser vazia"})
    @ApiProperty({
        example:" '19:00' ou '10:00' ",
        description:"A hora é usada para salvar as horas e os minutos que deseja marcar um agendamento"
    })
    hora:string

    @IsString()
    @ApiProperty({
        example:"'Faxina'/'Limpeza de Piscina'/'Fotografar'",
        description:"A atividade é usada para organizar as atividades que serão realizadas"
    })
    atividade:string

    @IsString()
    @IsNotEmpty({message:"A hora não pode ser vazia"})
    @ApiProperty({
        example:" '19:00' ou '10:00' ",
        description:"A hora é usada para salvar as horas e os minutos que deseja marcar um agendamento"
    })
    idusuario:string

}