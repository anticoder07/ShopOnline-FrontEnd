import React, { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "../LogInSignUp.module.scss";
import logInStyles from "./LogIn.module.scss";
import AuthContext from "../../../Context/AuthProvider";
import { logIn } from "../../../services/AuthService";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
const cxLogIn = classNames.bind(logInStyles);

function LogIn() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await logIn({ userEmail: user, password: pwd });
      if (response.accessToken) {
        const { accessToken, roles } = response;
        setAuth({ user, pwd, roles, accessToken });
        setUser("");
        setPwd("");
        setSuccess(true);
      } else {
        if (response.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (response.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  useEffect(() => {
    if (success) {
      setSuccess(false);
      // window.location.href = "/";
      navigate("/");
    }
  }, [success]);

  return (
    <div className={cxLogIn("wrapper")}>
      <div className={cxLogIn("title")}>
        <h1>Shop Bá Hướng</h1>
        <span>Shop đồ thật bán đồ thật</span>
      </div>
      <div className={cx("form")}>
        <div className={cx("main")}>
          <form className={cx("form block")} onSubmit={handleSubmit}>
            <h3 className={cx("heading")}>Đăng nhập</h3>
            <div className={cx("spacer")}></div>

            <div className={cx("form-group")}>
              <label htmlFor="fullname" className={cx("form-label")}>
                Tên Đăng Nhập
              </label>
              <input
                ref={userRef}
                className={cx("form-control")}
                type="text"
                id="fullname"
                placeholder="VD: Cao Bá Hướng"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                autoComplete="off"
                required
              />
              <span className={cx("form-message")}></span>
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
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <span className={cx("form-message")}></span>
            </div>

            <button className={cx("form-submit", "button-89")}>Đăng Ký</button>

            <span
              className={cx("form-message")}
              style={{ fontSize: "16px", fontWeight: "500" }}
            >
              <div className={cx("spacer")}></div>
              {errMsg}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
