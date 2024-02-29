import React from "react";
import classNames from "classnames/bind";

import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header/index";
import SideBar from "../components/SideBar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        {/* <div className={cx("sideBar-wrapper")}>
          <SideBar />
        </div> */}
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
