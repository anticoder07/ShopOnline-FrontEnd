import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import React from "react";

import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, center = false, onClick, ...passProps }) {
  let Component = "div";

  const classes = cx("menu-item", {
    center,
  });

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    Component = NavLink;
    props["to"] = to;
  }

  return (
    <Component
      className={(nav) => {
        const combinedClasses = cx(classes);
        return nav.isActive
          ? cx(combinedClasses, { active: true })
          : combinedClasses;
      }}
      {...props}
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("title")}>{title}</span>
    </Component>
  );
}

export default MenuItem;
