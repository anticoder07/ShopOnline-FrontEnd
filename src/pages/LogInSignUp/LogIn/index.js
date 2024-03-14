import React, { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "../LogInSignUp.module.scss";
import logInStyles from "./LogIn.module.scss";
import AuthContext from "../../../Context/AuthProvider";
import { logIn } from "../../../services/AuthService";

const cx = classNames.bind(styles);
const cxLogIn = classNames.bind(logInStyles);

function LogIn() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

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
      const fetchApi = async () => {
        const response = await logIn({ userEmail: user, password: pwd });
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
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

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
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
