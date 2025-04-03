import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <header className={styles.hero}>
      <h1 className={styles.title}>Phrases from Movies</h1>
      <p className={styles.description}>Record your voice, and practice speaking English out loud<br/>by repeating common phrases from movies.</p>
    </header>
  );
};

export default Hero;
