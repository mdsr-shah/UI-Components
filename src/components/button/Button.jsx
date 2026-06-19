import "./Button.css";


function Button({
  variant = "primary",
  children,
  disabled = false,
}) {

  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;