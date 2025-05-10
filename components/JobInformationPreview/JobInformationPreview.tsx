import React from "react";
import styles from "./JobInformationPreview.module.css";
import { JobInformationType } from "@/types/JobInformationType";

interface PropType {
  jobInformation: JobInformationType | null;
  onCancel?: () => void;
}

export default function JobInformationPreview({
  jobInformation,
  onCancel,
}: PropType) {
  return (
    <div
      className={
        jobInformation !== null ? styles.jobPreview : styles.jobPreviewInactive
      }
    >
      <div className={styles.header}>
        <div className={styles.textWrapper}>
          <h2>React JS Developer</h2>
          <div className={styles.subHeader}>
            <i className="fa-light fa-building"></i>
            <p>Alpha Romeo</p>
          </div>
          <div className={styles.subHeader}>
            <i className="fa-light fa-laptop"></i>
            <p>React Js, Firebase, MongoDb, HTML</p>
          </div>
        </div>
        <div className={styles.iconWrapper}>
          <i
            className="fa-light fa-xmark"
            onClick={() => (onCancel ? onCancel() : () => {})}
          ></i>
        </div>
      </div>
      <div className={styles.body}>
        <p style={{ whiteSpace: "pre-line" }}>
          {
            "Alpha Romeo is a renowned institution at the forefront of innovation, and we’re looking for a talented React.js Developer to join our growing team. In this role, you will be responsible for building and maintaining dynamic, user-centric web applications that are both performant and scalable. Your work will directly contribute to delivering seamless digital experiences across our platforms.\n\nKey Responsibilities:\n1. Design, develop, and maintain high-performance web applications using React.js.\n2. Collaborate with cross-functional teams to define, design, and ship new features.\n3. Optimize components for maximum performance across a variety of web-capable devices and browsers.\n4. Troubleshoot and resolve issues related to front-end architecture and user experience.\n5. Stay up to date with the latest web development trends and technologies.\n\nRequired Skills and Qualifications:\n1. Proven experience with React.js and JavaScript (ES6+).\n2. Solid understanding of web fundamentals such as HTML5, CSS3, and responsive design.\n3. Experience with state management tools (e.g., Redux, Context API).\n4. Familiarity with RESTful APIs and integrating backend services.\n5. Knowledge of version control systems, particularly Git.\n6. Strong problem-solving skills and attention to detail.\n7. Excellent communication and collaboration skills.\n\nNice to Have:\n1. Experience with TypeScript and Next.js.\n2. Knowledge of UI/UX design principles.\n3. Familiarity with testing frameworks like Jest or Mocha.\n\nAt Alpha Romeo, we value innovation, creativity, and a passion for technology. If you’re a React.js expert eager to contribute to impactful projects in a fast-paced environment, we’d love to hear from you!"
          }
        </p>
        <div className={styles.footer}>
          <button>Apply</button>
          <button>Schedule</button>
        </div>
      </div>
    </div>
  );
}
