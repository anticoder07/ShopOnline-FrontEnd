import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./purchaseOrder.module.scss";
import BillItem from "../Bill/BillItem";
import MenuItem from "../SideBar/Menu/MenuItem";
import Search from "../Search";
import { seeBill, setStateAdmin } from "../../../services/BillService";
import Button from "../../../components/Button";
import StateProduct from "../StateProduct";

const cx = classNames.bind(styles);

function PurchaseOrder() {
  const [page, setPage] = useState([]);
  const [showStateProduct, setShowStateProduct] = useState(false);
  const [productCurrent, setProductCurrent] = useState(null);
  const [optionPurchaseOrder, setOptionPurchaseOrder] = useState("ALL");

  const BASKET_ITEMS = {
    ALL: {
      title: "Tất cả",
      to: "/thong-tin-don-mua",
    },
    NEED_PROCESSING: {
      title: "Cần xử lý",
      to: "/can-xu-ly",
    },
    TRANSPORT: {
      title: "Vận chuyển",
      to: "/van-chuyen",
    },
    COMPLETE: {
      title: "Hoành thành",
      to: "/hoan-thanh",
    },
  };

  const renderItem = () => {
    return Object.keys(BASKET_ITEMS).map((KeyOption) => (
      <div
        className={cx("basket-item")}
        key={KeyOption}
        onClick={() => {
          setOptionPurchaseOrder(KeyOption);
        }}
      >
        <MenuItem
          title={BASKET_ITEMS[KeyOption].title}
          to={BASKET_ITEMS[KeyOption].to}
          icon={BASKET_ITEMS[KeyOption].icon}
          center
        />
      </div>
    ));
  };

  const handleButtonClick = (id) => {
    setShowStateProduct(true);
    setProductCurrent(id - 1);
  };

  const handleUpdateStateProduct = (id, state) => {
    try {
      const fetchApi = async () => {
        const res = await setStateAdmin(id, state);
        setPage(res);
        console.log(res);
      };
      fetchApi();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      const fetchApi = async () => {
        const res = await seeBill();
        setPage(res);
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
                          onClick={() => handleButtonClick(item.id)}
                          primary
                          className={cx("state-btn")}
                        >
                          {stateBillMap[key]}
                        </Button>
                      )
                  )}
                </div>
              </div>
            </div>
            {showStateProduct && (
              <>
                <div
                  className={cx("overlay")}
                  onClick={() => {
                    setShowStateProduct(false);
                  }}
                ></div>
                <div className={cx("state")}>
                  <StateProduct
                    visible={page[productCurrent].stateBill}
                    value={(e) => {
                      setShowStateProduct(false);
                      handleUpdateStateProduct(item.id, e);
                    }}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
export default PurchaseOrder;
