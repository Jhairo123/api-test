import React, { useEffect, useState } from "react";
import axios from "axios";

const ListaBodega = () => {
  const [bodegas, setBodegas] = useState([]);
  const [selectedBodega, setSelectedBodega] = useState("");
  const API = "http://20.96.15.145:8080/api/Bodega";

  const getListaBodega = async () => {
    try {
      const response = await axios.get(`${API}/ListaBodega`);
      setBodegas(response.data.Data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getListaBodega();
  }, []);

  const handleBodegaChange = (event) => {
    const selectedId = event.target.value;
    setSelectedBodega(selectedId);
  };

  return (
    <>
      <div>
        <h2>Lista de Bodegas</h2>
        <select value={selectedBodega} onChange={handleBodegaChange}>
          <option value="">Selecciona una bodega</option>
          {bodegas.map((bodega) => (
            <option key={bodega.Id} value={bodega.Id}>
              {bodega.NombreBodega}
            </option>
          ))}
        </select>
        {selectedBodega && (
          <div>
            <h2>Detalle de la bodega seleccionada:</h2>
            <p>Id: {selectedBodega}</p>
            <p>
              Nombre Bodega:
              {` ${
                bodegas.find((bodega) => bodega.Id == selectedBodega)
                  .NombreBodega
              }`}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ListaBodega;
