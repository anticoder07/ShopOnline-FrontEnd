import React from "react";
import classNames from "classnames/bind";

import styles from "./ProfileItem.module.scss";

const cx = classNames.bind(styles);

function ProfileItem({ title, value }) {
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>{title}</h2>
      <div className={cx("value")}>{value}</div>
    </div>
  );
}

export default ProfileItem;
