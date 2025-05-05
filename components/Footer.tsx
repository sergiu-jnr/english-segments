import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import Lang from "@/types/lang";
import Page from "@/types/page";

type Params = {
  lang: Lang;
  dict: Record<string, string>;
  termsAndConditions: Page | undefined;
  privacyPolicy: Page | undefined
}

const Footer: React.FC<Params> = ({ lang, dict, termsAndConditions, privacyPolicy }) => {

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.text}>
          <span>{dict['copyright']}</span>
        </div>

        <div className={styles.legal}>
          {termsAndConditions &&
            <Link href={`/${lang}/p/${termsAndConditions['slug']}`} className={styles.legalLink}>
              <span>{termsAndConditions['title']}</span>
            </Link>
          }

          {privacyPolicy &&
            <Link href={`/${lang}/p/${privacyPolicy['slug']}`} className={styles.legalLink}>
              <span>{privacyPolicy['title']}</span>
            </Link>
          }
        </div>

        <div className={styles.social}>
          <Link href={'https://www.youtube.com/@englishsegments'} className={styles.socialLink}>
            <Image src="/media/youtube.svg" alt="English Segments on Youtube" width={20} height={20} />
            <span>{dict['youtube']}</span>
          </Link>

          <Link href={'https://www.tiktok.com/@englishsegments'} className={styles.socialLink}>
            <Image src="/media/tiktok.svg" alt="English Segments on TikTok" width={20} height={20} />
            <span>{dict['tiktok']}</span>
          </Link>

          <Link href={'https://www.instagram.com/englishsegments'} className={styles.socialLink}>
            <Image src="/media/instagram.svg" alt="English Segments on Instagram" width={20} height={20} />
            <span>{dict['instagram']}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
