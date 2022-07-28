import '../styles/App.scss';
import { useState } from 'react';

function App() {
  //let counter = 0; no hace falta porque esá el use State que es el valor que está al principio.
  const [count, setCount] = useState(0);
  //como es una variable de estado no puedo hacer count = a algo. Cada vez que quiero modificar a la variable de estado tengo que si o si llamar a setCount. Al hacer count++ estoy haciendo count = count +1 y no puedo porque es una constante. Si quiero incrementar count puedo hacer count + 1 directamente .Asi no estoy reasignando el valor a count, si no coger el valor de referencia que tiene, sumarle 1
  const handleClick = (ev) => {
    ev.preventDefault();
    setCount(count + 1);

    console.log(setCount);
  };
  return (
    <div className="App">
      <p>Contador: {count} </p>
      <button onClick={handleClick}>Púlsame</button>
    </div>
  );
}

export default App;
