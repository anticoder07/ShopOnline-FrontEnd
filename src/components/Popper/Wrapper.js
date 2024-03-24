import React from "react";
import classNames from "classnames/bind";

import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);

function Wrapper({ children, className, customWrapper = true }) {
  const combinedClassName = cx({
    wrapper: customWrapper,
    [className]: className && !customWrapper,
  });

  return <div className={combinedClassName}>{children}</div>;
}

export default Wrapper;
