import "./Slider.css";

function Slider({ min = 0, max = 100, value, onChange }) {
  return (
    <input
      className="slider-input"
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
}

export default Slider;