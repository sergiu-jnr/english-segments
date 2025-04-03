import React from "react";
import styles from "./AvailableLanguages.module.css";
import languages from "@/constants/languages";
import Link from "next/link";

type Props = {
    languages: typeof languages
}

const AvailableLanguages: React.FC<Props> = (props) => {
    const { languages } = props;

    return (
        <div className={styles.container}>
            {languages.map((language) => (
                <Link href={`/${language.code.toLowerCase()}`} key={language.code} className={`${styles.item} ${language.code === 'EN' ? styles.active : ''}`}>
                    <span className={`${styles.flag} fi ${language.flag}`} />
                    <span className={styles.name}>{language.local_name}</span>
                </Link>
            ))}
        </div>
    );
};

export default AvailableLanguages;
