import React from "react";
import styles from "./page.module.css";
import { client } from "../../utils/configSanity";
import { get } from "http";

interface IPortfolio {
  _id: string;
  title: string;
  description: any; //textbox
  _createdAt: string;
}

async function getData() {
  const query = `*[_type == "portfolio"]`;
  const data = await client.fetch(query);

  return data as IPortfolio[];
}

const Portfolio = async () => {
  const data = (await getData()) as IPortfolio[];

  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Portfolio</h1>
      <div className={styles.items}></div>
    </div>
  );
};

export default Portfolio;
