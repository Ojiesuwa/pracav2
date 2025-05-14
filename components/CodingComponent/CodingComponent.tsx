"use client";

import React from "react";
import styles from "./CodingComponent.module.css";
import { Editor } from "@monaco-editor/react";

interface PropsType {
  isVisible: boolean;
}

export default function CodingComponent({ isVisible }: PropsType) {
  return (
    <div className={isVisible ? styles.component : styles.componentInactive}>
      <div className={styles.header}>
        <p>Two Sums</p>
        <div className={styles.timeWrapper}>
          <i className="fa-light fa-clock"></i>
          <p>30:00</p>
        </div>
      </div>
      <div className={styles.main}>
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={
            'function greet(name) {\n  return "Hello, " + name + "!";\n}\n\nconsole.log(greet("Praca"));'
          }
          theme="vs-dark"
          onChange={(e) => console.log(e)}
        />
      </div>
      <div className={styles.footer}>
        <button>Test</button>
        <button>Submit</button>
      </div>
    </div>
  );
}
