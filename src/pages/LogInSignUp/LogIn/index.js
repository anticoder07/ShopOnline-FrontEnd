import React from "react";
import classNames from "classnames/bind";

import styles from "../LogInSignUp.module.scss";

const cx = classNames.bind(styles);

function LogIn() {
  return (
    <div className={cx("form")}>
      <div className={cx("main")}>
        <form action="" method="post" className={cx("form block")} id="form-1">
          <h3 className={cx("heading")}>Đăng nhập</h3>
          <div className={cx("spacer")}></div>

          <div className={cx("form-group")}>
            <label for="fullname" className={cx("form-label")}>
              Tên Đăng Nhập
            </label>
            <input
              type="text"
              className={cx("form-control")}
              id="fullname"
              name="fullname"
              placeholder="VD: Cao Bá Hướng"
              rule="isRequired"
            />
            <span className={cx("form-message")}></span>
          </div>

          <div className={cx("form-group")}>
            <label for="password" className={cx("form-label")}>
              Mật khẩu
            </label>
            <input
              type="password"
              className={cx("form-control")}
              id="password"
              name="password"
              placeholder="Nhập mật khẩu"
              rule="isRequired|min:6|max:20"
            />
            <span className={cx("form-message")}></span>
          </div>

          <button className={cx("form-submit", "button-89")}>Đăng Ký</button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
