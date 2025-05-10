import React from "react";
import styles from "./InterviewPostingItem.module.css";

interface PropType {
  onViewDetail?: () => void;
  onSchedule?: () => void;
  onApply?: () => void;
}

export default function InterviewPostingItem({
  onViewDetail,
  onSchedule,
  onApply,
}: PropType) {
  return (
    <div className={styles.postingContainer}>
      <div className={styles.descriptionContainer} onClick={onViewDetail}>
        <div className={styles.jobDescription}>
          <h2>React JS Developer</h2>
          <p>
            Alpha Romeo is a renowned institution looking for a skilled React.js
            Developer to join our team. You will play a crucial role in building
            and maintaining cutting-edge web applications, enhancing user
            experiences, and ensuring high-quality, scalable solutions that
            align with our goals.
          </p>
        </div>
        <div className={styles.skillDescription}>
          <p>Tech Stack: React JS, Vanilla JS, Firebase, Mongo Db</p>
        </div>
      </div>
      <div className={styles.actionContainer}>
        <button onClick={onApply}>Apply now</button>
        <button onClick={onViewDetail}>View Details</button>
        <button onClick={onSchedule}>Schedule</button>
      </div>
    </div>
  );
}
