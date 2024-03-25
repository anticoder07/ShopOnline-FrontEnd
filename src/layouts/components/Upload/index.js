import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { useLocation } from "react-router";

import styles from "./Upload.module.scss";
import images from "../../../assets/images";
import Button from "../../../components/Button";
import OptionsPopper from "./OptionsPopper";
import {
  addProduct,
  changeProduct,
} from "../../../services/ChangeProductService";
import NotificationCheck from "../Notification/NotificationCheck";
import { getProductId } from "../../../services/TakeProductService";

const cx = classNames.bind(styles);

function Upload() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isChange = location.pathname === "/chinh-sua-san-pham";
  const id = queryParams.get("i");

  const [inforProduct, setInfProduct] = useState([]);
  const [attributes, setAttributes] = useState([]);

  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [productType, setProductType] = useState([]);
  const [description, setDescription] = useState("");

  const [notificationAddBasket, setNotificationAddBasket] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  const handleSave = () => {
    const attribute = productType.map((item) => {
      return {
        id: 1,
        type: item.value.typeName,
        productTypeItemDtoList: item.value.typeList.map((pti) => {
          return {
            id: 11,
            picture: pti.icon.props.src,
            price: pti.total,
            quantity: pti.quantity,
            sold: 0,
            content: pti.title,
          };
        }),
      };
    });

    try {
      const fetchApi = async () => {
        if (isChange) {
          const res = await changeProduct({
            id: Number(id),
            picture: image,
            name: productName,
            sold: 0,
            quantity: quantity,
            type: type,
            description: description,
            state: true,
            priceMin: price,
            productTypeList: attribute,
          });
        } else {
          const res = await addProduct({
            id: 1,
            picture: image,
            name: productName,
            sold: 0,
            quantity: quantity,
            type: type,
            description: description,
            state: true,
            priceMin: price,
            productTypeList: attribute,
          });
        }

        setNotificationAddBasket(true);
      };

      fetchApi();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setNotificationAddBasket(false);
    }, 1500);
  }, [notificationAddBasket]);

  useEffect(() => {
    if (isChange) {
      try {
        const fetchApi = async () => {
          const response = await getProductId(id);
          console.log(response.productTypeList);

          setInfProduct(response);
          setImage(response.picture);
          setQuantity(response.quantity);
          setProductName(response.name);
          setPrice(response.priceMin);
          setDescription(response.description);
          setType(response.type);

          // response.productTypeList.map(() => {
          //   setProductType((prev) => {
          //     [...prev + {

          //     }]
          //   })
          // });

          if (response && response.productTypeList) {
            setAttributes(response.productTypeList);
          }
        };

        fetchApi();
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

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
            value={productName}
            type="text"
            placeholder="Tên sản phẩm"
            className={cx("input-name")}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <div className={cx("type")}>
            <select
              name="type"
              id="typeSelect"
              className={cx("type-option")}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value="DTPK">Điện thoại phụ kiện</option>
              <option value="MTLT">Máy tính laptop</option>
              <option value="MPCH">Mĩ phẩm chính hãng</option>
              <option value="TTNN">Thời trang nam nữ</option>
              <option value="other">Sản phẩm khác</option>
            </select>
          </div>
          <div className={cx("total")}>
            <label htmlFor="totalInput" className={cx("titleQuantity")}>
              Có
            </label>
            <input
              value={quantity}
              type="text"
              id="totalInput"
              name="totalInput"
              className={cx("totalInput")}
              onChange={(e) => {
                setQuantity(Number(e.target.value));
              }}
            />
            <span className={cx("titleTotal")}>Sản Phẩm</span>
          </div>
          <div className={cx("total")}>
            <label htmlFor="totalInput" className={cx("titleTotal")}>
              Giá tiền
            </label>
            <input
              value={price}
              type="text"
              name="totalInput"
              className={cx("totalInput")}
              onChange={(e) => {
                setPrice(Number(e.target.value));
              }}
            />
            <span className={cx("titleTotal")}>VND</span>
          </div>
        </div>
      </div>

      <div className={cx("option-popper")}>
        <OptionsPopper
          takeValue={(value) => {
            setProductType(value);
          }}
        />
      </div>

      <div className={cx("description")}>
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>
          Chi tiết sản phẩm
        </h2>
        <textarea
          value={description}
          rows={15}
          cols={65}
          style={{ fontSize: "18px" }}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
      </div>

      <Button
        primary
        style={{ fontSize: "20px", marginTop: "20px" }}
        onClick={handleSave}
      >
        {(!isChange && "Thêm sản phẩm") || "Lưu thay đổi"}
      </Button>
      <div className={cx("notification")}>
        {notificationAddBasket && (
          <NotificationCheck value={"Sản phẩm được thêm vào giỏ hàng"} />
        )}
      </div>
    </div>
  );
}

export default Upload;
