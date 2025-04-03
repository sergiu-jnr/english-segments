import React from "react";
import styles from "./Hero.module.css";

type Params = {
  title: string;
  description: string;
}

const Hero: React.FC<Params> = (props: Params) => {
  const { title, description } = props;
  return (
    <header className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </header>
  );
};

export default Hero;
