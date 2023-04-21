import './App.css';
import Presupuesto from './pages/presupuesto';
import Tareas from './pages/tareas';
import { Routes, Route } from "react-router"
import NavBar from './componentes/nav-bar';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Presupuesto />} />
        <Route path="/tareas" element={<Tareas />} />
      </Routes>

      
    </>
  );
}

export default App;
