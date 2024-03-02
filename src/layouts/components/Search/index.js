import React from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search({ placeholder = "Tìm Kiếm", gray = false }) {
  const classes = cx("wrapper", {
    gray,
  });

  return (
    <HeadlessTippy>
      <div className={classes}>
        <div className={cx("search-wrapper")}>
          <input
            type="text"
            className={cx("search-input")}
            placeholder={placeholder}
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
