"use client";
import React from "react";
import styles from "./Home.module.css";
import InterviewPostingItem from "@/components/InterviewPostingItem/InterviewPostingItem";
import { useState } from "react";
import { JobInformationType } from "@/types/JobInformationType";
import JobInformationPreview from "@/components/JobInformationPreview/JobInformationPreview";
import AppointmentCall from "@/components/AppointmentCall/AppointmentCall";

export default function Home() {
  const [jobInformation, setJobInformation] =
    useState<JobInformationType | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);

  const sampleJobInformation: JobInformationType = {
    companyName: "Alpha Romeo",
    address: "12 Chicago avenue Lekki",
    jobTitle: "React JS Developer",
    jobDescription:
      "Alpha Romeo is a renowned institution looking for a skilled React.js Developer to join our team. You will play a crucial role in building and maintaining cutting-edge web applications, enhancing user experiences, and ensuring high-quality, scalable solutions that align with our goals.",
    techStack: ["React Js", "Firebase", "Express Js"],
    createdAt: new Date(),
  };

  return (
    <div className={"fade " + styles.home}>
      <div className={styles.main}>
        <div className={styles.searchWrapper}>
          <div className={styles.searchInputWrapper}>
            <i className="fa-light fa-search"></i>
            <input
              type="text"
              className={""}
              placeholder="Search Job Openings Here..."
            />
            <i className="fa-light fa-xmark"></i>
          </div>
          <button className="button">
            Search
            <i className="fa-light fa-arrow-right"></i>
          </button>
        </div>
        <div className={styles.jobOpeningsWrapper}>
          <InterviewPostingItem
            onViewDetail={() => setJobInformation(sampleJobInformation)}
            onApply={() => setIsCallActive(true)}
          />
          <InterviewPostingItem
            onViewDetail={() => setJobInformation(sampleJobInformation)}
          />
          <InterviewPostingItem
            onViewDetail={() => setJobInformation(sampleJobInformation)}
          />
          <InterviewPostingItem
            onViewDetail={() => setJobInformation(sampleJobInformation)}
          />
          <InterviewPostingItem
            onViewDetail={() => setJobInformation(sampleJobInformation)}
          />
          <InterviewPostingItem
            onViewDetail={() => setJobInformation(sampleJobInformation)}
          />
          <div className={styles.moreWrapper}>
            <div className={styles.moreContainer}>
              See more <i className="fa-light fa-arrow-down"></i>
            </div>
          </div>
        </div>
      </div>

      <JobInformationPreview
        jobInformation={jobInformation}
        onCancel={() => setJobInformation(null)}
      />
      <AppointmentCall
        isActive={isCallActive}
        onDecline={() => setIsCallActive(false)}
      />
    </div>
  );
}
