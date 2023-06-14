import logo from './logo.svg';
import './App.css';
import { ComponenteNome } from './componentes/componente';
import { ComponenteResumo } from './componentes/ComponenteResumo';
import { ComponenteCompetencia } from './componentes/ComponenteCompetecia';
import Button from 'react-bootstrap/Button';
import { Home } from './pages/home';

function App() {
  return (
    <div className="App">

      <Home/>
      
    </div>
  );
}

export default App;
