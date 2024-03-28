import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faCarSide,
  faCartShopping,
  faCheck,
  faPeopleCarryBox,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./StateProduct.module.scss";

const cx = classNames.bind(styles);

function StateProduct({ visible, value }) {
  const [visibleChoose, setVisibleChoose] = useState(visible);

  const stateBillMap = {
    PENDING_APPROVAL: {
      content: "Đang xét duyệt",
      icon: <FontAwesomeIcon icon={faFileLines} />,
    },
    PREPARING_FOR_DELIVERY: {
      content: "Chuẩn bị giao hàng",
      icon: <FontAwesomeIcon icon={faCartShopping} />,
    },
    DELIVERING: {
      content: "Đang giao hàng",
      icon: <FontAwesomeIcon icon={faCarSide} />,
    },
    DELIVERED: {
      content: "Đã giao hàng",
      icon: <FontAwesomeIcon icon={faPeopleCarryBox} />,
    },
    RECEIVED: {
      content: "Đã nhận hàng",
      icon: <FontAwesomeIcon icon={faCheck} />,
    },
  };

  useEffect(() => {
    setVisibleChoose(visible);
  }, [visible]);

  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Cập nhật thông tin</h1>
      <div className={cx("button-wrapper")}>
        {Object.keys(stateBillMap).map((stateKey, index) => (
          <Tippy
            key={index}
            content={stateBillMap[stateKey].content}
            className={cx("tippy-content")}
          >
            <button
              className={cx("circle-btn", {
                "btn-red": stateKey === visibleChoose,
              })}
              onClick={() => {
                setVisibleChoose(stateKey);
              }}
            >
              {stateBillMap[stateKey].icon}
            </button>
          </Tippy>
        ))}
      </div>
      <button
        className={cx("save-btn")}
        onClick={() => {
          value(visibleChoose);
        }}
      >
        Xác Nhận
      </button>
    </div>
  );
}

export default StateProduct;
