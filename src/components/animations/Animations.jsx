import "./Animations.css";

function Animation({
  children,
  type = "fade",
}) {
  return (
    <div className={`animation animation-${type}`}>
      {children}
    </div>
  );
}

export default Animation;