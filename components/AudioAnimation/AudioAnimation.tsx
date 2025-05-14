import React from "react";
import styles from "./AudioAnimation.module.css";
export default function AudioAnimation() {
  return (
    <div className={styles.animationContainer}>
      <div className={styles.bubble + " " + styles.bubble1}></div>
      <div className={styles.bubble + " " + styles.bubble2}></div>
      <div className={styles.bubble + " " + styles.bubble3}></div>
      <div className={styles.bubble + " " + styles.bubble4}></div>
      <div className={styles.bubble + " " + styles.bubble5}></div>
    </div>
  );
}
