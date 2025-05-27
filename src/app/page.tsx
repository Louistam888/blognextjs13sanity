import styles from "./page.module.css";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
  return (
    <main className={styles.main}>
      <Portfolio />
    </main>
  );
}
