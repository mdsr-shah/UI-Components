import "./Loader.css";

function Loader({
  size = "medium",
  color = "primary",
}) {
  return (
    <div className={`loader loader-${size} loader-${color}`} />
  );
}

export default Loader;