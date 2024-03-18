import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Basket.module.scss";
import BillItem from "../Bill/BillItem";
import Search from "../Search";
import Button from "../../../components/Button";
import {
  deleteProductToBasket,
  seeBasket,
} from "../../../services/BasketService";
import InformationBasket from "./InformationBasket";

const cx = classNames.bind(styles);

function Basket() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [page, setPage] = useState([]);
  const [totalBasket, setTotalBasket] = useState(0);
  const [checkInformationBasket, setCheckInformationBasket] = useState(false);

  useEffect(() => {
    try {
      const fetchApi = async () => {
        const res = await seeBasket();
        setPage(res);
      };
      fetchApi();
    } catch (err) {}
  }, []);

  useEffect(() => {
    if (selectAllChecked) {
      const total = page.reduce((acc, item) => {
        const productTypeList = item.productDto.productTypeList;
        let price = 0;
        productTypeList.forEach((element) => {
          const productType = element.productTypeItemDtoList;
          productType.forEach((type) => {
            if (type.id === item.typeId) {
              price = type.price;
            }
          });
        });
        return acc + price * item.quantity;
      }, 0);
      setTotalBasket(total);
    } else {
      setTotalBasket(0);
    }
  }, [selectAllChecked, page]);

  const handleSelectAllChange = () => {
    setSelectAllChecked(!selectAllChecked);
  };

  const handlePriceChecked = (price) => {
    setTotalBasket((prevTotalBasket) => prevTotalBasket + price);
  };

  const handleOder = () => {
    setCheckInformationBasket(true);
  };

  const handleDeleteBillItem = (id) => {
    try {
      const fetchApi = async () => {
        const res = await deleteProductToBasket(id);
        setPage(res);
      };

      fetchApi();
    } catch (err) {
      console.log(err);
    }
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
        {page.map((item) => {
          const productTypeList = item.productDto.productTypeList;
          let price = 0;
          productTypeList.forEach((element) => {
            const productType = element.productTypeItemDtoList;
            productType.forEach((type) => {
              if (type.id === item.typeId) {
                price = type.price;
              }
            });
          });

          const data = {
            id: item.productDto.id,
            typeId: item.typeId,
            picture: item.productDto.picture,
            name: item.productDto.name,
            type: item.type,
            quantity: item.quantity,
            total: price,
          };

          const check = selectAllChecked ? true : null;

          return (
            <BillItem
              key={`${item.id}-${item.typeId}`}
              data={data}
              checkBtn
              check={check}
              handleChecked={handlePriceChecked}
              deteteBasketItem={() => handleDeleteBillItem(item.id)}
            />
          );
        })}
        <div className={cx("status")}>
          <div className={cx("delivery")}>
            <Button
              primary
              style={{ borderRadius: "5px", marginBottom: "10px" }}
              onClick={handleOder}
            >
              Đặt Hàng
            </Button>
          </div>
          <div className={cx("total")}>{totalBasket} VND</div>
        </div>
      </div>
      {checkInformationBasket && (
        <>
          <div
            className={cx("overlay")}
            onClick={() => {
              setCheckInformationBasket(!checkInformationBasket);
              setName("");
              setPhoneNumber("");
              setAddress("");
            }}
          ></div>
          <div className={cx("information-wrapper")}>
            <InformationBasket
              takeValue={(name, phoneNumber, address) => {
                console.log("");
              }}
              handleCancel={() => {
                setCheckInformationBasket(!checkInformationBasket);
                setName("");
                setPhoneNumber("");
                setAddress("");
              }}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Basket;
