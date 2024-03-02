import React from "react";
import classNames from "classnames/bind";

import styles from "./Bill.module.scss";
import Image from "../../../../components/Image";
import images from "../../../../assets/images";

const cx = classNames.bind(styles);

function BasketItem({ checkBtn = false, check = false }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("product")}>
        {checkBtn ? (
          <input type="checkbox" className={cx("check")} checked={check} />
        ) : (
          <></>
        )}
        <div className={cx("picture")}>
          <Image src={images.iphone} alt="product" squareLarge />
        </div>
        <div className={cx("information")}>
          <div className={cx("title")}>Iphone 15 pro max</div>
          <div className={cx("type")}>Phân loại hàng: 256 GB</div>
          <div className={cx("quantity")}>1111</div>
        </div>
      </div>
      <div className={cx("total")}>₫2.000</div>
    </div>
  );
}

export default BasketItem;
