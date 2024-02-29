import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./SideBar.module.scss";
import MenuItem from "./Menu/MenuItem";
import Image from "../../../components/Image";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

function SideBar() {
  const SIDEBAR_ITEMS = [
    {
      icon: <Image src={images.iphone} alt="avatar" squareSmall />,
      title: "Điện thoại - Phụ kiện ",
      to: "",
    },
    {
      icon: <Image src={images.posterAang} alt="avatar" squareSmall />,
      title: "Máy tính - Laptop",
      to: "",
    },
    {
      icon: <Image src={images.iphone} alt="avatar" squareSmall />,
      title: "Mỹ phẩm chính hãng",
      to: "",
    },
    {
      icon: <Image src={images.iphone} alt="avatar" squareSmall />,
      title: "Thời trang nam nữ",
      to: "",
    },
    {
      icon: <Image src={images.iphone} alt="avatar" squareSmall />,
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
    <aside className={cx("wrapper")}>
      <div className={cx("logo")}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={cx("sideBar-items")}>{renderItem()}</div>
      {/* <Image src={images.posterQC} alt="avatar" sideBarPost /> */}
    </aside>
  );
}

export default SideBar;
