import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCartShopping,
  faClipboardList,
  faCloudArrowUp,
  faRectangleList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";

import Button from "../../../components/Button";
import styles from "./Header.module.scss";
import Search from "../Search";
import Image from "../../../components/Image";
import Menu from "../../../components/Popper/Menu/Menu";
import MenuItem from "../SideBar/Menu/MenuItem";

const cx = classNames.bind(styles);

function Header({ visibleHeaderIndexing = true, visibleSearch = true }) {
  const currentUser = true;
  const currentAdmin = true;

  const USER_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "Profile",
      to: "/profile",
    },
    {
      icon: <FontAwesomeIcon icon={faClipboardList} />,
      title: "Basket",
      to: "/gio-hang",
    },
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Log out",
      to: "/trang-chu",
      separate: true,
    },
  ];

  const SIDEBAR_ITEMS = [
    {
      title: "Điện thoại - Phụ kiện",
      to: "/dien-thoai-phu-kien",
    },
    {
      title: "Máy tính - Laptop",
      to: "/may-tinh-laptop",
    },
    {
      title: "Mỹ phẩm chính hãng",
      to: "/my-pham",
    },
    {
      title: "Thời trang nam nữ",
      to: "/thoi-trang",
    },
    {
      title: "Sản phẩm khác",
      to: "/other",
    },
  ];

  const renderItem = () => {
    return SIDEBAR_ITEMS.map((item, index) => (
      <div className={cx("sidebar-item")} key={index}>
        <MenuItem title={item.title} to={item.to} icon={item.icon} />
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

        {visibleSearch && <Search />}

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <div className={cx("action-item")}>
                {currentAdmin ? (
                  <>
                    <Tippy
                      content="Có thông báo mới"
                      className={cx("custom-tooltip")}
                    >
                      <Button
                        href={"/thong-tin-don-mua"}
                        text
                        white
                        large
                        notificationDot={"."}
                      >
                        <FontAwesomeIcon icon={faRectangleList} />
                      </Button>
                    </Tippy>
                  </>
                ) : (
                  <>
                    <Tippy
                      content="Có thông báo mới"
                      className={cx("custom-tooltip")}
                    >
                      <Button
                        href={"/thong-tin-don-hang"}
                        text
                        white
                        large
                        notificationDot={"."}
                      >
                        <FontAwesomeIcon icon={faClipboardList} />
                      </Button>
                    </Tippy>
                  </>
                )}
              </div>
              <div className={cx("action-item")}>
                {currentAdmin ? (
                  <>
                    <Tippy
                      content="Thêm sản phẩm"
                      className={cx("custom-tooltip")}
                    >
                      <Button href={"/them-san-pham"} text white large>
                        <FontAwesomeIcon icon={faCloudArrowUp} />
                      </Button>
                    </Tippy>
                  </>
                ) : (
                  <>
                    <Tippy
                      content="2 Sản phẩm"
                      className={cx("custom-tooltip")}
                    >
                      <Button
                        href={"/gio-hang"}
                        text
                        white
                        large
                        notificationNumber={"2"}
                      >
                        <FontAwesomeIcon icon={faCartShopping} />
                      </Button>
                    </Tippy>
                  </>
                )}
              </div>
              <Menu items={USER_ITEMS}>
                <Image src="/" alt="avatar" avatar />
              </Menu>
            </>
          ) : (
            <div
              style={{
                position: "relative",
                right: "-65px",
              }}
            >
              <Button
                to="/"
                text
                style={{
                  padding: "3px 20px",
                  color: "white",
                  fontSize: "1.7rem",
                }}
              >
                Sign Up
              </Button>
              <Button
                to="/"
                text
                style={{
                  padding: "3px 20px",
                  color: "white",
                  fontSize: "1.7rem",
                }}
              >
                Log In
              </Button>
            </div>
          )}
        </div>
      </div>
      {visibleHeaderIndexing && (
        <div className={cx("header-indexing")}>{renderItem()}</div>
      )}
    </header>
  );
}

export default Header;
