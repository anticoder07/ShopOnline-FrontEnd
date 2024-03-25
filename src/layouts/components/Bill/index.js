import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Bill.module.scss";
import MenuItem from "../SideBar/Menu/MenuItem";
import Search from "../Search";
import Button from "../../../components/Button";
import BillItem from "./BillItem";
import { seeBill } from "../../../services/BillService";
import { searchAllProductsBill } from "../../../services/SearchService";

const cx = classNames.bind(styles);

function Bill() {
  const [page, setPage] = useState([]);
  const [optionBill, setOptionBill] = useState("ALL");
  const BASKET_ITEMS = {
    ALL: {
      title: "Tất cả",
      to: "/tat-ca",
    },
    TRANSPORT: {
      title: "Vận chuyển",
      to: "/thong-tin-don-mua",
    },
    COMPLETE: {
      title: "Hoành thành",
      to: "/thong-tin-don-mua",
    },
    CANCELLED: {
      title: "Đã hủy",
      to: "/thong-tin-don-mua",
    },
  };

  const renderItem = () => {
    return Object.keys(BASKET_ITEMS).map((KeyOption) => (
      <div className={cx("basket-item")} key={KeyOption}>
        <MenuItem
          title={BASKET_ITEMS[KeyOption].title}
          to={BASKET_ITEMS[KeyOption].to}
          icon={BASKET_ITEMS[KeyOption].icon}
          center
        />
      </div>
    ));
  };

  useEffect(() => {
    try {
      const fetchApi = async () => {
        const res = await seeBill();
        setPage(res);
      };

      fetchApi();
    } catch (err) {}
  }, []);

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("basket-header")}>{renderItem()}</div>
        <Search
          placeholder="Bạn có thể tìm kiếm theo tên sản phẩm hoặc ngày mua"
          customSearchNotRender
          activityNoValue={seeBill}
          activity={(e) => searchAllProductsBill(e)}
          handleSearchValue={(value) => setPage(value)}
          gray
        />
      </div>
      {page.map((item) => {
        const stateBillMap = {
          PENDING_APPROVAL: "Đang xét duyệt",
          PREPARING_FOR_DELIVERY: "Chuẩn bị giao hàng",
          DELIVERING: "Đang giao hàng",
          DELIVERED: "Đã giao hàng",
          RECEIVED: "Đã nhận hàng",
        };
        return (
          <div key={item.id} className={cx("basket-content")}>
            <h2 className={cx("DateOfPurchase")}>
              Ngày : {item.purchasedDate.split("T")[0]}
            </h2>
            {item.productsList.map((product) => {
              return (
                <BillItem
                  data={{
                    id: product.products.id,
                    typeId: "hello",
                    picture: product.products.picture,
                    name: product.products.name,
                    type: product.type,
                    quantity: product.quantity,
                    total: product.oldPrice,
                  }}
                  deleteButton={false}
                />
              );
            })}
            <div className={cx("status")}>
              <div className={cx("information")}>
                <div className={cx("name")}>
                  Họ và tên: <span className={cx("message")}>{item.name}</span>
                </div>
                <div className={cx("phone-number")}>
                  Số điện thoại:{" "}
                  <span className={cx("message")}>{item.phoneNumber}</span>
                </div>
                <div className={cx("address")}>
                  Địa chỉ: <span className={cx("message")}>{item.address}</span>
                </div>
              </div>
              <div className={cx("delivery")}>
                <div className={cx("action")}>
                  <div className={cx("total")}>{item.total} VND</div>
                  {Object.keys(stateBillMap).map(
                    (key) =>
                      item.stateBill === key && (
                        <Button
                          key={key}
                          // onClick={}
                          primary
                        >
                          {stateBillMap[key]}
                        </Button>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Bill;
