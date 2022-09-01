import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [isFormShown, setFormShown] = useState(false);
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState('');

  //EVENTOS

  const handleClickShowForm = () => {
    //   console.log('Has hecho click!');
    //   if (isFormShown) {
    //     setFormShown(false);
    //   } else {
    //     setFormShown(true);
    //   }

    //Forma más rapida con la negacion: pone el valor contrario al que tiene ahora mismo. La exclamación significa lo contrario de lo que tengo. Si es true, le establece false. Si tiene false, estabece true

    setFormShown(!isFormShown);
  };

  const handleClickTask = (ev) => {
    const taskData = tasks[ev.currentTarget.id];
    console.log(taskData);
  };

  const handleChangeNewTask = (ev) => {
    const userValue = ev.currentTarget.value;
    setNewTask(userValue);
  };

  const handleClickSaveNewTask = (ev) => {
    //1.Cree nueva tarea
    const newTaskObject = { task: newTask, completed: false };
    // const tasksCloned = [...tasks];
    // tasksCloned.push(newTaskObject);
    //lo mismo de arriba en una linea:
    const tasksCloned = [...tasks, newTaskObject];
    setTasks(tasksCloned);
    //2-Borrar el value del input

    setNewTask('');
    //Ocultar el formulario
    setFormShown(false);
  };
  /*
  isFormShown === false -> No se muestra el formulario
  isFormShown === true -> Sí se muestra el formulario
  */

  //Con condicionales If/else

  let showButtonClass;

  if (isFormShown === false) {
    showButtonClass = '';
  } else {
    showButtonClass = 'hidden';
  }

  //Con un ternario
  let showFormClass = isFormShown ? '' : 'hidden';

  const calculatedTaskClass = (eachTaskObj) => {
    if (eachTaskObj.completed) {
      return 'completed';
    } else {
      return '';
    }
  };

  //El map transforma un array de objetos en un array de HTML, para cada posicion del array lo guarda enuna variable y luego la pongo esa variable en el HTML y lo pinta.

  const taskHTML = tasks.map((eachTaskObj, idx) => (
    <li
      key={idx}
      className={'task ' + calculatedTaskClass(eachTaskObj)}
      id={idx}
      onClick={handleClickTask}
    >
      <input type="checkbox" name="" id="" checked={eachTaskObj.completed} />
      <p>{eachTaskObj.task}</p>
    </li>
  ));

  return (
    <div className="page">
      <header>
        <h1 className="header__title">ToDo por hacer</h1>
      </header>
      <main>
        <ul className="tasklist">{taskHTML}</ul>
        <button
          className={'form__btn ' + showButtonClass}
          onClick={handleClickShowForm}
        >
          Añadir tarea
        </button>
        <form className={`form ${showFormClass}`} action="">
          <h2 className="form__title">Añade una nueva tarea</h2>
          <label htmlFor="newText" className="form__label">
            Describe tu tarea:
          </label>
          <input
            className="form__input-text"
            placeholder="Descripción"
            type="text"
            name="newText"
            id="newText"
            onChange={handleChangeNewTask}
            value={newTask}
          />
          <input
            className="form__btn"
            type="button"
            value="Guardar"
            onClick={handleClickSaveNewTask}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
