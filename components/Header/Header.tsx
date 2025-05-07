"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import AvatarDropDown from "../AvatarDropDown/AvatarDropDown";

export default function Header() {
  const [isDropdownVisible, setIsDropDownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropDownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
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
              if (isDropdownVisible) return;
              setIsDropDownVisible(true);
            }}
          />
          <i
            className={`fa-light ${
              isDropdownVisible ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
        </div>
        <div className={styles.dropDownWrapper} ref={dropdownRef}>
          <AvatarDropDown isVisible={isDropdownVisible} />
        </div>
      </div>
    </div>
  );
}
