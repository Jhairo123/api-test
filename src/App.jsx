import reactLogo from "./assets/react.svg";
import "./App.css";
import Menu from "./Componentes/Menu";
import ListaBodega from "./Componentes/Bodegas/ListaBodega";
import CrearBodega from "./Componentes/Bodegas/CrearBodega";
import BodegaPorId from "./Componentes/Bodegas/BodegaPorId";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Menu />
      <h1>Bodega-App</h1>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <Routes>
        <Route path="/ListaBodega" element={<ListaBodega />} />
        <Route path="/CrearBodega" element={<CrearBodega />} />
        <Route path="/BodegaPorId" element={<BodegaPorId />} />
      </Routes>
    </>
  );
}

export default App;
