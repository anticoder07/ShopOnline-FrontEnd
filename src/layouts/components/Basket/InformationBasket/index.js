import React, { useState } from "react";
import classNames from "classnames/bind";

import style from "./InformationBasket.module.scss";

const cx = classNames.bind(style);

function InformationBasket({ takeValue, handleCancel }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    takeValue(name, phoneNumber, address); // Gọi hàm takeValue với các giá trị đã nhập
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("form")}>
        <div className={cx("title")}>
          <h1>Thông tin đơn hàng</h1>
        </div>
        <div className={cx("spacer")}></div>
        <form className={cx("form block")} onSubmit={handleSubmit}>
          {" "}
          {/* Gọi hàm handleSubmit khi form được submit */}
          <div className={cx("form-group")}>
            <label htmlFor="fullname" className={cx("form-label")}>
              Tên Người Nhận
            </label>
            <input
              className={cx("form-control")}
              type="text"
              id="fullname"
              placeholder="VD: Cao Bá Hướng"
              onChange={(e) => {
                setName(e.target.value);
              }}
              autoComplete="off"
              required
            />
          </div>
          <div className={cx("form-group")}>
            <label htmlFor="phoneNumber" className={cx("form-label")}>
              Số Điện Thoại
            </label>
            <input
              className={cx("form-control")}
              type="text"
              id="phoneNumber"
              placeholder="19001800"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              autoComplete="off"
              required
            />
          </div>
          <div className={cx("form-group")}>
            <label htmlFor="address" className={cx("form-label")}>
              Địa Chỉ
            </label>
            <input
              className={cx("form-control")}
              type="text"
              id="address"
              placeholder=""
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              autoComplete="off"
              required
            />
          </div>
          <button className={cx("form-submit")} onClick={handleCancel}>
            Hủy Đăng Kí
          </button>
          <button className={cx("form-submit")} type="submit">
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
}

export default InformationBasket;
