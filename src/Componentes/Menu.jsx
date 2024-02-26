import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/ListaBodega">Lista de bodegas</Link>
        </li>
        <li>
          <Link to="/CrearBodega">Crear bodega</Link>
        </li>
        <li>
          <Link to="/BodegaPorId">Buscar bodega por Id</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
