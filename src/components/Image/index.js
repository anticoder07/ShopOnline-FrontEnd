import React, { forwardRef, useEffect, useState } from "react";
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
      avatarBig = false,
      squareSmall = false,
      squareLarge = false,
      sideBarPost = false,
      card = false,
      pictureProduct = false,
      squareTypeOption = false,
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
      avatarBig,
      squareSmall,
      squareLarge,
      sideBarPost,
      card,
      pictureProduct,
      squareTypeOption,
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
