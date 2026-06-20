import "./Alert.css";

function Alert({
  type = "info",
  message,
}) {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
}

export default Alert;