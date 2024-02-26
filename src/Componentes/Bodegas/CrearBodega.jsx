import axios from "axios";
import React, { useEffect, useState } from "react";

const CrearBodega = () => {
  const [formData, setFormData] = useState({
    NombreBodega: "",
    Direccion: "",
    Telefono: "",
    Activo: true
  });

  const API = "http://20.96.15.145:8080/api/Bodega";

  const getCrearBodega = async () => {
    try {
      const response = await axios.post(`${API}/CrearBodega`, formData);
      console.log("Bodega creada:", response.data);
    } catch (error) {
      console.error("Error creando la bodega:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.NombreBodega && formData.Direccion && formData.Telefono) {
      // Todos los campos están llenos, llamar a getCrearBodega
      getCrearBodega();
      alert(
        `La Bodega ${formData.NombreBodega} ha sido creada satisfactoriamente`
      );
    } else {
      // Mostrar mensaje de error o realizar otra acción de validación
      alert("Por favor, llene todos los campos antes de enviar el formulario");
    }
  };

  return (
    <div>
      <h2>Crear Nueva Bodega</h2>
      <form
        style={{
          display: "block",
          textAlign: "left",
          paddingLeft: "50px",
          paddingRight: "50px"
          // border: "2px solid #000"
        }}
        onSubmit={handleSubmit}>
        <label>
          Nombre de la Bodega:
          <br />
          <input
            type="text"
            name="NombreBodega"
            value={formData.NombreBodega}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Dirección:
          <br />
          <input
            type="text"
            name="Direccion"
            value={formData.Direccion}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <br />
          <input
            type="text"
            name="Telefono"
            value={formData.Telefono}
            onChange={handleChange}
          />
        </label>
        <br />
        <button
          type="submit"
          style={{
            display: "block",
            textAlign: "left",
            marginTop: "10px",
            marginBottom: "5px",
            paddingRight: "25px",
            paddingLeft: "25px"
          }}>
          Crear Bodega
        </button>
      </form>
    </div>
  );
};

export default CrearBodega;
