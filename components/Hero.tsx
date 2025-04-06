import React from "react";
import styles from "./Hero.module.css";

type Params = {
  dict: Record<string, string>;
}

const Hero: React.FC<Params> = (props: Params) => {
  const { dict } = props;
  return (
    <header className={styles.hero}>
      <h1 className={styles.title}>{dict["title"]}</h1>
      <p className={styles.description}>{dict["description"]}</p>
    </header>
  );
};

export default Hero;
