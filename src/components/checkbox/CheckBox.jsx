import "./Checkbox.css";

function Checkbox({
  checked,
  onChange,
  label = "",
  disabled = false,
}) {
  return (
    <label className="checkbox-wrapper">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />

      <span className="checkbox-label">
        {label}
      </span>
    </label>
  );
}

export default Checkbox;