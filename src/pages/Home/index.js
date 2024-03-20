import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import { HomePageService } from "../../services/HomePageService";

const cx = classNames.bind(styles);

function Home() {
  const [page, setPage] = useState(0);
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await HomePageService();
      if (result === null) setCardItems([]);
      setCardItems(result);
    };

    fetchApi();
  }, []);

  const totalPages = 10;

  const handlePageChange = (p) => {
    setPage(p);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {cardItems.length > 0 &&
          cardItems.map((item) => <Card key={item.id} data={item} />)}
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
