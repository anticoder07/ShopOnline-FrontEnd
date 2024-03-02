import React from "react";
import classNames from "classnames/bind";

import styles from "./Sold.module.scss";

const cx = classNames.bind(styles);

function Sold({ head, center, tail }) {
  return (
    <span className={cx("sold")}>
      {head}
      <span className={cx("sold-number")}> {center} </span>
      {tail}
    </span>
  );
}

export default Sold;
