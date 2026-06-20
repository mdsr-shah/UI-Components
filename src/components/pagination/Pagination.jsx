import "./Pagination.css";

function Pagination({
  totalPages = 1,
  currentPage = 1,
  onPageChange,
}) {
  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );

  return (
    <div className="pagination">

      <button
        className="page-btn"
        onClick={() =>
          onPageChange(
            currentPage > 1 ? currentPage - 1 : 1
          )
        }
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`page-btn ${
            currentPage === page ? "active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="page-btn"
        onClick={() =>
          onPageChange(
            currentPage < totalPages
              ? currentPage + 1
              : totalPages
          )
        }
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;