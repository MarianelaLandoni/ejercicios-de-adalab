function InputGroupSelect(props) {
  const handleRegion = (ev) => {
    props.handleRegion(ev.target.value);
  };
  return (
    <div className="input-group-select">
      <label className={props.classNameLabel} htmlFor={props.labelFor}>
        {props.title}
      </label>
      <select
        className={props.classNameSelect}
        name={props.name}
        id={props.id}
        value={props.inputValue}
        onChange={handleRegion}
      >
        <option>España peninsular</option>
        <option>Islas Canarias</option>
        <option>Islas Baleares</option>
        <option>Ceuta</option>
        <option>Melilla</option>
      </select>
    </div>
  );
}
export default InputGroupSelect;
