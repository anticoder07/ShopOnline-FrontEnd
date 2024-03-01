import React, { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import styles from "./InformationProduct.module.scss";
import Image from "../../../components/Image";
import images from "../../../assets/images";
import Button from "../../../components/Button";
import Quantity from "../../../components/Quantity";

const cx = classNames.bind(styles);

function InformationProduct() {
  const [quantityIndex, setQuantityIndex] = useState(0);

  const handleQuantityIndexChange = (newIndex) => {
    setQuantityIndex(newIndex);
  };

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("information-product")}>
          <div className={cx("picture")}>
            <Image src={images.iphone} alt="product name" pictureProduct />
          </div>
          <div className={cx("information")}>
            <div className={cx("title")}>
              Điện thoại Apple iPhone 15 Pro Max 256GB
            </div>
            <span className={cx("sold")}>
              Đã bán
              <span className={cx("sold-number")}> 1000 </span>
              sản phẩm
            </span>
            <div className={cx("total")}>₫31.990.000 - ₫32.990.000</div>
            <div className={cx("type")}>
              <h3 className={cx("title-text")}>Kiểu</h3>
              <Button className={cx("buttonTypeProduct")}>256GB</Button>
            </div>
            <div className={cx("quantity")}>
              <h3 className={cx("title-text")}>Số Lượng</h3>
              <Quantity
                max={10}
                onIndexChange={handleQuantityIndexChange}
                className={cx("quantity-comp")}
              />
              <span className={cx("numberOfProduct")}>
                Có sẵn
                <span className={cx("sold-number")}>1000</span>
                sản phẩm
              </span>
            </div>
            <div className={cx("action")}>
              <Button
                leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                className={cx("buttonAddCart")}
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
        Vaseline tin rằng bất cứ ai cũng xứng đáng sở hữu một làn da khỏe mạnh.
        Với hơn 150 năm kinh nghiệm nghiên cứu, Vaseline giới thiệu Tinh chất
        Chống nắng SPF 50+ PA++++, giải pháp hoàn hảo để bảo vệ gấp 50 lần'
        trước 5 tác nhân có hại cho da dù ở trong nhà hay ở ngoài trời: 1. Bảo
        vệ trước tia UVA: PA++++, với gấp 50x khoáng chất chống nắng giúp ngăn
        ngừa sự xỉn màu và hư tổn do tia UVA 2.Bảo vệ trước tia UVB: SPF50+ độ
        quang phổ rộng giúp bảo vệ trước sự gia tăng hắc sắc tố gây nên nám và
        sự không đều màu do tia UVB. 3. Bảo vệ khỏi khói bụi ô nhiễm: Công thức
        PPF - tạo thành lớp màng bảo vệ da trước tác hại từ môi trường và bụi
        PM2.5. 4. Bảo vệ trước ánh sáng xanh: Gấp 10X Niacinamide^ bảo vệ da
        trước tác hại đến từ ánh sáng xanh** và giúp da sáng hơn gấp 2 lần! 5.
        Bảo vệ trước môi trường máy điều hòa: Vaseline Jelly giúp cấp và khóa ẩm
        sâu trừ bên trong. Cùng với hỗn hợp Vitamin gồm Niacinamide, Vitamin C&E
        giúp da sáng rạng rỡ hơn gấp 2 lần* Công thức serum thấm nhanh, không
        gây cảm giác nhờn dính. Đã kiểm nghiệm trên da. Hướng dẫn sử dụng: Để
        đạt hiệu quả tối đa, làm sạch da trước khi sử dụng để da thông thoáng,
        dễ hấp thụ dưỡng chất. Nên dùng 2 lần 1 ngày. Thoa đều sản phẩm lên tay,
        chân, toàn thân, tránh để sản phẩm dính lên quần áo. Xuất xứ: Thái Lan
        HSD: 2 năm kể từ NSX Bao bì thay đổi theo từng đợt nhập hàng.
      </div>
    </>
  );
}

export default InformationProduct;
