import React from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
  return (
    <HeadlessTippy>
      <div className={cx("wrapper")}>
        <div className={cx("search-wrapper")}>
          <input
            type="text"
            className={cx("search-input")}
            placeholder="Tìm Kiếm"
            spellCheck={false}
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
