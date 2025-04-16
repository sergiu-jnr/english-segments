import React from "react";
import styles from "./ListPages.module.css";
import Link from "next/link";
import Image from 'next/image'
import Page from "@/types/page";

type Props = {
    dict: Record<string, string>;
    pages: Page[]
}

const ListPages: React.FC<Props> = (props: Props) => {
    const { pages } = props;

    return (
        <div className={styles.pages}>
            {pages.map((page) => {
                return (
                    <Link href={`/${page.lang}/p/${page.slug}`} key={page.id} className={styles.page}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={page.image_url}
                                width={483.9}
                                height={280}
                                style={{ objectFit: "cover" }}
                                alt={page.title}
                            />
                        </div>
                        <div className={styles.pageDetails}>
                            <h3 className={styles.pageTitle}>{page.title}</h3>
                            <p className={styles.pageDescription}>{page.description}</p>
                        </div>
                    </Link>
                );
            })}


        </div>
    );
};

export default ListPages;
