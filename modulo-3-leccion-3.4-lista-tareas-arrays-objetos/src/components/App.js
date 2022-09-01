import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true, id: '1' },
    { task: 'Hacer croquetas ricas', completed: true, id: '2' },
    { task: 'Ir a la puerta de un gimnasio', completed: false, id: '3' },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
      id: '4',
    },
  ]);

  const [searchTask, setSearchTask] = useState('');

  const handleCompletedTask = (ev) => {
    const clickedTaskId = ev.currentTarget.id;
    const foundTask = tasks.find((listItem) => listItem.id === clickedTaskId);
    foundTask.completed = !foundTask.completed;
    setTasks([...tasks]);
  };

  const handleSearchTask = (ev) => {
    setSearchTask(ev.target.value);
  };

  const renderToDoList = () => {
    // return tasks.filter((listItem) => {
    //   return listItem.task.toLowerCase().includes(searchTask.toLowerCase());
    // });

    return tasks.map((listItem) => {
      if (listItem.completed) {
        return (
          <li
            className="completed"
            key={listItem.id}
            id={listItem.id}
            onClick={handleCompletedTask}
          >
            {listItem.task}
          </li>
        );
      } else {
        return (
          <li key={listItem.id} id={listItem.id} onClick={handleCompletedTask}>
            {listItem.task}
          </li>
        );
      }
    });
  };

  return (
    <div className="App">
      <h1>Mi lista de tareas</h1>
      <ol>{renderToDoList()}</ol>
      <p>Tareas completas: {tasks.task} </p>

      <form>
        <label htmlFor="searchTask">Buscar por nombre de task</label>
        <input
          type="text"
          id="searchTask"
          value={searchTask}
          onChange={handleSearchTask}
        />
      </form>
    </div>
  );
}

export default App;
