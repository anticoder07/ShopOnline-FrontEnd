import React, { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Option.module.scss";
import Button from "../../../../components/Button";

const cx = classNames.bind(styles);

function Option({
  title,
  items = [],
  deleteBtn = false,
  onDelete,
  returnValue,
}) {
  const handleDelete = (index) => {
    if (onDelete) {
      onDelete(index);
    }
  };

  const renderItem = () => {
    return items.map((item, index) => {
      return (
        <div key={index} className={cx("item")}>
          {deleteBtn && (
            <span
              className={cx("delete-btn")}
              onClick={() => handleDelete(index)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          )}
          <Button
            className={cx("button")}
            leftIcon={item.icon}
            pitureType
            onClick={() => {
              returnValue({ index, item });
            }}
          >
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
