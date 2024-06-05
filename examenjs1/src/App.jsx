import React, { useState } from 'react';
import IMCcalculator from './ejercicios/ejercicio1'
import TablaComponente from './ejercicios/ejercicio3'
import UserList from './ejercicios/ejercicio4'
import ImageGallery from './ejercicios/ejercicio2'

function ComponenteReact() {
  const [mostrarNuevoComponente, setMostrarNuevoComponente] = useState(false);
  const [mostrarComponenteDos, setMostrarComponenteDos] = useState(false);
  const [mostrarComponenteTres, setMostrarComponenteTres] = useState(false);
  const [mostrarInformeProduccion, setMostrarInformeProduccion] = useState(false);

  function returnpage() {
    setMostrarNuevoComponente(false);
    setMostrarComponenteDos(false);
    setMostrarComponenteTres(false);
    setMostrarInformeProduccion(false);
  }

  function startProgram() {
    setMostrarNuevoComponente(true);
    setMostrarComponenteDos(false);
    setMostrarComponenteTres(false);
    setMostrarInformeProduccion(false);
  }

  function startSecondProgram() {
    setMostrarComponenteDos(true);
    setMostrarNuevoComponente(false);
    setMostrarComponenteTres(false);
    setMostrarInformeProduccion(false);
  }

  function startThirdProgram() {
    setMostrarComponenteTres(true);
    setMostrarNuevoComponente(false);
    setMostrarComponenteDos(false);
    setMostrarInformeProduccion(false);
  }

  function startFourthProgram() {
    setMostrarInformeProduccion(true);
    setMostrarNuevoComponente(false);
    setMostrarComponenteDos(false);
    setMostrarComponenteTres(false);
  }

  return (
    <div className="Container">
      <div className="section_left">
        <div className="logo" onClick={returnpage}>
          <h1>Examen</h1>
        </div>
        <div className="opcion-1" onClick={startProgram}>
          <h3>Ejercicio1</h3>
        </div>
        <div className="opcion-2" onClick={startSecondProgram}>
          <h3>Ejercicio2</h3>
        </div>
        <div className="opcion-3" onClick={startThirdProgram}>
          <h3>Ejercicio3</h3>
        </div>
        <div className="opcion-4" onClick={startFourthProgram}>
          <h3>Ejercicio4</h3>
        </div>
      </div>
      <div className="section_right">
        {!mostrarNuevoComponente && !mostrarComponenteDos && !mostrarComponenteTres && !mostrarInformeProduccion ? (
          <div className="text">
            <h1>ExamenJS</h1>
            <p></p>
            <img src="/img/logoconfeccionespepita.jpg" alt="" />
          </div>
        ) : mostrarNuevoComponente ? (
          <IMCcalculator />
        ) : mostrarComponenteDos ? (
          <ImageGallery/>
        ) : mostrarComponenteTres ? (
          <TablaComponente />
        ) : (
          <UserList />
        )}
      </div>
    </div>
  );
}



export default ComponenteReact;


