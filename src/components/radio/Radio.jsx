import "./Radio.css";

function Radio({
  name,
  value,
  checked,
  onChange,
  label = "",
  disabled = false,
}) {
  return (
    <label className="radio-wrapper">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />

      <span className="radio-label">
        {label}
      </span>
    </label>
  );
}

export default Radio;