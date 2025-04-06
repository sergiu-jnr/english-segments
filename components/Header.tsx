import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import languages from "@/constants/languages";
import Script from "next/script";

type Props = {
    page: string;
    lang: string;
    dict: Record<string, string>;
}

const Header: React.FC<Props> = (props: Props) => {
    const { dict, lang, page } = props;

    const language = languages.find((one) => one.code === lang);

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
                        <span className={`fi ${language?.flag}`}></span> {language?.local_name}
                    </span>
                </div>

                <div id="mobile-section" className={styles.centerSection}>
                    <Link href="/movie-segments">
                        <span className={`${styles.navLink} ${page === 'phrases-from-movies' ? styles.active : ''}`}>{dict['movieSegments']}</span>
                    </Link>

                    <Link href="/podcast-segments">
                        <span className={`${styles.navLink} ${page === 'podcast-segments' ? styles.active : ''}`}>{dict['podcastSegments']}</span>
                    </Link>

                    <Link href="/story-segments">
                        <span className={`${styles.navLink} ${page === 'story-segments' ? styles.active : ''}`}>{dict['storySegments']}</span>
                    </Link>

                    {/* <Link href="/stories-for-speaking">
                        <span className={`${styles.navLink} ${page === 'stories-for-speaking' ? styles.active : ''}`}>Stories for Speaking</span>
                    </Link> */}
                </div>

                <div className={styles.mobileSection}>
                    <button id="toggle-button" className={styles.mobileButton}>
                        <Image src="/media/menu.svg" alt="Menu" width={25} height={25} />
                    </button>
                </div>

                <Script id="toggle-script" strategy="lazyOnload">
                    {`
                        const toggleButton = document.getElementById('toggle-button');
                        const mobileSection = document.getElementById('mobile-section');

                        if (toggleButton && mobileSection) {
                        toggleButton.addEventListener('click', function () {
                            if (mobileSection.style.display === 'none') {
                            mobileSection.style.display = 'block';
                            } else {
                            mobileSection.style.display = 'none';
                            }
                        });
                        }
                    `}
                </Script>
                {/* <button className={styles.premiumButton}>
                    <Image src="/external-link.svg" alt="Go to the shop" width={15} height={15} />
                    TPR Kit for Speaking
                </button> */}
            </div>
        </div>
    );
};

export default Header;
