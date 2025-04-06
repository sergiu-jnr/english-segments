import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

type Params = {
  dict: Record<string, string>;
}

const Footer: React.FC<Params> = ({ dict }) => {
  
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.text}>
          <span>{dict['copyright']}</span>
        </div>

        <div className={styles.legal}>
          <Link href={'https://www.tiktok.com/'} className={styles.legalLink}>
            <span>{dict['termsAndConditions']}</span>
          </Link>

          <Link href={'https://www.instragram.com/'} className={styles.legalLink}>
            <span>{dict['privacyPolicy']}</span>
          </Link>
        </div>

        <div className={styles.social}>
          <Link href={'https://www.youtube.com/'} className={styles.socialLink}>
            <Image src="/media/youtube.svg" alt="New English on Youtube" width={20} height={20} />
            <span>{dict['youtube']}</span>
          </Link>

          <Link href={'https://www.tiktok.com/'} className={styles.socialLink}>
            <Image src="/media/tiktok.svg" alt="New English on TikTok" width={20} height={20} />
            <span>{dict['tiktok']}</span>
          </Link>

          <Link href={'https://www.instragram.com/'} className={styles.socialLink}>
            <Image src="/media/instagram.svg" alt="New English on Instagram" width={20} height={20} />
            <span>{dict['instagram']}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
