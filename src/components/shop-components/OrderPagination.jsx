import React from "react";
import { Link } from "react-router-dom";

const OrderPagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav>
        <ul className="pagination ">
          {pageNumbers.map((numbers) => {
            return (
              <>
                <li key={numbers} className=" page-item">
                  <Link
                    style={{
                      cursor: "pointer",
                    //   backgroundColor: "rgb(250, 120, 33)",
                    }}
                    onClick={() => paginate(numbers)}
                    to="#"
                    className="page-link"
                  >
                    {numbers}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default OrderPagination;
