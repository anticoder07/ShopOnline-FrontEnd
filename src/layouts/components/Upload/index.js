import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Upload.module.scss";
import images from "../../../assets/images";
import Button from "../../../components/Button";
import OptionsPopper from "./OptionsPopper";

const cx = classNames.bind(styles);

function Upload() {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("picture-name")}>
        <div className={cx("picture")}>
          {image ? (
            <img src={image} alt="Preview" className={cx("preview")} />
          ) : (
            <img src={images.noImage} alt="Preview" className={cx("preview")} />
          )}
          <label htmlFor="fileUploadMain" className={cx("custom-file-upload")}>
            <span className={cx("take-file-btn")}>Chọn ảnh</span>
          </label>
          <input
            type="file"
            id="fileUploadMain"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <div className={cx("name")}>
          <input
            type="text"
            placeholder="Tên sản phẩm"
            className={cx("input-name")}
          />
          <div className={cx("type")}>
            <select name="type" id="typeSelect" className={cx("type-option")}>
              <option value="DTPK">Điện thoại phụ kiện</option>
              <option value="MTLT">Máy tính laptop</option>
              <option value="MPCH">Mĩ phẩm chính hãng</option>
              <option value="TTNN">Thời trang nam nữ</option>
              <option value="other">Sản phẩm khác</option>
            </select>
          </div>
          <div className={cx("total")}>
            <label htmlFor="totalInput" className={cx("titleTotal")}>
              Giá tiền
            </label>
            <input
              type="text"
              id="totalInput"
              name="totalInput"
              className={cx("totalInput")}
            />
            <span className={cx("titleTotal")}>VND</span>
          </div>
        </div>
      </div>

      <div className={cx("option-popper")}>
        <OptionsPopper
          takeValue={(value) => {
            console.log(value);
          }}
        />
      </div>

      <div className={cx("description")}>
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>
          Chi tiết sản phẩm
        </h2>
        <textarea
          rows={15}
          cols={65}
          style={{ fontSize: "18px" }}
          onChange={(e) => {}}
        ></textarea>
      </div>

      <Button primary style={{ fontSize: "20px", marginTop: "20px" }}>
        Thêm sản phẩm
      </Button>
    </div>
  );
}

export default Upload;
