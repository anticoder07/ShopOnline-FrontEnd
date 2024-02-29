import React, { forwardRef, useState } from "react";
import classNames from "classnames/bind";

import images from "../../assets/images";
import styles from "./Image.module.scss";

const cx = classNames.bind(styles);

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallBack: customFallBack = images.noImage,
      avatar = false,
      squareSmall = false,
      sideBarPost = false,
      card = false,
      ...props
    },
    ref
  ) => {
    const [fallBack, setFallBack] = useState("");

    const handlerError = () => {
      setFallBack(customFallBack);
    };

    const classes = cx({
      [className]: className,
      avatar,
      squareSmall,
      sideBarPost,
      card,
    });

    return (
      <img
        ref={ref}
        src={fallBack || src}
        alt={alt}
        className={classes}
        {...props}
        onError={handlerError}
      />
    );
  }
);

export default Image;
