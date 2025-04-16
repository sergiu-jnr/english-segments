import React from "react";
import styles from "./Hero.module.css";

type Params = {
  dict: Record<string, string>;
  title?: string;
  description?: string;
}

const Hero: React.FC<Params> = (props: Params) => {
  const { title, description, dict } = props;
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>{title || dict["title"]}</h1>
      <p className={styles.description}>{description || dict["description"]}</p>
    </div>
  );
};

export default Hero;
