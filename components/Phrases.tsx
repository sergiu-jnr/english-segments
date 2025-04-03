import React from "react";
import styles from "./Phrases.module.css";
import Image from "next/image";

const phrases = [
  {
    title: "So, what are you doing here?",
    translation: "Deci, ce faci aici?",
    src: `/phrases-from-movies/${encodeURIComponent("So, what are you doing here?")}.jpeg`
  },
  {
    title: "I'll be in the bar for the rest of the week",
    translation: "Voi fi în bar pentru restul săptămânii",
    src: `/phrases-from-movies/${encodeURIComponent("I'll be in the bar for the rest of the week")}.jpeg`
  },
  {
    title: "How long you staying for?",
    translation: "Cât timp stai?",
    src: `/phrases-from-movies/${encodeURIComponent("How long you staying for?")}.jpeg`
  }
]

const Phrases: React.FC = () => {
  return (
    <div className={styles.phrases}>
      {/* <div className={styles.phrase}>
        <Image src={`/phrases-from-movies/${encodeURIComponent('So, what are you doing here?.jpeg')}`} alt="" width={960} height={520} />
        <span className={styles.phraseText}>So, what are you doing here?</span>
        <span className={styles.phraseTranslation}>Deci, ce faci aici?</span>
      </div>


      <div className={styles.phrase}>
        <Image src={`/phrases-from-movies/${encodeURIComponent("I'll be in the bar for the rest of the week.jpeg")}`} alt="" width={960} height={520} />
        <span className={styles.phraseText}>I&apos;ll be in the bar for the rest of the week</span>
        <span className={styles.phraseTranslation}>Voi fi în bar pentru restul săptămânii</span>
      </div>


      <div className={styles.phrase}>
        <Image src={`/phrases-from-movies/${encodeURIComponent('How long you staying for?.jpeg')}`} alt="" width={960} height={520} />
        <span className={styles.phraseText}>How long you staying for?</span>
        <span className={styles.phraseTranslation}>Cât timp stai?</span>
      </div> */}

      {phrases.map((phrase, index) => (
        <div key={index} className={styles.phrase}>
          <Image src={phrase.src} alt="" width={960} height={520} />
          <span className={styles.phraseText}>{phrase.title}</span>
          <span className={styles.phraseTranslation}>{phrase.translation}</span>
        </div>
      ))}
    </div>
  );
};

export default Phrases;
