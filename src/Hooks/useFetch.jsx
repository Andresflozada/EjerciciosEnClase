import { useState, useEffect } from "react";

export const UseFetch = () => {
  const [inputValue, setinputValue] = useState("");
  const [url, setUrl] = useState("");

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    const api = await fetch(url);
    try {
      const data = await api.json();
      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {
      console.log("Error");
      setState({
        data: null,
        isLoading: false,
        hasError: null,
      });
    }
  };

  useEffect(() => {
    getFetch();
    console.log(state);
  }, [url]);

  const onInputChange = (evt) => {
    setinputValue(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setUrl(inputValue);
    setinputValue("");
  };

  if (state.isLoading) {
    return "Loading…";
  }

  return (
    <>
      state
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type="text"
          placeholder="Buscar"
          value={inputValue}
          onChange={(event) => onInputChange(event)}
        />
      </form>
    </>
  );
};
