import React from "react";
import styles from "./AvatarDropDown.module.css";
import { useRouter } from "next/navigation";

interface AvatarDropDownType {
  isVisible: boolean;
  onHide: () => void;
}

export default function AvatarDropDown({
  isVisible,
  onHide,
}: AvatarDropDownType) {
  const router = useRouter();
  return (
    <div
      className={
        styles.avatarDropDown + " " + (!isVisible && styles.avatarInactive)
      }
    >
      <div
        className={styles.dropdownItem}
        onClick={() => {
          router.push("/account");
          onHide();
        }}
      >
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
