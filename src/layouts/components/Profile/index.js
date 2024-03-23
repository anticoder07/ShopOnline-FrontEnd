import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./Profile.module.scss";
import Image from "../../../components/Image";
import images from "../../../assets/images";
import Button from "../../../components/Button";
import ProfileItem from "./ProfileItem";
import {
  changeAvatarProfile,
  changePasswordProfile,
  seeProfile,
} from "../../../services/ProfileService";

const cx = classNames.bind(styles);

function Profile() {
  const [avatar, setAvatar] = useState(null);
  const [inforProfile, setInforProfile] = useState([]);
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const res = await seeProfile();
      setInforProfile(res);
      setAvatar(res.avatar);
    };

    fetchApi();
    console.log(inforProfile);
  }, []);

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

  const handleSaveProfile = () => {
    try {
      const fetchApi = async () => {
        if (avatar !== inforProfile.avatar) {
          const res = await changeAvatarProfile(avatar);
          console.log(res);
        }
        if (pwd !== "") {
          const res = await changePasswordProfile(pwd);
        }
      };

      fetchApi();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(pwd);
  }, [pwd]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar-container")}>
        <Image src={avatar || images.noImage} alt="avatar" avatarBig />
        <div className={cx("name-item")}>{inforProfile.name}</div>
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
          <ProfileItem title={"Họ và tên"} value={inforProfile.name} />
          <ProfileItem
            title={"Số điện thoại"}
            value={inforProfile.phoneNumber}
          />
          <ProfileItem title={"Ngày sinh"} value={inforProfile.dateOfBirth} />
        </div>
        <h1 className={cx("title-infomation")} style={{ marginTop: "25px" }}>
          Thông tin tài khoản
        </h1>
        <hr className={cx("custom-line")} />
        <div className={cx("infomation-user")}>
          {/* <ProfileItem title={"Tên đăng nhập"} value={inforProfile.userEmail} /> */}
          <ProfileItem title={"Gmail"} value={inforProfile.userEmail} />
          <div className={cx("password-container")}>
            <ProfileItem title={"Đổi mật khẩu"} value={""} />
            <input
              type="password"
              placeholder="Mật khẩu mới"
              className={cx("input-password")}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </div>
        </div>
        <Button primary className={cx("save-btn")} onClick={handleSaveProfile}>
          Lưu thay đổi
        </Button>
      </div>
    </div>
  );
}

export default Profile;
