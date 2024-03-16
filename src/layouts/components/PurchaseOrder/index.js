import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./purchaseOrder.module.scss";
import BillItem from "../Bill/BillItem";
import MenuItem from "../SideBar/Menu/MenuItem";
import Search from "../Search";
import { seeBill } from "../../../services/BillService";

const cx = classNames.bind(styles);

function PurchaseOrder() {
  const [data, setData] = useState([]);

  const BASKEt_ITEMS = [
    {
      title: "Tất cả",
      to: "/dien-thoai-phu-kien",
    },
    {
      title: "Cần xử lý",
      to: "/thoi-trang",
    },
    {
      title: "Vận chuyển",
      to: "/may-tinh-laptop",
    },
    {
      title: "Hoành thành",
      to: "/my-pham",
    },
  ];

  const renderItem = () => {
    return BASKEt_ITEMS.map((item, index) => (
      <div className={cx("basket-item")} key={index}>
        <MenuItem title={item.title} to={item.to} icon={item.icon} center />
      </div>
    ));
  };

  useEffect(() => {
    try {
      const fetchApi = async () => {
        const res = await seeBill();
        setData(res);
      };

      fetchApi();
    } catch (err) {
      console.log(err);
    }
  }, []);

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
        <h2 className={cx("DateOfPurchase")}>Ngày lên đơn: 03/02/2004</h2>
        <BillItem />
        <BillItem />
        <BillItem />
        <BillItem />
      </div>
    </>
  );
}
export default PurchaseOrder;
