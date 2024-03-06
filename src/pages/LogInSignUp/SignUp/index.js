import React from "react";
import classNames from "classnames/bind";

import styles from "../LogInSignUp.module.scss";
import signUpStyes from "./SignUp.module.scss";

const cx = classNames.bind(styles);
const cxSignUp = classNames.bind(signUpStyes);

function SignUp() {
  return (
    <div className={cxSignUp("wrapper")}>
      <div className={cxSignUp("title")}>
        <h1>Shop Bá Hướng</h1>
        <span>Shop đồ thật bán đồ thật</span>
      </div>
      <div className={cx("form")}>
        <div className={cx("main")}>
          <form
            action=""
            method="post"
            className={cx("form block")}
            id="form-1"
          >
            <h3 className={cx("heading")}>Đăng Kí Thành Viên</h3>
            <p className={cx("desc")}>Đăng kí để được nhận kẹo 🍭</p>
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
              <label for="userEmail" className={cx("form-label")}>
                Email
              </label>
              <input
                type="text"
                className={cx("form-control")}
                id="userEmail"
                name="userEmail"
                placeholder="VD: caobahuong@gmail.com"
                rule="isRequired|isGmail"
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

            <div className={cx("form-group")}>
              <label for="password_confirmation" className={cx("form-label")}>
                Nhập lại mật khẩu
              </label>
              <input
                type="password"
                className={cx("form-control")}
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Nhập lại mật khẩu"
                rule="isRequired|min:6|max:20|isConfirmed"
              />
              <span className={cx("form-message")}></span>
            </div>

            <div className={cx("form-group")}></div>

            <button className={cx("form-submit", "button-89")}>Đăng Ký</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
