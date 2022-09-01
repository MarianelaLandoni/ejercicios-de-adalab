function Button(props) {
  return (
    <button
      className={props.className}
      onClick={props.handleResetButton}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
export default Button;
