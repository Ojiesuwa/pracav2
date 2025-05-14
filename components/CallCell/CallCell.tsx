import React from "react";
import styles from "./CallCell.module.css";
import AudioAnimation from "../AudioAnimation/AudioAnimation";
export default function CallCell() {
  return (
    <div className={styles.callCell}>
      <h3>Mr Johnson Caleb</h3>
      <p>Head of HR Department</p>
      <i className="fa-thin fa-circle-user"></i>
      <AudioAnimation />
    </div>
  );
}
