import React from "react";
import styles from "./AvatarDropDown.module.css";

interface AvatarDropDownType {
  isVisible: boolean;
}

export default function AvatarDropDown({ isVisible }: AvatarDropDownType) {
  return (
    <div
      className={
        styles.avatarDropDown + " " + (!isVisible && styles.avatarInactive)
      }
    >
      <div className={styles.dropdownItem}>
        <i className="fa-solid fa-user"></i>
        <p>Account</p>
      </div>
      <div className={styles.dropdownItem}>
        <i className="fa-light fa-arrow-rotate-left"></i>
        <p>Interview History</p>
      </div>
      <div className={styles.dropdownItem}>
        <i className="fa-light fa-calendar"></i>
        <p>Scheduled Interview</p>
      </div>
      <div className={styles.dropdownItem}>
        <i className="fa-light fa-arrow-right-from-bracket"></i>
        <p>Signout</p>
      </div>
    </div>
  );
}
