import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.text}>
          <span>© 2025 English Segments. All rights reserved.</span>
        </div>

        <div className={styles.legal}>
          <Link href={'https://www.tiktok.com/'} className={styles.legalLink}>
            <span>Terms of Use</span>
          </Link>

          <Link href={'https://www.instragram.com/'} className={styles.legalLink}>
            <span>Privacy Policy</span>
          </Link>
        </div>

        <div className={styles.social}>
          <Link href={'https://www.youtube.com/'} className={styles.socialLink}>
            <Image src="/media/youtube.svg" alt="New English on Youtube" width={20} height={20} />
            <span>Youtube</span>
          </Link>

          <Link href={'https://www.tiktok.com/'} className={styles.socialLink}>
            <Image src="/media/tiktok.svg" alt="New English on TikTok" width={20} height={20} />
            <span>TikTok</span>
          </Link>

          <Link href={'https://www.instragram.com/'} className={styles.socialLink}>
            <Image src="/media/instagram.svg" alt="New English on Instagram" width={20} height={20} />
            <span>Instagram</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
