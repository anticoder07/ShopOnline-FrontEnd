import React from "react";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";

import styles from "./Menu.module.scss";
import { Wrapper as PopperWraper } from "../index";
import MenuItem from "./MenuItem/MenuItem";

const cx = classNames.bind(styles);

function Menu({ items = [], visible = false, placement, className, children }) {
  const renderItem = () => {
    return items.map((item, index) => (
      <MenuItem key={index} data={item} onClick={undefined} />
    ));
  };

  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <PopperWraper className={cx("wrapper-menu")}>
        {items.length > 0 && renderItem()}
      </PopperWraper>
    </div>
  );

  let Comp = HeadlessTippy;
  // @ts-ignore
  if (items.length === 0) Comp = "div";

  const classes = cx("wrapper-menu", {
    [className]: className,
    visible,
  });

  return (
    <Comp
      interactive
      delay={[0, 500]}
      render={renderResult}
      className={classes}
      placement={placement}
    >
      {children}
    </Comp>
  );
}

export default Menu;
