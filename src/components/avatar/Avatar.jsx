import "./Avatar.css";

function Avatar({
  src,
  alt = "Avatar",
  size = "medium",
  name = "",
}) {
  return (
    <div className={`avatar avatar-${size}`}>

      {src ? (
        <img
          src={src}
          alt={alt}
          className="avatar-image"
        />
      ) : (
        <span className="avatar-text">
          {name.charAt(0).toUpperCase()}
        </span>
      )}

    </div>
  );
}

export default Avatar;