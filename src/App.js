import './App.css' ;
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const name = "Maria"

  return (

    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName name="George" />
      <SayMyName name="Metheus" />
      <SayMyName name = {name} />
      <Pessoa 
      name = "rodrigo" 
      idade="28" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
