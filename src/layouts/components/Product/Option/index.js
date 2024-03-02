import React from "react";
import classNames from "classnames/bind";

import styles from "./Option.module.scss";
import Button from "../../../../components/Button";

const cx = classNames.bind(styles);

function Option({ title, items = [] }) {
  const renderItem = () => {
    return items.map((item, index) => {
      return (
        <div key={index} className={cx("item")}>
          <Button className={cx("button")} leftIcon={item.icon} pitureType>
            {item.title}
          </Button>
        </div>
      );
    });
  };

  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>{title}</h3>
      <div className={cx("items-wrapper")}>{renderItem()}</div>
    </div>
  );
}

export default Option;
