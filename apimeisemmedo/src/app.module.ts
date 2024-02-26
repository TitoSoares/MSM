import { Module } from '@nestjs/common';
import { AgendaModule } from './agenda/agenda.module';
import { Entrada_SaidaModule } from './entrada_saida/entrada_saida.module';
import { FilesModule } from './files/files.module';
import { UsuariosModule } from './usuarios/usuarios.module';


@Module({
  imports:[UsuariosModule, FilesModule, Entrada_SaidaModule, AgendaModule],
  controllers:[],
  providers:[],
})
export class AppModule {}
