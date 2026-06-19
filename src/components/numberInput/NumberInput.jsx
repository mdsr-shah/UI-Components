import "./NumberInput.css";

function NumberInput({
  value,
  onChange,
  placeholder = "",
  min,
  max,
  step = 1,
  disabled = false,
}) {
  return (
    <input
      className="number-input"
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
    />
  );
}

export default NumberInput;