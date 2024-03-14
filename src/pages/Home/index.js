import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import { cardProductService } from "../../services/CardProductService";

const cx = classNames.bind(styles);

function Home() {
  const [page, setPage] = useState(0);
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await cardProductService(page);
      console.log(result);
      setCardItems(result);
    };

    fetchApi();
  }, [page]);

  const totalPages = 10;

  const handlePageChange = (p) => {
    // const currentPath = window.location.pathname;
    // window.location.href = `http://localhost:3001${currentPath}?page=${p}`;
    setPage(p);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {cardItems.map((item, index) => (
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
