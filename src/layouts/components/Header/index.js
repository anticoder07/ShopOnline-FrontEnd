import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCartShopping,
  faClipboardList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";

import Button from "../../../components/Button";
import styles from "./Header.module.scss";
import Search from "../Search";
import Image from "../../../components/Image";
import Menu from "../../../components/Popper/Menu/Menu";
import { Link } from "react-router-dom";
import images from "../../../assets/images";
import MenuItem from "../SideBar/Menu/MenuItem";

const cx = classNames.bind(styles);

function Header() {
  const USER_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "Profile",
      to: "/hello",
    },
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Log out",
      to: "/helo",
      separate: true,
    },
  ];

  const SIDEBAR_ITEMS = [
    {
      title: "Điện thoại - Phụ kiện ",
      to: "",
    },
    {
      title: "Máy tính - Laptop",
      to: "",
    },
    {
      title: "Mỹ phẩm chính hãng",
      to: "",
    },
    {
      title: "Thời trang nam nữ",
      to: "",
    },
    {
      title: "Sản phẩm khác",
      to: "",
    },
  ];

  const renderItem = () => {
    return SIDEBAR_ITEMS.map((item, index) => (
      <div className={cx("sidebar-item")} key={index}>
        <MenuItem title={item.title} to={item.toNav} icon={item.icon} />
      </div>
    ));
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("header-wrapper")}>
        <div className={cx("inner")}>
          <a className={cx("logo")} href="/">
            <h1>SHOP BÁ HƯỚNG</h1>
            <p className={cx("description")}>Shop đồ thật bán đồ thật</p>
          </a>
        </div>

        <Search />

        <div className={cx("action")}>
          <div className={cx("action-item")}>
            <Tippy content="Có thông báo mới" className={cx("custom-tooltip")}>
              <Button href={"/"} text white large notificationDot={"."}>
                <FontAwesomeIcon icon={faClipboardList} />
              </Button>
            </Tippy>
          </div>
          <div className={cx("action-item")}>
            <Tippy content="2 Sản phẩm" className={cx("custom-tooltip")}>
              <Button href={"/"} text white large notificationNumber={"2"}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
            </Tippy>
          </div>
          <Menu items={USER_ITEMS}>
            <Image src="/" alt="avatar" avatar />
          </Menu>
        </div>
      </div>
      <div className={cx("title")}>{renderItem()}</div>
    </header>
  );
}

export default Header;
