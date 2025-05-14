"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import AvatarDropDown from "../AvatarDropDown/AvatarDropDown";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isDropdownVisible, setIsDropDownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <div className={" fade-down " + styles.header}>
      <div className={styles.logoWrapper} onClick={() => router.push("/")}>
        <img src="/logo2.png" alt="" />
        <h3>Praca</h3>
      </div>
      <div className={styles.informationWrapper}>
        <div className={styles.creditWrapper}>
          <i className="fa-solid fa-coin"></i>
          <p>200 Credits</p>
        </div>
        <div
          className={styles.profileImageWrapper}
          ref={dropdownRef}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src="/profileplaceholder.jpg"
            alt="user image"
            className={styles.profileImage}
            onClick={(e) => {
              e.stopPropagation();
              // if (isDropdownVisible) return;
              setIsDropDownVisible((p) => !p);
            }}
          />
          <i
            className={`fa-light ${
              isDropdownVisible ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
        </div>
        <AvatarDropDown
          isVisible={isDropdownVisible}
          onHide={() => setIsDropDownVisible(false)}
        />
      </div>
    </div>
  );
}
