import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./SearchItem.module.scss";
import Image from "../../Image";

const cx = classNames.bind(styles);

function SearchItem({ data }) {
  return (
    <Link className={cx("wrapper")} to={`/by/id?i=${data.id}`}>
      <div className={cx("picture")}>
        {data.picture && (
          <Image src={data.picture} alt={data.name} squareSmall />
        )}
      </div>
      <div className={cx("title")}>{data.name}</div>
    </Link>
  );
}

export default SearchItem;
