import '../styles/App.scss';

function App() {
  const handleInput = (ev) => {
    ev.preventDefault();
    console.log('La tecla presionada es:', ev.key);
  };
  return (
    <div className="App">
      <form>
        <label htmlFor="">
          <input
            type="text"
            id=""
            placeholder="Presiona una tecla"
            onKeyPress={handleInput}
          ></input>
        </label>
      </form>
    </div>
  );
}

export default App;
