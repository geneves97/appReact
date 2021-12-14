import './App.css';

function App() {

  const name = "George";

  const newName = name.toUpperCase()
 
  function sum(a,b){
    return a + b
  }

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
    </div>
  );
}

export default App;
