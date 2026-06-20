import "./Card.css";

function Card({
  title,
  image,
  children,
}) {
  return (
    <div className="card">

      {image && (
        <img
          className="card-image"
          src={image}
          alt={title}
        />
      )}

      <div className="card-body">

        {title && (
          <h3 className="card-title">
            {title}
          </h3>
        )}

        <div className="card-content">
          {children}
        </div>

      </div>
    </div>
  );
}

export default Card;