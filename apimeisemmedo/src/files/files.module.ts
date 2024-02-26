import { Module } from "@nestjs/common";
import { FilesController } from "./file.controller";
import { FilesArmazenados } from "./files.dm";

@Module({
    controllers:[FilesController],
    providers:[FilesArmazenados]
})
export class FilesModule{
    
}