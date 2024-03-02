import React from "react";
import classNames from "classnames/bind";

import styles from "./Bill.module.scss";
import MenuItem from "../SideBar/Menu/MenuItem";
import Search from "../Search";
import Button from "../../../components/Button";
import BillItem from "./BillItem";

const cx = classNames.bind(styles);

function Basket() {
  const BASKEt_ITEMS = [
    {
      title: "Tất cả",
      to: "/dien-thoai-phu-kien",
    },
    {
      title: "Vận chuyển",
      to: "/may-tinh-laptop",
    },
    {
      title: "Hoành thành",
      to: "/my-pham",
    },
    {
      title: "Đã hủy",
      to: "/thoi-trang",
    },
  ];

  const renderItem = () => {
    return BASKEt_ITEMS.map((item, index) => (
      <div className={cx("basket-item")} key={index}>
        <MenuItem title={item.title} to={item.to} icon={item.icon} center />
      </div>
    ));
  };

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("basket-header")}>{renderItem()}</div>
        <Search
          placeholder="Bạn có thể tìm kiếm theo tên sản phẩm hoặc ngày mua"
          gray
        />
      </div>
      <div className={cx("basket-content")}>
        <h2 className={cx("DateOfPurchase")}>Ngày mua: 03/02/2004</h2>
        <BillItem />
        <BillItem />
        <BillItem />
        <BillItem />
        <div className={cx("status")}>
          <div className={cx("delivery")}>
            <Button
              primary
              style={{ borderRadius: "5px", marginBottom: "10px" }}
            >
              Đang giao hàng
            </Button>
          </div>
          <div className={cx("total")}>100.000VND</div>
        </div>
      </div>
    </>
  );
}

export default Basket;
