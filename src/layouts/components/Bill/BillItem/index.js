import React from "react";
import classNames from "classnames/bind";

import styles from "./Bill.module.scss";
import Image from "../../../../components/Image";

const cx = classNames.bind(styles);

function BasketItem({ data, checkBtn = false, check = false }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("product")}>
        {checkBtn ? (
          <input type="checkbox" className={cx("check")} checked={check} />
        ) : (
          <></>
        )}
        <div className={cx("picture")}>
          <Image src={data.picture} alt="product" squareLarge />
        </div>
        <div className={cx("information")}>
          <div className={cx("title")}>{data.name}</div>
          <div className={cx("type")}>{`Phân loại hàng: ${data.type}`}</div>
          <div className={cx("quantity")}>{data.quantity}</div>
        </div>
      </div>
      <div className={cx("total")}>{`đ${data.total}`}</div>
    </div>
  );
}

export default BasketItem;
