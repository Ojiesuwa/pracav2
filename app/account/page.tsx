import React from "react";
import styles from "./page.module.css";

export default function Account() {
  return (
    <div className={styles.account + " fade"}>
      <div className={styles.imageWrapper}>
        <img src="/female-unknown.webp" alt="" />
        <h3>Oluwarotimi Temidire</h3>
        <p>oluwarotimiadeola@gmail.com</p>
        <button>Change Profile Image</button>
      </div>
      <div className={styles.informationWrapper}>
        <h3>Personal Information</h3>
        <div className={styles.informationBox}>
          <label htmlFor="">Firstname</label>
          <input type="text" placeholder="E.g John" />
        </div>
        <div className={styles.informationBox}>
          <label htmlFor="">Lastname</label>
          <input type="text" placeholder="E.g Doe" />
        </div>
        <div className={styles.informationBox}>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="E.g johndoe@gmail.com" />
        </div>
        <div className={styles.informationBox}>
          <label htmlFor="">Gender</label>
          <select name="" id="">
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">I rather not say</option>
          </select>
        </div>
        <div className={styles.informationBox}>
          <label htmlFor="">Contact Number</label>
          <input type="text" placeholder="E.g +234 908 ..." />
        </div>
        <button className="button">Save Changes</button>
      </div>
      <div className={styles.historyContainer}>
        <h3>Account Summary</h3>
        <div className={styles.historyItem}>
          <i className="fa-solid fa-users"></i> <p>15 interviews conducted</p>
        </div>
        <div className={styles.historyItem}>
          <i className="fa-solid fa-circle-check"></i> <p>30% Success rate</p>
        </div>
        <div className={styles.historyItem}>
          <i className="fa-solid fa-credit-card"></i> <p>200 Credit</p>
        </div>
        <h3 className={styles.newSection}>Jobs applied for</h3>
        <div className={styles.historyItem}>
          <i className="fa-solid fa-briefcase"></i>
          <p>React JS Developer</p>
        </div>
        <div className={styles.historyItem}>
          <i className="fa-solid fa-briefcase"></i>
          <p>Junior Machine Learning Engineer</p>
        </div>
        <div className={styles.historyItem}>
          <i className="fa-solid fa-briefcase"></i>
          <p>Senior Front End Engineer</p>
        </div>
      </div>
    </div>
  );
}
