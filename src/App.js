import "./App.css";

const App = () => {

  return (
    <>
    <h1>Hola Mundo!</h1>
    <h2> bienvenido</h2>
    </>
  )
}

// function App(){
//   return (
//     <>
//     <h1>Hola Mundo!</h1>
//     <h2> bienvenido</h2>
//     </>
//   )
// }


function prueba() {
  return (
    <div className="App">
      <h1 className="P1">Probando cositas</h1>
      <header className="App-header">
        <p className="P2">Hola mundo, bienvenido!!! :D</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 1
        </a>
        <p className="P3">Ejercicios en clase ....</p>
      </header>
    </div>
  );
}

export default prueba;

