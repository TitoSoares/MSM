import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom';
import FuncaoGov from './Pages/FuncaoGov';
import Gerenciamento from './Pages/Gerenciamento';
import Tutorial from './Pages/Tutorial';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import CadastroN from './Pages/Cadastro new';
import NotFound from './Pages/NotFound';
import PaginaComponenteAgenda from './Pages/PaginaComponenteAgenda';
import PaginaComponenteEntradaeSaida from './Pages/PaginaComponenteEntradaeSaida';
import PaginaComponenteHistorico from './Pages/PaginaComponenteHistorico';
import PaginaComponenteRelatorio from './Pages/PaginaComponenteRelatorio';
import Requisicoes from './Pages/requisicoes';
import { UsuarioLogadoProvider } from './contexts/contextAuth';
import LoginN from './Pages/Login new';

function App() {
  return (
    <div className="App">
    <UsuarioLogadoProvider>
      <Routes>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gov' element={<FuncaoGov/>}></Route>
        <Route path='/gen' element={<Gerenciamento/>}></Route>
        <Route path='/tutorial' element={<Tutorial/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/loginN' element={<LoginN/>}></Route>
        <Route path='/cadastro' element={<Cadastro/>}></Route>
        <Route path='/cadastroN' element={<CadastroN/>}></Route>
        <Route path='/agenda' element={<PaginaComponenteAgenda/>}></Route>
        <Route path='/entrada_saida' element={<PaginaComponenteEntradaeSaida/>}></Route>
        <Route path='/historico' element={<PaginaComponenteHistorico/>}></Route>
        <Route path='/relatorio' element={<PaginaComponenteRelatorio/>}></Route>
        <Route path='/requisicoes' element={<Requisicoes/>}></Route>
      </Routes>
    </UsuarioLogadoProvider>
    </div>
  );
}

export default App;
