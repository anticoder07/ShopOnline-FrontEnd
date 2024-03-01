import React from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Card from "../../components/Card";
import images from "../../assets/images";

const cx = classNames.bind(styles);

function Home() {
  const CARD_ITEMS = [
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
    },
  ];
  return (
    <div className={cx("wrapper")}>
      {CARD_ITEMS.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

export default Home;
