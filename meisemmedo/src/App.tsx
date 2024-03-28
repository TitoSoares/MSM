import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import FuncaoGov from './Pages/FuncaoGov';
import Gerenciamento from './Pages/Gerenciamento';
import Tutorial from './Pages/Tutorial';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import NotFound from './Pages/NotFound';
import { UsuarioLogadoProvider } from './contexts/contextAuth';
import AreaDeUsuario from './Pages/Gerenciamento/AreaDeUsuario';
import EntradaSaida from './Pages/Gerenciamento/EntradaSaida';
import Agenda from './Pages/Gerenciamento/Agenda';


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
          <Route path='/Gerenciamento' element={<Gerenciamento/>}></Route>
          <Route path='/Agenda' element={<Agenda/>}></Route>
          <Route path='/AreaDeUsuario' element={<AreaDeUsuario/>}></Route>
          <Route path='/EntradaSaida' element={<EntradaSaida/>}></Route>
        </Routes>
      </UsuarioLogadoProvider>
    </div>
  );
}

export default App;
