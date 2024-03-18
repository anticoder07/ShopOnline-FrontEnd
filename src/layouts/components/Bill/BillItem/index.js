import React from "react";
import classNames from "classnames/bind";

import styles from "./Bill.module.scss";
import Image from "../../../../components/Image";
import { useNavigate } from "react-router";

const cx = classNames.bind(styles);

function BasketItem({
  data,
  checkBtn = false,
  check,
  allCheck,
  handleChecked,
  deteteBasketItem,
  deleteButton = true,
}) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/by/id?i=${id}`);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("product")}>
        {checkBtn ? (
          <input
            type="checkbox"
            className={cx("check")}
            checked={allCheck || check}
            onChange={(event) => {
              if (event.target.checked) {
                handleChecked(data.total * data.quantity);
              } else {
                handleChecked(-data.total * data.quantity);
              }
            }}
          />
        ) : (
          <></>
        )}
        <div className={cx("container")} onClick={() => handleClick(data.id)}>
          <div className={cx("picture")}>
            <Image src={data.picture} alt="product" squareLarge />
          </div>
          <div className={cx("information")}>
            <div className={cx("title")}>{data.name}</div>
            <div className={cx("type")}>{`Phân loại hàng: ${data.type}`}</div>
            <div className={cx("quantity")}>{data.quantity}</div>
          </div>
        </div>
      </div>
      <div className={cx("container")}>
        <div className={cx("total")}>{`đ ${data.total}`}</div>
        {deleteButton && (
          <div
            className={cx("delete")}
            onClick={() => deteteBasketItem(`${data.id}-${data.typeId}`)}
          >
            Xóa
          </div>
        )}
      </div>
    </div>
  );
}

export default BasketItem;
