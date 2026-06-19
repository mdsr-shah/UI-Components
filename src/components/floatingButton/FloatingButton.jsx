import "./FloatingButton.css";

function FloatingActionButton({
  icon = "+",
  onClick,
  position = "bottom-right",
  color = "primary",
}) {
  return (
    <button
      className={`fab fab-${position} fab-${color}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default FloatingActionButton;