import "./Switch.css";

function Switch({ checked, onChange, label = "" }) {
  return (
    <label className="switch-wrapper">
      <span>{label}</span>

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <span className="slider"></span>
    </label>
  );
}

export default Switch;