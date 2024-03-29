import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./ConfigOption.module.scss";
import Button from "../../../../components/Button";
import Image from "../../../../components/Image";
import Option from "../../Product/Option";

const cx = classNames.bind(styles);

function ConfigOption({ onTypeListChange, valueDefault, typeDefault }) {
  const [image, setImage] = useState(null);
  const [typeName, setTypeName] = useState("");
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [typeList, setTypeList] = useState([]);
  const [indexChange, setIndexChange] = useState(-1);

  useEffect(() => {
    setTypeName(typeDefault);
    setTypeList((_prevTypeList) => {
      const updatedList = [];
      for (let configOptionItem of valueDefault) {
        const iconLink = configOptionItem.picture;
        const title = configOptionItem.content;
        const quantity = configOptionItem.quantity;
        const total = configOptionItem.price;
        const icon = <Image src={iconLink} alt={title} squareTypeOption />;
        updatedList.push({
          icon: icon,
          title: title,
          quantity: quantity,
          total: total,
        });
      }
      return updatedList;
    });
  }, [valueDefault]);

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

  const addType = () => {
    if (indexChange !== -1) {
      const updatedTypeList = typeList.map((item, i) => {
        if (i === indexChange) {
          let type = {
            title: title,
            quantity: quantity,
            total: total,
            icon: <Image src={image} squareTypeOption />,
          };
          if (image === null) {
            type.icon = null;
          }
          return type;
        } else return item;
      });
      setTypeList(updatedTypeList);
      setIndexChange(-1);
      setQuantity(0);
      setTotal(0);
      setImage(null);
      setTitle("");
      return;
    }
    if (title === "" || typeName === "") return;
    let type = {
      title: title,
      quantity: quantity,
      total: total,
      icon: <Image src={image} squareTypeOption />,
    };
    if (image === null) {
      type.icon = null;
    }
    setTypeList([...typeList, type]);
    setImage(null);
    setTitle("");
    setTotal(0);
    setQuantity(0);
    setTotal(0);
  };

  const handleDeleteOption = (index) => {
    const updatedTypeList = typeList.filter((_item, i) => i !== index);
    setTypeList(updatedTypeList);
  };

  const handleFileRemove = () => {
    setImage(null);
  };

  const returnValue = (value) => {
    if (value.item.icon !== null && value.item.icon !== undefined)
      setImage(value.item.icon.props.src);
    else setImage(null);
    setTitle(value.item.title);
    setQuantity(value.item.quantity);
    setTotal(value.item.total);
    setIndexChange(value.index);
  };

  useEffect(() => {
    onTypeListChange({ typeName, typeList });
  }, [typeList]);

  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <input
          value={typeName}
          placeholder="Tên kiểu"
          style={{ width: "80px", height: "30px" }}
          onChange={(e) => {
            setTypeName(e.target.value);
          }}
        />
        <label
          htmlFor="fileUploadOption"
          className={cx("take-picture-option-label")}
        >
          <span className={cx("take-picture-option")}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <input
            type="file"
            id="fileUploadOption"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>
        {image && (
          <div className={cx("preview-option-wrapper")}>
            <img src={image} alt="Preview" className={cx("preview-option")} />
            <span
              className={cx("preview-option-close")}
              onClick={handleFileRemove}
            >
              xóa
            </span>
          </div>
        )}
        <input
          type="text"
          id="optionInput"
          name="optionInput"
          className={cx("option-input")}
          placeholder="Nhập tùy chọn"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="optionInput"
          className={cx("option-input")}
          placeholder="Giá kiểu"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
        <input
          type="text"
          name="optionInput"
          className={cx("option-input")}
          placeholder="Số lượng kiểu"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Button className={cx("save-btn")} onClick={addType}>
          Lưu
        </Button>
      </div>
      <div className={cx("option-wrapper")}>
        <Option
          title={typeName}
          items={typeList}
          onDelete={handleDeleteOption}
          returnValue={returnValue}
          deleteBtn
        />
      </div>
    </div>
  );
}

export default ConfigOption;
