import { useState } from "react";

const title = "First App";


const FirsApp = ({ value }) => {
  // const counter = 0;

  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleAddrest = () => {
    setCounter(counter - 1);
  };
  const handleAddreset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1> Counter </h1>
      <span> {counter} </span>
      <button onClick={() => handleAdd()}> +1 </button>
      <button onClick={() => handleAddrest()}> -1 </button>
      <button onClick={() => handleAddreset()}> Reset </button>
    </>
  );
};

export default FirsApp;
