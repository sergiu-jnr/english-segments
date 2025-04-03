import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <header className={styles.hero}>
      <h1 className={styles.title}>Podcast Segments</h1>
      <p className={styles.description}>More advanced dialogues to practice speaking English out loud.</p>
    </header>
  );
};

export default Hero;
