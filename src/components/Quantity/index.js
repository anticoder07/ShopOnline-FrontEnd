import React, { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Quantity.module.scss";

const cx = classNames.bind(styles);

function Quantity({ min = 0, max, onIndexChange, className }) {
  const [index, setIndex] = useState(0);

  const handleIndexChange = (newIndex) => {
    if (newIndex < min || newIndex > max) return;
    setIndex(newIndex);
    if (onIndexChange) {
      onIndexChange(newIndex);
    }
  };

  const classes = cx("wrapper", {
    [className]: className,
  });

  return (
    <div className={classes}>
      <span
        className={cx("minus")}
        onClick={() => handleIndexChange(index - 1)}
      >
        <FontAwesomeIcon icon={faMinus} />
      </span>
      <input type="text" value={index} className={cx("number")} readOnly />
      <span className={cx("plus")} onClick={() => handleIndexChange(index + 1)}>
        <FontAwesomeIcon icon={faPlus} />
      </span>
    </div>
  );
}

export default Quantity;
