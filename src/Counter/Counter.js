import useCounter from "./useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0, 1);

  return (
    <div className="Counter">
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      
    </div>
  );
}
export default Counter;









// import logo from "./logo.svg";
// // import './App.css';

// import { useState } from "react";

// export const Productos = () => {
//   const product = [
//     {
//       id: 1,
//       Productos: "Coca cola",
//       precio: 200,
//     },
//     {
//       id: 2,  
//       Productos: "Pepsi",
//       precio: 500,
//     },
//     {
//       id: 3,
//       Productos: "Manzana",
//       precio: 700,
//     },
//   ];

//   return (
//     <div className="Productos">
//       <p>Productos </p>
//       <select>        
//         <option value="1"> Coca Cola </option>
//         <option value="2"> Pepsi </option>
//         <option value="3"> Manzana </option>
//       </select>
//       <button onClick={Productos}>Agregar</button>
//       <button>Listar</button>
//     </div>
//   );
// };

