import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import React from "react";

import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
  return (
    <NavLink
      className={(nav) => cx("menu-item", { active: nav.isActive })}
      to={to}
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

export default MenuItem;
