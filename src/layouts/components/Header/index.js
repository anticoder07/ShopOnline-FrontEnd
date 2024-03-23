import React, { useContext, useEffect, useState } from "react";
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
import AuthContext from "../../../Context/AuthProvider";
import { logOut } from "../../../services/AuthService";
import { seeInformationHeader } from "../../../services/ProfileService";

const cx = classNames.bind(styles);

function Header({ visibleHeaderIndexing = true, visibleSearch = true }) {
  const [informationHeader, setInformationHeader] = useState({
    avatar: "",
    numberOfNotification: "",
  });

  const { auth, setAuth } = useContext(AuthContext);
  const { user, roles, accessToken } = auth;

  const [currentUser, setCurrentUser] = useState(user);
  const currentAdmin = roles !== "admin";

  const handleLogOut = () => {
    try {
      const fetchApi = async () => {
        await logOut();
        setAuth({});
        localStorage.clear();
      };

      fetchApi();
      setCurrentUser(false);
    } catch (err) {
      console.log(err);
    }
  };

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
      separate: true,
      onClick: handleLogOut,
    },
  ];

  const SIDEBAR_ITEMS = [
    {
      title: "Điện thoại - Phụ kiện",
      to: "/dien-thoai-phu-kien",
    },
    {
      title: "Máy tính - Laptop",
      to: "/may-tinh-lap-top",
    },
    {
      title: "Mỹ phẩm chính hãng",
      to: "/my-pham-chinh-hang",
    },
    {
      title: "Thời trang nam nữ",
      to: "/thoi-trang-nam-nu",
    },
    {
      title: "Sản phẩm khác",
      to: "/san-pham-khac",
    },
  ];

  const renderItem = () => {
    return SIDEBAR_ITEMS.map((item, index) => (
      <div className={cx("sidebar-item")} key={index}>
        <MenuItem title={item.title} to={item.to} icon={item.icon} />
      </div>
    ));
  };

  useEffect(() => {
    try {
      const fetchApi = async () => {
        const res = await seeInformationHeader();
        if (res.status === 401) {
          setCurrentUser(false);
        } else {
          setInformationHeader(res);
        }
      };

      fetchApi();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <header
      className={cx("wrapper", {
        hiddenHeaderIndex: !visibleHeaderIndexing,
        headerIndex: visibleHeaderIndexing,
      })}
    >
      <div className={cx("header-wrapper", "gripMobile")}>
        <div className={cx("inner")}>
          <a className={cx("logo")} href="/">
            <h1>SHOP BÁ HƯỚNG</h1>
            <p className={cx("description")}>Shop đồ thật bán đồ thật</p>
          </a>
        </div>

        {visibleSearch && (
          <div
            style={{ display: "flex", alignItems: "center", padding: "auto" }}
          >
            <Search />
            <div
              style={{ position: "relative", right: "10px" }}
              className={cx("displayMobile")}
            >
              <Menu items={USER_ITEMS}>
                <Image src="/" alt="avatar" avatar />
              </Menu>
            </div>
          </div>
        )}

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <div className={cx("action-item")}>
                {currentAdmin ? (
                  <div className={cx("nonDisplayMobile")}>
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
                  </div>
                ) : (
                  <div className={cx("nonDisplayMobile")}>
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
                  </div>
                )}
              </div>
              <div className={cx("action-item")}>
                {currentAdmin ? (
                  <div className={cx("nonDisplayMobile")}>
                    <Tippy
                      content="Thêm sản phẩm"
                      className={cx("custom-tooltip")}
                    >
                      <Button href={"/them-san-pham"} text white large>
                        <FontAwesomeIcon icon={faCloudArrowUp} />
                      </Button>
                    </Tippy>
                  </div>
                ) : (
                  <div className={cx("nonDisplayMobile")}>
                    <Tippy
                      content={`${informationHeader.numberOfNotification} Sản phẩm`}
                      className={cx("custom-tooltip")}
                    >
                      <Button
                        href={"/gio-hang"}
                        text
                        white
                        large
                        notificationNumber={`${informationHeader.numberOfNotification}`}
                      >
                        <FontAwesomeIcon icon={faCartShopping} />
                      </Button>
                    </Tippy>
                  </div>
                )}
              </div>
              <div className={cx("nonDisplayMobile")}>
                <Menu items={USER_ITEMS}>
                  <Image src="/" alt="avatar" avatar />
                </Menu>
              </div>
            </>
          ) : (
            <div
              style={{
                position: "relative",
                right: "-65px",
              }}
            >
              <Button
                to="/dang-ki"
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
                to="/dang-nhap"
                text
                style={{
                  padding: "3px 20px",
                  color: "white",
                  fontSize: "1.7rem",
                }}
                className={cx("mobile")}
              >
                Log In
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className={cx("nonDisplayMobile")}>
        {visibleHeaderIndexing && (
          <div className={cx("header-indexing")}>{renderItem()}</div>
        )}
      </div>
    </header>
  );
}

export default Header;
