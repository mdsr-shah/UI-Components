import "./Breadcrumb.css";

function Breadcrumb({
  items = [],
  separator = "/",
}) {
  return (
    <nav className="breadcrumb">

      {items.map((item, index) => {

        const isLast =
          index === items.length - 1;

        return (
          <div
            key={index}
            className="breadcrumb-item"
          >

            {isLast ? (

              <span className="active">

                {item.label}

              </span>

            ) : (

              <a href={item.path}>

                {item.label}

              </a>

            )}

            {!isLast && (

              <span className="separator">

                {separator}

              </span>

            )}

          </div>
        );
      })}

    </nav>
  );
}

export default Breadcrumb;