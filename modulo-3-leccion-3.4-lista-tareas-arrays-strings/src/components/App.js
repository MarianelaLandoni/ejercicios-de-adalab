import '../styles/App.scss';

function App() {
  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  ];

  const renderToDoList = () => {
    return tasks.map((listItem, index) => {
      return <li key={index}>{listItem}</li>;
    });
  };
  return (
    <div className="App">
      <h1>Mi lista de tareas</h1>
      <ol>{renderToDoList()}</ol>
    </div>
  );
}

export default App;
