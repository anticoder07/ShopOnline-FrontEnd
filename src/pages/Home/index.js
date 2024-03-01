import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Card from "../../components/Card";
import images from "../../assets/images";
import Pagination from "../../components/Pagination";

const cx = classNames.bind(styles);

function Home() {
  const CARD_ITEMS = [
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
    {
      logo: images.iphone,
      title: "Sản phẩm này dởm đừng mua",
      promotion: "Đang bán chạy",
      price: "10.000",
      sold: "10",
      to: "/hello",
    },
  ];

  const totalPages = 10;

  const handlePageChange = (page) => {
    const currentPath = window.location.pathname;
    window.location.href = `http://localhost:3000${currentPath}?page=${page}`;
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {CARD_ITEMS.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className={cx("pagination")}
      />
    </div>
  );
}

export default Home;
