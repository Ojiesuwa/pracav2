"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import CallCell from "@/components/CallCell/CallCell";
import CodingComponent from "@/components/CodingComponent/CodingComponent";
import { useRouter } from "next/navigation";

export default function InterviewView() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioRef2 = useRef<HTMLAudioElement>(null);
  const [isCodeActive, setIsCodeActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // audioRef.current?.play();
    }, 1200);
    setTimeout(() => {
      if (!audioRef2.current) return;
      audioRef2.current.volume = 0.5;
      // audioRef2.current?.play();
    }, 300);
  }, []);
  return (
    <div className={"fade " + styles.page}>
      <div className={styles.main}>
        <div
          className={styles.callCellContainer}
          onClick={() => setIsCodeActive((p) => !p)}
        >
          <CallCell />
          <CallCell />
          <CallCell />
          <CallCell />
        </div>
        <CodingComponent isVisible={isCodeActive} />
      </div>
      <div className={styles.controlWrapper}>
        <div className={styles.descriptionContainer}>
          <i className="fa-solid fa-circle"></i>
          <div>
            <h3>Alpha Romeo</h3>
            <p>React Js Developer</p>
          </div>
          <p></p>
        </div>
        <div className={styles.chatController}>
          <div className={styles.actionIconWrapper}>
            <i className="fa-solid fa-video"></i>
          </div>

          <div className={styles.actionIconWrapper}>
            <i className="fa-solid fa-microphone"></i>
          </div>
          <div
            className={styles.endCallWrapper + " " + styles.actionIconWrapper}
            onClick={() => router.push("/")}
          >
            <i className="fa-solid fa-phone-hangup"></i>
          </div>
        </div>
        <div className={styles.callController}>
          <div
            className={styles.actionIconWrapper}
            onClick={() => router.push("/")}
          >
            <i className="fa-solid fa-phone-hangup"></i>
          </div>
        </div>
      </div>
      <audio src="/music/welcomespeech.mp3" ref={audioRef}></audio>
      <audio src="/music/answercall.mp3" ref={audioRef2}></audio>
    </div>
  );
}
