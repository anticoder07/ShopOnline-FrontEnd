import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import styles from "./InformationProduct.module.scss";
import Image from "../../../components/Image";
import Button from "../../../components/Button";
import Quantity from "../../../components/Quantity";
import Option from "./Option";
import Sold from "./Sold";
import Card from "../../../components/Card";
import { useLocation } from "react-router-dom";
import { getProductId } from "../../../services/TakeProductService";
import { addProductToBasket } from "../../../services/BasketService";
import NotificationCheck from "../Notification/NotificationCheck";

const cx = classNames.bind(styles);

function InformationProduct() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("i");
  const [inforProduct, setInfProduct] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [contentAttributes, setContentAttributes] = useState([]);
  const [cardItemsRecomment, setCardItemsRecomment] = useState([]);
  const [quantityIndex, setQuantityIndex] = useState(0);
  const [type, setType] = useState(null);

  const [notificationAddBasket, setNotificationAddBasket] = useState({
    active: false,
    emotion: false,
    content: "Có lỗi đã xảy ra",
  });

  const handleQuantityIndexChange = (newIndex) => {
    setQuantityIndex(newIndex);
  };

  useEffect(() => {
    try {
      const fetchApi = async () => {
        const response = await getProductId(id);
        setInfProduct(response);
        if (response && response.productTypeList) {
          setAttributes(response.productTypeList);
        }
      };

      fetchApi();
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  const handleAddProductToBasket = () => {
    if (quantityIndex === 0) {
      setNotificationAddBasket({
        active: true,
        emotion: false,
        content: "Vui lòng chọn số lượng sản phẩm",
      });
    } else {
      if (attributes.length === 0) {
        try {
          const fetchApi = async () => {
            const res = await addProductToBasket(id, quantityIndex, null);
            setNotificationAddBasket({
              active: true,
              emotion: true,
              content: "Sản phẩm được thêm vào giỏ hàng",
            });
          };

          fetchApi();
        } catch (err) {
          console.error(err);
        }
      } else {
        if (type === null) {
          setNotificationAddBasket({
            active: true,
            emotion: false,
            content: "Vui lòng chọn kiểu sản phẩm",
          });
        } else {
          try {
            const fetchApi = async () => {
              const res = await addProductToBasket(id, quantityIndex, type);
              setNotificationAddBasket({
                active: true,
                emotion: true,
                content: "Sản phẩm được thêm vào giỏ hàng",
              });
            };

            fetchApi();
          } catch (err) {
            console.error(err);
          }
        }
      }
    }
  };

  useEffect(() => {
    let timeout;
    if (notificationAddBasket) {
      timeout = setTimeout(() => {
        setNotificationAddBasket({
          active: false,
          emotion: false,
          content: "Có lỗi đã xảy ra",
        });
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [notificationAddBasket]);

  const CARD_ITEMS = [];

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("information-product")}>
          <div className={cx("picture")}>
            <Image
              src={inforProduct.picture}
              alt={inforProduct.name}
              pictureProduct
            />
          </div>
          <div className={cx("information")}>
            <div className={cx("title")}>{inforProduct.name}</div>
            <Sold
              head={"Đã bán"}
              center={inforProduct.sold}
              tail={"sản phẩm"}
            />
            <div className={cx("total")}>{inforProduct.priceMin}</div>
            {attributes.map((attributeItem) => {
              return (
                <Option
                  key={attributeItem.id}
                  title={attributeItem.type}
                  items={attributeItem.productTypeItemDtoList.map((item) => {
                    const optionItem = { title: item.content };
                    if (item.picture !== null) {
                      optionItem.icon = (
                        <Image src={item.picture} squareTypeOption />
                      );
                    }
                    optionItem.id = item.id;
                    return optionItem;
                  })}
                  returnValue={(item, value) => {
                    setType(item.item.id);
                  }}
                />
              );
            })}

            <div className={cx("quantity")}>
              <h3 className={cx("title-text")}>Số lượng</h3>
              <Quantity
                max={10}
                onIndexChange={handleQuantityIndexChange}
                className={cx("quantity-item")}
              />
              <Sold
                head={"Có sẵn"}
                center={inforProduct.quantity}
                tail={"sản phẩm"}
              />
            </div>
            <div className={cx("action")}>
              <Button
                leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                className={cx("buttonAddCart")}
                onClick={handleAddProductToBasket}
              >
                thêm vào giỏ hàng
              </Button>
              <Button
                style={{ padding: "13px 40px", marginLeft: "15px" }}
                primary
              >
                Mua Ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("description")}>
        <div className={cx("description-title")}>Chi Tiết Sản Phẩm</div>
        <div className={cx("description-content")}>
          {inforProduct.description}
        </div>
      </div>
      <div className={cx("title")} style={{ color: "#333", marginTop: "10px" }}>
        CÁC SẢN PHẨM KHÁC CỦA SHOP
      </div>
      <div className={cx("recommend")}>
        {CARD_ITEMS.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
      <div className={cx("notification")}>
        {notificationAddBasket.active && (
          <NotificationCheck
            check={notificationAddBasket.emotion}
            value={notificationAddBasket.content}
          />
        )}
      </div>
    </>
  );
}

export default InformationProduct;
