import React, { useState } from 'react';

const IMCcalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateIMC = () => {
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert('introduce valores válidos para peso y altura.');
      return;
    }

    const imc = parseFloat(weight) / Math.pow(parseFloat(height), 2);
    setResult(imc.toFixed(2));
  };

  const getObesityType = () => {
    if (result < 18.5) {
      return 'Bajo peso';
    } else if (result >= 18.5 && result < 24.9) {
      return 'Peso normal';
    } else if (result >= 25 && result < 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obesidad';
    }
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <div>
        <label>Peso en kg:</label>
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Altura en m:</label>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateIMC}>Calcular</button>
      {result && (
        <div>
          <h3>Tu IMC es: {result}</h3>
          <p>{getObesityType()}</p>
          {result <= 18.5  && (
            <img
              src="../public/img/sintomas-sindrome-marfan.jpg"
              alt="bajo"
              width="400px"
            />
          )}
          {result <= 24.9 & result >= 18.6 && (
            <img
              src="../public/img/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.avif"
              alt="normal"
              width="400px"
            />
          )}{result <= 29.9 & result >= 25  && (
            <img
              src="../public/img/dibujado-mano-ilustracion-dibujos-animados-persona-gorda_52683-116942.avif"
              alt="peso alto"
              width="400px"
            />
          )}{result > 30  && (
            <img
              src="../public/img/persona-obesa-representa-creciente-preocupacion-obesidad-diabetes-mundo_994641-5151.avif"
              alt="Obesidad"
              width="400px"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default IMCcalculator
