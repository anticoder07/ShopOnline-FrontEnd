import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import React from "react";

import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, center = false }) {
  const classes = cx("menu-item", {
    center,
  });

  return (
    <NavLink className={(nav) => cx(classes, { active: nav.isActive })} to={to}>
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

export default MenuItem;
