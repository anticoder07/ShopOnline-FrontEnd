import React, { forwardRef } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    {
      to,
      href,
      navLink,
      div = false,
      disabled = false,
      text = false,
      white = false,
      small = false,
      large = false,
      defaultHover = false,
      primary = false,
      whiteBasic = false,
      pitureType = false,
      notificationDot,
      notificationNumber,
      children,
      leftIcon,
      rightIcon,
      onClick,
      className,
      ...passProps
    },
    ref
  ) => {
    let Component = "button";

    const props = {
      onClick,
      ...passProps,
    };

    if (disabled) {
      Object.keys(props).forEach((key) => {
        if (key.startsWith("on") && typeof props[key] === "function") {
          delete props[key];
        }
      });
    }

    if (to) {
      props["to"] = to;
      Component = Link;
    } else if (href) {
      props["href"] = href;
      Component = "a";
    } else if (div) {
      Component = "div";
    }

    const classes = cx("wrapper", {
      [className]: className,
      whiteBasic,
      pitureType,
      primary,
      defaultHover,
      disabled,
      text,
      white,
      small,
      large,
    });

    return (
      <Component className={classes} {...props} ref={ref}>
        {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
        <span className={cx("title")}>{children}</span>
        {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        {notificationDot && (
          <span className={cx("notificationDot", "notification")}>
            {notificationDot}
          </span>
        )}
        {notificationNumber && (
          <span className={cx("notificationNumber", "notification")}>
            {notificationNumber}
          </span>
        )}
      </Component>
    );
  }
);

export default Button;
