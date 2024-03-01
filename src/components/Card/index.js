import React from "react";
import classNames from "classnames/bind";

import styles from "./Card.module.scss";
import Image from "../Image";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

function Card({ data }) {
  return (
    <NavLink to={data.to} className={cx("wrapper", "navlink-wrapper")}>
      <div className={cx("logo")}>
        <Image src={data.logo} alt="product" card />
      </div>
      <div className={cx("info-wrapper")}>
        <span className={cx("title")}>{data.title}</span>
        <div className={cx("promotion")}>
          {data.promotion.length > 0 ? (
            <>
              <span className={cx("promotion-info")}>{data.promotion}</span>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className={cx("information-product")}>
          <span className={cx("price")}>{data.price}VND</span>
          <span className={cx("sold")}>Đã bán {data.sold}</span>
        </div>
      </div>
    </NavLink>
  );
}

export default Card;
