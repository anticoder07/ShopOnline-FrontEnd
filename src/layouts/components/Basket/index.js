import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Basket.module.scss";
import BillItem from "../Bill/BillItem";
import Search from "../Search";
import Button from "../../../components/Button";

const cx = classNames.bind(styles);

function Basket() {
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const handleSelectAllChange = () => {
    setSelectAllChecked(!selectAllChecked);
  };

  return (
    <>
      <div className={cx("wrapper")}>
        <h1 className={cx("title")}>Giỏ hàng của bạn</h1>
        <Search placeholder="Bạn có thể tìm kiếm theo tên sản phẩm" gray />
      </div>
      <div className={cx("basket-content")}>
        <div className={cx("select-all")} onClick={handleSelectAllChange}>
          <input
            type="checkbox"
            className={cx("select-all-btn")}
            checked={selectAllChecked}
          />
          Chọn tất cả
        </div>
        <BillItem checkBtn check={selectAllChecked} />
        <BillItem checkBtn check={selectAllChecked} />
        <BillItem checkBtn check={selectAllChecked} />
        <BillItem checkBtn check={selectAllChecked} />
        <BillItem checkBtn check={selectAllChecked} />
        <div className={cx("status")}>
          <div className={cx("delivery")}>
            <Button
              primary
              style={{ borderRadius: "5px", marginBottom: "10px" }}
            >
              Đặt Hàng
            </Button>
          </div>
          <div className={cx("total")}>100.000VND</div>
        </div>
      </div>
    </>
  );
}

export default Basket;
