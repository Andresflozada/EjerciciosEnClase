import { useState } from "react";

export const Tiempo = () => {
  let [inputValue, setinputValue] = useState(0);
  let [horas, setinputHoras] = useState(0);
  let [minutos, setinputMinutos] = useState(0);
  let [segundos, setinputSegundos] = useState(0);

  const onInputChange = (evt) => {
    // setinputValue(evt.target.value);
    inputValue = evt.target.value;
    setinputMinutos(((inputValue / 3600.00) - Math.trunc(inputValue / 3600.00))*60.00);
    setinputHoras(inputValue / 3600.00);
    setinputSegundos(inputValue / 60.00);
    // console.log(minutos);
  };

  return (
    <>
      <input
        name="inputBox"
        type="number"
        placeholder="Ingrese su hora"
        onChange={(event) => onInputChange(event)}
      />
      <h1>Horas: {horas}</h1>
      <h1>Minutos: {minutos}</h1>
    </>
  );
};
