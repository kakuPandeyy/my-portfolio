import "./button.scss"
const Button = (props) => {
  return (
    <button
      className={`${
        props.outline ? 'button-outline' : 'button'
      } ${props.className}`}
      onClick={props.onClick}

    >
      <span className="button__text">{props.children}  </span>
    </button>
  );
};

export default Button;

