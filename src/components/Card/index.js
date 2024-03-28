import React from "react";
import classNames from "classnames/bind";

import styles from "./Card.module.scss";
import Image from "../Image";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

function Card({ data }) {
  const handleClick = (event) => {
    event.preventDefault();

    window.location.href = `/by/id?i=${data.id}`;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <NavLink
      to={`/by/id?i=${data.id}`}
      className={cx("wrapper", "navlink-wrapper")}
      onClick={handleClick}
    >
      <div className={cx("logo")}>
        <Image src={data.picture} alt="product" card />
      </div>
      <div className={cx("info-wrapper")}>
        <span className={cx("title")}>{data.name}</span>
        <div className={cx("promotion")}>
          {data.promotion === null ? (
            <>
              <span className={cx("promotion-info")}>{data.promotion}</span>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className={cx("information-product")}>
          <span className={cx("price")}>{data.priceMin}VND</span>
          <span className={cx("sold")}>Đã bán {data.sold}</span>
        </div>
      </div>
    </NavLink>
  );
}

export default Card;
