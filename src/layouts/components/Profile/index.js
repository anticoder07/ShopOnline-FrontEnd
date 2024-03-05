import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Profile.module.scss";
import Image from "../../../components/Image";
import images from "../../../assets/images";
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import ProfileItem from "./ProfileItem";

const cx = classNames.bind(styles);

function Profile() {
  const [avatar, setAvatar] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar-container")}>
        <Image src={avatar || images.noImage} alt="avatar" avatarBig />
        <div className={cx("name-item")}>Cao Bá Hướng</div>
        <label htmlFor="fileUploadMain" className={cx("custom-file-upload")}>
          <span className={cx("take-picture-btn")}>
            <FontAwesomeIcon icon={faFileArrowUp} />
            <span style={{ marginTop: "5px", fontSize: "17px" }}>Chọn ảnh</span>
          </span>
        </label>
        <input
          type="file"
          id="fileUploadMain"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
      <div className={cx("infomation-container")}>
        <h1 className={cx("title-infomation")}>Thông tin người dùng</h1>
        <hr className={cx("custom-line")} />
        <div className={cx("infomation-user")}>
          <ProfileItem title={"Họ và tên"} value={"Cao Bá Hướng"} />
          <ProfileItem title={"Số điện thoại"} value={"0946483158"} />
          <ProfileItem title={"Ngày sinh"} value={"26/02/2004"} />
        </div>
        <h1 className={cx("title-infomation")} style={{ marginTop: "25px" }}>
          Thông tin tài khoản
        </h1>
        <hr className={cx("custom-line")} />
        <div className={cx("infomation-user")}>
          <ProfileItem title={"Tên đăng nhập"} value={"caobahuong"} />
          <ProfileItem title={"Gmail"} value={"caobahuong@gmail.com"} />
          <div className={cx("password-container")}>
            <ProfileItem title={"Đổi mật khẩu"} value={""} />
            <input
              type="password"
              placeholder="Mật khẩu mới"
              className={cx("input-password")}
            />
          </div>
        </div>
        <Button primary className={cx("save-btn")}>
          Lưu thay đổi
        </Button>
      </div>
    </div>
  );
}

export default Profile;
