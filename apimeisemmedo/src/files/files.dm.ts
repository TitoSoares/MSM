import { Injectable } from "@nestjs/common";
import { FilesEntity } from "./filesEntity";
import { Request } from "express";

@Injectable()
export class FilesArmazenados{
    #arquivos=[];

    async salvarDados(file:Express.Multer.File, req:Request){
        const arquivo=new FilesEntity();
        arquivo.fileName=file.filename
        arquivo.contentLengh=file.size;
        arquivo.contentType=file.mimetype;
        arquivo.url=`${file.filename}`

        this.#arquivos.push(arquivo)
        return arquivo.url
  }
}