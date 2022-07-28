import '../styles/App.scss';

function App() {
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderToDoList = () => {
    return tasks.map((listItem, index) => {
      if (listItem.completed) {
        return (
          <li className="completed" key={index}>
            {listItem.task}
          </li>
        );
      } else {
        return <li key={index}>{listItem.task}</li>;
      }
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
