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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [errMsgUser, setErrMsgUser] = useState("");
  const [errMsgEmail, setErrMsgEmail] = useState("");
  const [errPhoneNumber, setErrPhoneNumber] = useState("");
  const [errDateOfBirth, setErrDateOfBirth] = useState("");
  const [errMsgPwd, setErrMsgPwd] = useState("");
  const [errMsgConfirmPwd, setErrMsgConfirmPwd] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleUser = () => {
    if (user.length === 0 || user.length > 20 || user.length < 3) {
      setErrMsgUser("Nhập ô không hợp lệ");
    }
  };

  const handleGmail = () => {
    let gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (
      gmail.length === 0
      // || !gmailRegex.test(gmail)
    ) {
      setErrMsgEmail("Chưa phải là gmail");
    }
  };

  const handlePhoneNumber = () => {
    let phoneRegex = /^\d{10}$/;
    if (
      phoneNumber.length === 0
      // || !phoneRegex.test(phoneNumber)
    ) {
      setErrPhoneNumber("Chưa phải là số điện thoại");
    }
  };

  const handleDateOfBirth = () => {
    if (dateOfBirth.length === 0) {
      setErrDateOfBirth("Vui lòng nhập ô này");
    }
  };

  const handlePwd = () => {
    if (pwd.length === 0) {
      setErrMsgPwd("Vui lòng nhập ô này");
    }
  };

  const handleConfirmPwd = () => {
    if (confirmPwd.length === 0) {
      setErrMsgConfirmPwd("Vui lòng nhập ô này");
    }
    if (pwd !== confirmPwd) {
      setErrMsgConfirmPwd("Mật khẩu nhập lại không trùng khớp");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fetchApi = async () => {
        const response = await signUp({
          username: user,
          email: gmail,
          password: pwd,
          confirmPassword: confirmPwd,
          sdt: phoneNumber,
          role: "admin",
          dateOfBirth: dateOfBirth,
        });
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({ user, pwd, roles, accessToken });
        // setUser("");
        // setGmail("");
        // setPhoneNumber("");
        // setDateOfBirth("");
        // setPwd("");
        // setConfirmPwd("");
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
                onBlur={handleUser}
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
                onBlur={handleGmail}
              />
              <span className={cx("form-message")}>{errMsgEmail}</span>
            </div>

            <div className={cx("form-group")}>
              <label htmlFor="phoneNumber" className={cx("form-label")}>
                Phone Number
              </label>
              <input
                type="text"
                className={cx("form-control")}
                id="phoneNumber"
                placeholder="0988765555"
                required
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                onBlur={handlePhoneNumber}
              />
              <span className={cx("form-message")}>{errPhoneNumber}</span>
            </div>

            <div className={cx("form-group")}>
              <label htmlFor="dateOfBirth" className={cx("form-label")}>
                Phone Number
              </label>
              <input
                type="date"
                className={cx("form-control")}
                id="dateOfBirth"
                required
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
                onBlur={handleDateOfBirth}
              />
              <span className={cx("form-message")}>{errDateOfBirth}</span>
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
                onBlur={handlePwd}
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
                onBlur={handleConfirmPwd}
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
