import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Bill.module.scss";
import MenuItem from "../SideBar/Menu/MenuItem";
import Search from "../Search";
import Button from "../../../components/Button";
import BillItem from "./BillItem";
import { seeBill } from "../../../services/BillService";

const cx = classNames.bind(styles);

function Bill() {
  const [page, setPage] = useState([]);
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
          gray
        />
      </div>
      {page.map((item) => (
        <div key={item.id} className={cx("basket-content")}>
          <h2 className={cx("DateOfPurchase")}>
            Ngày mua: {item.purchasedDate.split("T")[0]}
          </h2>
          {console.log(item)}
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
            <div className={cx("action")}>
              <div className={cx("delivery")}>
                {item.stateBill === "PENDING_APPROVAL" && (
                  <Button
                    primary
                    style={{ borderRadius: "5px", marginBottom: "10px" }}
                  >
                    Đang xét duyệt
                  </Button>
                )}
                {item.stateBill === "PREPARING_FOR_DELIVERY" && (
                  <Button
                    primary
                    style={{ borderRadius: "5px", marginBottom: "10px" }}
                  >
                    Chuẩn bị giao hàng
                  </Button>
                )}
                {item.stateBill === "DELIVERING" && (
                  <Button
                    primary
                    style={{ borderRadius: "5px", marginBottom: "10px" }}
                  >
                    Đang giao hàng
                  </Button>
                )}
                {item.stateBill === "DELIVERED" && (
                  <Button
                    primary
                    style={{ borderRadius: "5px", marginBottom: "10px" }}
                  >
                    Đã giao hàng
                  </Button>
                )}
                {item.stateBill === "RECEIVED" && (
                  <Button
                    primary
                    style={{ borderRadius: "5px", marginBottom: "10px" }}
                  >
                    Đã nhận hàng
                  </Button>
                )}
              </div>
              <div className={cx("total")}>{item.total} VND</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Bill;
