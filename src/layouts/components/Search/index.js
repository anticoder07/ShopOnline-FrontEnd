import React, { useEffect, useRef, useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss";
import { Wrapper } from "../../../components/Popper/index";
import SearchItem from "../../../components/Popper/SearchItem";
import useDebounce from "../../../hooks/useDebounce";
import {
  searchAllProducts,
  searchAllProductsBasket,
} from "../../../services/SearchService";
import { seeBasket } from "../../../services/BasketService";

const cx = classNames.bind(styles);

function Search({
  placeholder = "Tìm Kiếm",
  gray = false,
  customSearchNotRender = false,
  activityNoValue,
  activity,
  handleSearchValue,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  const debounced = useDebounce(searchValue, 500);

  const classes = cx("wrapper", {
    gray,
  });

  useEffect(() => {
    if (!debounced.trim() && !customSearchNotRender) {
      return;
    }

    try {
      if (customSearchNotRender) {
        const fetchApi = async () => {
          let res = [];
          if (!debounced.trim()) {
            res = await activityNoValue();
          } else {
            res = await activity(debounced);
          }
          handleSearchValue(res);
        };
        fetchApi();
      } else {
        const fetchApi = async () => {
          const res = await searchAllProducts(debounced);
          setSearchResult(res);
        };
        fetchApi();
      }
    } catch (e) {
      console.log(e);
    }
  }, [debounced]);

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0 && !customSearchNotRender}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <Wrapper
            children={searchResult.slice(0, 10).map((result) => (
              <SearchItem data={result} />
            ))}
            className={cx("wrapper-search")}
            customWrapper={false}
          />
        </div>
      )}
      onClickOutside={() => {
        setShowResult(false);
      }}
    >
      <div className={classes}>
        <div className={cx("search-wrapper")}>
          <input
            type="text"
            className={cx("search-input")}
            placeholder={placeholder}
            spellCheck={false}
            value={searchValue}
            onChange={(e) => {
              let value = e.target.value;
              if (!value.startsWith(" ")) {
                setSearchValue(value);
              }
            }}
            onFocus={() => {
              setShowResult(true);
            }}
          />
        </div>

        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
