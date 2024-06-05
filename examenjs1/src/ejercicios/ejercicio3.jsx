import React, { useState, useEffect } from 'react';
import './ejercicio3.css'

const TablaComponente = () => {
  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const respuesta = await fetch('https://66609c0e5425580055b49a5d.mockapi.io/examenjs');
      const datosJson = await respuesta.json();
      setDatos(datosJson);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const agregarFila = async () => {
    try {
      const respuesta = await fetch('https://66609c0e5425580055b49a5d.mockapi.io/examenjs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, edad })
      });
      if (respuesta.ok) {
        const nuevaFila = await respuesta.json();
        setDatos([...datos, nuevaFila]);
        setNombre('');
        setEdad('');
      } else {
        console.error('Error al agregar la fila:', respuesta.statusText);
      }
    } catch (error) {
      console.error('Error al agregar la fila:', error);
    }
  };

  const eliminarFila = async (id) => {
    try {
      const respuesta = await fetch(`https://66609c0e5425580055b49a5d.mockapi.io/examenjs/${id}`, {
        method: 'DELETE'
      });
      if (respuesta.ok) {
        const nuevosDatos = datos.filter(item => item.id !== id);
        setDatos(nuevosDatos);
      } else {
        console.error('Error al eliminar la fila:', respuesta.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar la fila:', error);
    }
  };

  return (
    <div className="tabla-container">
      <div className="formulario-agregar">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <button onClick={agregarFila}>Agregar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, indice) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.edad}</td>
              <td>
                <button onClick={() => eliminarFila(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaComponente;