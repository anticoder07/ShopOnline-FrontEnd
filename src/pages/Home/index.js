import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import { HomePageService } from "../../services/HomePageService";

const cx = classNames.bind(styles);

function Home() {
  const [cardItems, setCardItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const totalProductInOnePageDisplay = 18;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(totalProductInOnePageDisplay);
  let url = window.location.href.split("http://localhost:3001/")[1];

  useEffect(() => {
    const newStartIndex = (currentPage - 1) * totalProductInOnePageDisplay;
    setStartIndex(newStartIndex);
    setEndIndex(
      Math.min(newStartIndex + totalProductInOnePageDisplay, cardItems.length)
    );
  }, [currentPage, cardItems.length, totalProductInOnePageDisplay]);

  useEffect(() => {
    const option = url === "" ? "all" : url;

    const fetchApi = async () => {
      try {
        const result = await HomePageService(option);
        if (result.length === 0) {
          setCardItems([]);
          setTotalPages(0);
          setEndIndex(0);
        } else {
          setCardItems(result);
          setTotalPages(
            Math.ceil(result.length / totalProductInOnePageDisplay)
          );
          setEndIndex(Math.min(totalProductInOnePageDisplay, result.length));
        }
        setCardItems(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchApi();
  }, [url]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {cardItems.slice(startIndex, endIndex).map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      {cardItems.length > 0 && (
        <Pagination
          totalPages={totalPages}
          getCurrentPage={(indexPage) => {
            setCurrentPage(indexPage);
          }}
          className={cx("pagination")}
        />
      )}
    </div>
  );
}

export default Home;
