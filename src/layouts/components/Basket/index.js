import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Basket.module.scss";
import BillItem from "../Bill/BillItem";
import Search from "../Search";
import Button from "../../../components/Button";
import { seeBasket } from "../../../services/BasketService";

const cx = classNames.bind(styles);

function Basket() {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [page, setPage] = useState([]);

  const handleSelectAllChange = () => {
    setSelectAllChecked(!selectAllChecked);
  };

  useEffect(() => {
    try {
      const fetchApi = async () => {
        const res = await seeBasket();
        setPage(res);
      };

      fetchApi();
    } catch (err) {}
  }, []);

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
        {page.map((item) => {
          const productTypeList =
            item.productDto.productTypeList[0].productTypeItemDtoList;
          console.log(productTypeList);
          let price = 0;
          productTypeList.array.forEach((element) => {
            if (element.id === item.typeId) {
              price = element.price;
            }
          });

          const data = {
            picture: item.productDto.picture,
            name: item.productDto.name,
            type: item.type,
            quantity: item.quantity,
            total: price,
          };
          return <BillItem data={data} checkBtn check={selectAllChecked} />;
        })}
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
