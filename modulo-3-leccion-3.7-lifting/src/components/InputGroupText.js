function InputGroupText(props) {
  const handleName = (ev) => {
    props.handleName(ev.target.value);
  };
  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor={props.labelFor}>
        {props.title}
      </label>
      <input
        className={props.className}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.inputValue}
        onChange={handleName}
      />
    </div>
  );
}
export default InputGroupText;
