import React from "react";
import styles from "./Edition.module.css";
import Segment from "@/types/segment";
import Link from "next/link";
import categoryToTitle from "@/constants/categoryToTitle";
// import VideoPlayer from "./VideoPlayer";
import Image from 'next/image'

type Props = {
    dict: Record<string, string>;
    segments: Segment[]
}

const Edition: React.FC<Props> = (props: Props) => {
    const { dict, segments } = props;

    const categories = {
        "movie": segments.filter((segment) => segment.type === "movie"),
        "podcast": segments.filter((segment) => segment.type === "podcast"),
    }

    return (
        <div className={styles.edition}>
            {Object.keys(categories).map((category) => {
                const categorySegments = categories[category as keyof typeof categories];
                if (categorySegments.length === 0) return null;
                return (
                    <div key={category} className={styles.category}>
                        <h3 className={styles.categoryTitle}>
                            {dict[categoryToTitle[category]]} •

                            <Link href={`${categorySegments[0]['lang']}/segments/${category}`} className={styles.categoryLink}>
                                {dict['seeAll']}
                            </Link>
                        </h3>
                        <div className={styles.segments}>
                            {categorySegments.map((segment) => (
                                <SegmentItem dict={dict} key={segment.id} segment={segment} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const SegmentItem: React.FC<{
    dict: Record<string, string>;
    segment: Segment
}> = ({ dict, segment }) => {
    return (
        <Link href={`/${segment.lang}/${segment.slug}`} key={segment.id} className={styles.segment}>
            <div className={styles.imageContainer}>
                <Image
                  src={segment.cover_image}
                  width={483.9}
                  height={280}
                  style={{ objectFit: "cover" }}
                  alt={segment.title}
                />
            </div>
            <div className={styles.segmentDetails}>
                {segment.english === 'american' &&
                    <div className={styles.segmentSubtitle}>
                        <span className={`${styles.subtitleFlag} fi fi-us`} />
                        {dict['americanEnglish']}
                    </div>
                }
                {segment.english === 'british' &&
                    <div className={styles.segmentSubtitle}>
                        <span className={`${styles.subtitleFlag} fi fi-gb`} />
                        {dict['britishEnglish']}
                    </div>
                }
                <h3 className={styles.segmentTitle}>{segment.title}</h3>
                <p className={styles.segmentDescription}>{segment.description}</p>
            </div>
        </Link>
    )
}

export default Edition;
