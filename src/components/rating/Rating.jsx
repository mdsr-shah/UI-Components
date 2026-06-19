import "./Rating.css";

function Rating({
  value = 0,
  max = 5,
  onChange,
  readOnly = false,
}) {
  return (
    <div className="rating">

      {Array.from({ length: max }, (_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={index}
            className={`star ${starValue <= value ? "filled" : ""}`}
            onClick={() => {
              if (!readOnly && onChange) {
                onChange(starValue);
              }
            }}
          >
            ★
          </span>
        );
      })}

    </div>
  );
}

export default Rating;