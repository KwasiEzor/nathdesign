import React from "react";
import "./Pagination.css";
const Pagination = ({
  totalProjects,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProjects / itemsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination-group">
      {pages.map((page, index) => (
        <button
          className={page == currentPage ? "page-link btn" : "page-link"}
          onClick={() => setCurrentPage(page)}
          key={index}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
