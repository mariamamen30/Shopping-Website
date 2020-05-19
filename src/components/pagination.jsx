import React from "react";
import _ from "lodash";

const Pagination = props => {
  const pages = _.range(1, props.pageCount + 1);
  return (
    <React.Fragment>
      {/* <!-- paging --> */}
      <div className="paging">
        {/* <!-- left arrow --> */}
        <div className="paging__arrow">
          <i className="fas fa-angle-left"></i>
        </div>
        {/* <!-- page number --> */}
        {pages.map(page => (
          <div
            key={page}
            onClick={() => props.onChangePage(page)}
            className={
              page === props.currentPage
                ? "paging__number active"
                : "paging__number"
            }
          >
            {page}
          </div>
        ))}

        {/* // <!-- right arrow --> */}
        <div className="paging__arrow">
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
