import "./Select.css";

function Select({
  options = [],
  value,
  onChange,
  disabled = false,
  label = "Select option",
}) {
  return (
    <div className="select-wrapper">
      
      {label && <label className="select-label">{label}</label>}

      <select
        className="select"
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="">-- Select --</option>

        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

    </div>
  );
}

export default Select;