import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Pagination.module.scss";

const cx = classNames.bind(styles);

function Pagination({ totalPages, getCurrentPage, className }) {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page, left = false, right = false) => {
    if ((left && currentPage === 1) || (right && currentPage === totalPages)) {
      return;
    }
    setCurrentPage(page);
  };

  useEffect(() => {
    getCurrentPage(currentPage);
  }, [currentPage, getCurrentPage]);

  const renderPaginationItems = () => {
    const paginationItems = [];

    paginationItems.push(
      <span
        key={"arrow-left"}
        className={cx("arrow", "arrow-left")}
        onClick={() => handlePageChange(currentPage - 1, true)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
    );

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
          <span
            key={i}
            className={cx({
              active: currentPage === i,
              "pagination-item": true,
            })}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </span>
        );
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          paginationItems.push(
            <span
              key={i}
              className={cx({
                active: currentPage === i,
                "pagination-item": true,
              })}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </span>
          );
        }
        paginationItems.push(<span key="ellipses">...</span>);
        paginationItems.push(
          <span
            key={totalPages}
            className={cx({
              active: currentPage === totalPages,
              "pagination-item": true,
            })}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </span>
        );
      } else if (currentPage >= totalPages - 3) {
        paginationItems.push(
          <span
            key={1}
            className={cx({
              active: currentPage === 1,
              "pagination-item": true,
            })}
            onClick={() => handlePageChange(1)}
          >
            1
          </span>
        );
        paginationItems.push(<span key="ellipses">...</span>);
        for (let i = totalPages - 4; i <= totalPages; i++) {
          paginationItems.push(
            <span
              key={i}
              className={cx({
                active: currentPage === i,
                "pagination-item": true,
              })}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </span>
          );
        }
      } else {
        paginationItems.push(
          <span
            key={1}
            className={cx({
              active: currentPage === 1,
              "pagination-item": true,
            })}
            onClick={() => handlePageChange(1)}
          >
            1
          </span>
        );
        paginationItems.push(<span key="ellipses">...</span>);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          paginationItems.push(
            <span
              key={i}
              className={cx({
                active: currentPage === i,
                "pagination-item": true,
              })}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </span>
          );
        }
        paginationItems.push(<span key="ellipses">...</span>);
        paginationItems.push(
          <span
            key={totalPages}
            className={cx({
              active: currentPage === totalPages,
              "pagination-item": true,
            })}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </span>
        );
      }
    }

    paginationItems.push(
      <span
        key={"arrow-right"}
        className={cx("arrow", "arrow-right")}
        onClick={() => handlePageChange(currentPage + 1, false, true)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    );

    return paginationItems;
  };

  const classes = cx("pagination-wrapper", { [className]: className });

  return <div className={classes}>{renderPaginationItems()}</div>;
}

export default Pagination;
