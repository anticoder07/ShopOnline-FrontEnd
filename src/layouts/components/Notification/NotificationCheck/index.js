import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import style from "./Notification.module.scss";

const cx = classNames.bind(style);

function NotificationCheck({ check = true, value }) {
  return (
    <div className={cx("wrapper")}>
      {check ? (
        <div className={cx("icon", "icon-check")}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
      ) : (
        <div className={cx("icon", "icon-wrong")}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
      )}
      <div className={cx("value")}>{value}</div>
    </div>
  );
}

export default NotificationCheck;
