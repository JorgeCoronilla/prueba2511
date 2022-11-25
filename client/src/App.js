import './App.css';
import { Cabeceras } from './components/Cabeceras';
import { PiePagina } from './components/PiePagina';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
     <Cabeceras  titulo1="Título principal"  titulo2="Subtítulo" titulo3="Tercer título"/>
    <br/>
    <Formulario/>
    <br/>
    <PiePagina email="thebridge@gmail.com" ciudad="Madrid" direccion="Paseo de Recoletos 15"/>
    </div>
  );
}

export default App;
