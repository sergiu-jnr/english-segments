import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import languages from "@/constants/languages";
import MobileToggle from "./MobileToggle";

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
                    <Link href={`/${lang}`} className={styles.logoContainer}>
                        <Image src="/media/logo.png" alt="Logo" width={50} height={50} />
                        <span className={styles.logoText}>English Segments</span>
                    </Link>

                    <span className={styles.languageDivider}>→</span>

                    <span className={styles.languageLabel}>
                        <span className={`fi ${language?.flag}`}></span> {language?.local_name}
                    </span>
                </div>

                <div id="mobile-section" className={styles.centerSection}>
                    <Link href={`/${lang}/segments/movie`}>
                        <span className={`${styles.navLink} ${page === 'segments/movie' ? styles.active : ''}`}>{dict['movieSegments']}</span>
                    </Link>

                    <Link href={`/${lang}/segments/podcast`}>
                        <span className={`${styles.navLink} ${page === 'segments/podcast' ? styles.active : ''}`}>{dict['podcastSegments']}</span>
                    </Link>

                    {/* <Link href="https://shop.englishsegments.com" className={styles.shopButtonMobile}>
                        <span className={`${styles.navLink}`}>Shop</span>
                    </Link> */}

                    {/* <Link href={`/${lang}/segments/story`}>
                        <span className={`${styles.navLink} ${page === 'segments/story' ? styles.active : ''}`}>{dict['storySegments']}</span>
                    </Link> */}

                    {/* <Link href={`/${lang}/blog`}>
                        <span className={`${styles.navLink} ${page === 'blog' ? styles.active : ''}`}>{dict['blog']}</span>
                    </Link> */}

                    {/* <Link href="/stories-for-speaking">
                        <span className={`${styles.navLink} ${page === 'stories-for-speaking' ? styles.active : ''}`}>Stories for Speaking</span>
                    </Link> */}
                </div>

                <div className={styles.mobileSection}>
                    <button id="toggle-button" className={styles.mobileButton}>
                        <Image src="/media/menu.svg" alt="Menu" width={25} height={25} />
                    </button>
                </div>

                <MobileToggle />

                {/* <Link href="https://sergioldn.gumroad.com/" className={styles.shopButton}>
                    <button className={styles.premiumButton}>
                        <Image src="/media/external-link.svg" alt="Sergio | London" width={15} height={15} />
                        Weekly Newsletter
                    </button>
                </Link> */}
            </div>
        </div>
    );
};

export default Header;
