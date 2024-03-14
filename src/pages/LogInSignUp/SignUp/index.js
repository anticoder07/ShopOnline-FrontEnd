import React, { useContext, useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "../LogInSignUp.module.scss";
import signUpStyes from "./SignUp.module.scss";
import AuthContext from "../../../Context/AuthProvider";
import { signUp } from "../../../services/AuthService";

const cx = classNames.bind(styles);
const cxSignUp = classNames.bind(signUpStyes);

function SignUp() {
  const { setAuth } = useContext(AuthContext);

  const errRef = useRef();

  const [user, setUser] = useState("");
  const [gmail, setGmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [errMsgUser, setErrMsgUser] = useState("");
  const [errMsgEmail, setErrMsgEmail] = useState("");
  const [errMsgPwd, setErrMsgPwd] = useState("");
  const [errMsgConfirmPwd, setErrMsgConfirmPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleConfirmPassword = () => {
    if (confirmPwd.length < 5 || confirmPwd.length > 10) {
      setErrMsgPwd("Độ dài mật khẩu từ 5 tới 10 kí tự");
      return;
    } else {
      setErrMsgPwd("");
    }
  };

  const handleErrConfirmPassword = () => {
    if (confirmPwd.length < 5 || confirmPwd.length > 10) {
      setErrMsgPwd("Độ dài mật khẩu từ 5 tới 10 kí tự");
      return;
    } else {
      setErrMsgPwd("");
    }
    if (pwd !== confirmPwd) {
      setErrMsgConfirmPwd("Mật khẩu không khớp.");
    } else {
      setErrMsgConfirmPwd("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fetchApi = async () => {
        const response = await signUp({ user, gmail, pwd });
        console.log(JSON.stringify(response?.data));
        //console.log(JSON.stringify(response));
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({ user, pwd, roles, accessToken });
        setUser("");
        setPwd("");
        setSuccess(true);
      };

      fetchApi();
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("SignUp Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className={cxSignUp("wrapper")}>
      <div className={cxSignUp("title")}>
        <h1>Shop Bá Hướng</h1>
        <span>Shop đồ thật bán đồ thật</span>
      </div>
      <div className={cx("form")}>
        <div className={cx("main")}>
          <form className={cx("form block")} onSubmit={handleSubmit}>
            <h3 className={cx("heading")}>Đăng Kí Thành Viên</h3>
            <p className={cx("desc")}>Đăng kí để được nhận kẹo 🍭</p>
            <div className={cx("spacer")}></div>

            <div className={cx("form-group")}>
              <label htmlFor="fullname" className={cx("form-label")}>
                Tên Đăng Nhập
              </label>
              <input
                type="text"
                className={cx("form-control")}
                id="fullname"
                placeholder="VD: Cao Bá Hướng"
                required
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
              <span className={cx("form-message")}>{errMsgUser}</span>
            </div>

            <div className={cx("form-group")}>
              <label htmlFor="userEmail" className={cx("form-label")}>
                Email
              </label>
              <input
                type="text"
                className={cx("form-control")}
                id="userEmail"
                placeholder="VD: caobahuong@gmail.com"
                required
                onChange={(e) => {
                  setGmail(e.target.value);
                }}
              />
              <span className={cx("form-message")}>{errMsgEmail}</span>
            </div>

            <div className={cx("form-group")}>
              <label htmlFor="password" className={cx("form-label")}>
                Mật khẩu
              </label>
              <input
                type="password"
                className={cx("form-control")}
                id="password"
                placeholder="Nhập mật khẩu"
                required
                max={10}
                min={5}
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
                onBlur={handleConfirmPassword}
              />
              <span className={cx("form-message")}>{errMsgPwd}</span>
            </div>

            <div className={cx("form-group")}>
              <label
                htmlFor="password_confirmation"
                className={cx("form-label")}
              >
                Nhập lại mật khẩu
              </label>
              <input
                type="password"
                className={cx("form-control")}
                id="password_confirmation"
                placeholder="Nhập lại mật khẩu"
                required
                max={10}
                min={5}
                onChange={(e) => {
                  setConfirmPwd(e.target.value);
                }}
                onBlur={handleErrConfirmPassword}
              />
              <span className={cx("form-message")}>{errMsgConfirmPwd}</span>
            </div>

            <div className={cx("form-group")}></div>

            <button className={cx("form-submit", "button-89")} type="submit">
              Đăng Ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
