import React from "react";
import classNames from "classnames/bind";

import styles from "./Card.module.scss";
import Image from "../Image";
import images from "../../assets/images";

const cx = classNames.bind(styles);

function Card() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <Image src={images.iphone} alt="product" card />
      </div>
      <div className={cx("info-wrapper")}>
        <span className={cx("title")}>
          Sản phẩm này dởm đừng mua làm gì cho tốn tiền
        </span>
        <div className={cx("promotion")}>
          <span className={cx("promotion-info")}>Đang bán chạy</span>
        </div>
        <div className={cx("information-product")}>
          <span className={cx("price")}>10.000VND</span>
          <span className={cx("sold")}>Đã bán 10</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
