import React from "react";
import styles from "./Edition.module.css";
import Segment from "@/types/segment";
import Link from "next/link";
import Image from "next/image";
import categoryToTitle from "@/constants/categoryToTitle";

type Props = {
    segments: Segment[]
}

const Edition: React.FC<Props> = (props: Props) => {
    const { segments } = props;

    const categories = {
        "movie": segments.filter((segment) => segment.type === "movie"),
        "podcast": segments.filter((segment) => segment.type === "podcast"),
        "story": segments.filter((segment) => segment.type === "story"),
    }

    return (
        <div className={styles.edition}>
            <h2 className={styles.title}>Latest Edition</h2>

            {Object.keys(categories).map((category) => {
                const categorySegments = categories[category as keyof typeof categories];
                if (categorySegments.length === 0) return null;
                return (
                    <div key={category} className={styles.category}>
                        <h3 className={styles.categoryTitle}>
                            {categoryToTitle[category]} •

                            <Link href={`/movie-segments`} className={styles.categoryLink}>
                                See all
                            </Link>
                        </h3>
                        <div className={styles.segments}>
                            {categorySegments.map((segment) => (
                                <Link href={`/segment/${segment.id}/${segment.slug}`} key={segment.id} className={styles.segment}>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            fill={true}
                                            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            src={segment.cover_image}
                                            alt={segment.title}
                                            style={{ objectFit: "cover" }}
                                            // width={300}
                                            // height={200}
                                            className={styles.segmentImage}
                                        />

                                        <div className={styles.tags}>
                                            <div className={styles.tag}>
                                                <span className={`${styles.tagFlag} fi fi-gb`} />
                                                American English • 30s
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.segmentDetails}>
                                        <h3 className={styles.segmentTitle}>{segment.title}</h3>
                                        <p className={styles.segmentDescription}>{segment.description}</p>
                                    </div>
                                    {/* <Link href={`/segment/${segment.id}/${segment.slug}`} className={styles.segmentLink}>
                                        Practice
                                    </Link> */}
                                </Link>
                            ))}
                        </div>
                    </div>
                );
            })}


        </div>
    );
};

export default Edition;
