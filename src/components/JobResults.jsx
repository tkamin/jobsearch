import React from "react";
import styles from "../styles/Search.module.css";

const JobResults = ({ results, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <span>Searching jobs...</span>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className={styles.resultsContainer}>
      {results.map((job, index) => (
        <div key={index} className={styles.jobCard}>
          <h3 className={styles.jobTitle}>{job.title}</h3>
          <div className={styles.jobDetails}>
            <span className={styles.orgName}>{job.org}</span>
            <span className={styles.location}>{job.location}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobResults;
