import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <header className={styles.hero}>
      <h1 className={styles.title}>Stories for Speaking</h1>
      <p className={styles.description}>TPR stories in various everyday contexts<br/>for practicing speaking English real-time.</p>
    </header>
  );
};

export default Hero;
