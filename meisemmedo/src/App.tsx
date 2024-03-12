import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import FuncaoGov from './Pages/FuncaoGov';
import Gerenciamento from './Pages/Gerenciamento';
import Tutorial from './Pages/Tutorial';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import NotFound from './Pages/NotFound';
import PaginaComponenteAgenda from './Pages/Gerenciamento/PaginaComponenteAgenda';
import PaginaComponenteEntradaeSaida from './Pages/Gerenciamento/PaginaComponenteEntradaeSaida';
import PaginaComponenteHistorico from './Pages/Gerenciamento/PaginaComponenteHistorico';
import PaginaComponenteRelatorio from './Pages/Gerenciamento/PaginaComponenteRelatorio';
import Requisicoes from './Pages/Aulas/requisicoes';
import { UsuarioLogadoProvider } from './contexts/contextAuth';
import ReqPostArquivo from './Pages/Aulas/reqPostArquivo';
import AreaDeUsuario from './Pages/Gerenciamento/AreaDeUsuario';


function App() {
  return (
    <div>

    <UsuarioLogadoProvider>
      <Routes>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gov' element={<FuncaoGov/>}></Route>    
        <Route path='/tutorial' element={<Tutorial/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cadastro' element={<Cadastro/>}></Route>
        <Route path='/gen' element={<Gerenciamento/>}></Route>
        <Route path='/agenda' element={<PaginaComponenteAgenda/>}></Route>
        <Route path='/entrada_saida' element={<PaginaComponenteEntradaeSaida/>}></Route>
        <Route path='/historico' element={<PaginaComponenteHistorico/>}></Route>
        <Route path='/relatorio' element={<PaginaComponenteRelatorio/>}></Route>
        <Route path='/requisicoes' element={<Requisicoes/>}></Route>
        <Route path='/req' element={<ReqPostArquivo/>}></Route>
        <Route path='/AreaDeUsuario' element={<AreaDeUsuario/>}></Route>
      </Routes>
    </UsuarioLogadoProvider>
    </div>
  );
}

export default App;
