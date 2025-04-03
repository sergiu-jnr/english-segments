import React from "react";
import styles from "./Categories.module.css";
import Image from "next/image";

const Categories: React.FC = () => {
  return (
    <header className={styles.categories}>
      <h2>
        <span>At Workplace / With Colleagues <span className={styles.total}>(120 segments)</span></span>
        <button className={styles.start}>
          <Image src="/start.svg" alt="Start with a random segment" width={15} height={15} />
          Start with a random segment
        </button>
      </h2>

      <h2>
        <span>At Home / With Friends <span className={styles.total}>(350 segments)</span></span>
        <button className={styles.start}>
          <Image src="/start.svg" alt="Start with a random segment" width={15} height={15} />
          Start with a random segment
        </button>
      </h2>

      <h2>
        <span>In a Relationship / With Partner <span className={styles.total}>(250 segments)</span></span>
        <button className={styles.start}>
          <Image src="/start.svg" alt="Start with a random segment" width={15} height={15} />
          Start with a random segment
        </button>
      </h2>

      <h2>
        <span>In Public / With Strangers <span className={styles.total}>(160 segments)</span></span>
        <button className={styles.start}>
          <Image src="/start.svg" alt="Start with a random phrase" width={15} height={15} />
          Start with a random segment
        </button>
      </h2>
    </header>
  );
};

export default Categories;
