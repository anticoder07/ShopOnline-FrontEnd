import React from "react";
import classNames from "classnames/bind";

import styles from "./MenuItem.module.scss";
import Button from "../../../Button";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate,
    color: data.isActive ? "greenyellow" : "white",
  });

  return (
    <Button
      className={classes}
      to={data.to}
      leftIcon={data.icon}
      onClick={onClick}
      defaultHover
      style={{ padding: "10px", width: "150px" }}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
