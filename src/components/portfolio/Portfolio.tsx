import React from "react";
import styles from "./page.module.css";

//grok query
async function getData() {}

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Portfolio</h1>
      <div className={styles.items}></div>
    </div>
  );
};

export default Portfolio;
