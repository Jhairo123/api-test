import axios from "axios";
import React, { useEffect, useState } from "react";

const BodegaPorId = () => {
  const API = "http://20.96.15.145:8080/api/Bodega";

  const [bodega, setBodega] = useState(null);
  const [bodegaId, setBodegaId] = useState("");
  const getBodegaById = async () => {
    let error = false;
    try {
      const response = await axios.get(`${API}/BodegaById?id=${bodegaId}`);
      setBodega(response.data.Data);
    } catch (error) {
      error = false;
      console.error("Error fetching data:", error);
    }
    return error;
  };

  const handleInputChange = (event) => {
    setBodegaId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      getBodegaById() && bodegaId
        ? "ha ocurrido un del lado del servidor "
        : "En necesario un Id para continuar"
    );
  };

  return (
    <>
      <div>
        <h2>Buscar Bodega</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Ingrese el Id
            <br />
            <input
              type="number"
              inputMode="numeric"
              value={bodegaId}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button
            style={{
              marginTop: "10px",
              marginBottom: "5px",
              paddingRight: "45px",
              paddingLeft: "45px"
            }}
            type="submit">
            Buscar
          </button>
        </form>
        {bodega && (
          <div>
            <h3>Detalle de la Bodega:</h3>
            <p>ID: {bodega.Id}</p>
            {console.log(bodega.Id)}
            <p>Nombre: {bodega.NombreBodega}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BodegaPorId;
