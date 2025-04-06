import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

type Props = {
    page: string;
}

const Header: React.FC<Props> = (props: Props) => {
    const { page } = props;

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <Link href="/" className={styles.logoContainer}>
                        <Image src="/media/logo.png" alt="Logo" width={50} height={50} />
                        <span className={styles.logoText}>English Segments</span>
                    </Link>

                    <span className={styles.languageDivider}>→</span>

                    <span className={styles.languageLabel}>
                        <span className="fi fi-gb"></span> English
                    </span>
                </div>
                <div className={styles.centerSection}>
                    <Link href="/movie-segments">
                        <span className={`${styles.navLink} ${page === 'phrases-from-movies' ? styles.active : ''}`}>Movie Segments</span>
                    </Link>

                    <Link href="/podcast-segments">
                        <span className={`${styles.navLink} ${page === 'podcast-segments' ? styles.active : ''}`}>Podcast Segments</span>
                    </Link>

                    <Link href="/story-segments">
                        <span className={`${styles.navLink} ${page === 'story-segments' ? styles.active : ''}`}>Story Segments</span>
                    </Link>

                    {/* <Link href="/stories-for-speaking">
                        <span className={`${styles.navLink} ${page === 'stories-for-speaking' ? styles.active : ''}`}>Stories for Speaking</span>
                    </Link> */}
                </div>
                {/* <button className={styles.premiumButton}>
                    <Image src="/external-link.svg" alt="Go to the shop" width={15} height={15} />
                    TPR Kit for Speaking
                </button> */}
            </div>
        </div>
    );
};

export default Header;
