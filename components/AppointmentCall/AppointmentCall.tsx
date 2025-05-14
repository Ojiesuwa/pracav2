import React, { useEffect, useRef } from "react";
import styles from "./AppointmentCall.module.css";
import { useRouter } from "next/navigation";

interface PropTypes {
  isActive: boolean;
  onDecline: () => void;
}
export default function AppointmentCall({ isActive, onDecline }: PropTypes) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (audioRef.current) {
      if (isActive) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // reset to beginning
      }
    }
  }, [isActive]);
  return (
    <div
      className={
        isActive
          ? styles.appointmentCallWrapper
          : styles.appointmentCallWrapperInactive
      }
    >
      <div className={styles.componentIcon}>
        <i className="fa-solid fa-users"></i>
      </div>
      <div className={styles.callDetailWrapper}>
        <p className={styles.companyName}>Alpha Romeo</p>
        <p className={styles.role}>React JS Developer</p>
      </div>
      <div className={styles.callActionWrapper}>
        <i
          className={styles.accept + " fa-solid fa-circle-phone"}
          onClick={() => router.push("/interviews/1234")}
        ></i>
        <i
          className={styles.decline + " fa-solid fa-circle-phone"}
          onClick={onDecline}
        ></i>
      </div>
      <audio src="/music/ringtone.mp3" loop ref={audioRef}></audio>
    </div>
  );
}
