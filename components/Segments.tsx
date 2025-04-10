import React from "react";
import styles from "./Segments.module.css";
import Segment from "@/types/segment";
import Link from "next/link";
// import categoryToTitle from "@/constants/categoryToTitle";
// import VideoPlayer from "./VideoPlayer";
import Image from 'next/image'

type Props = {
    dict: Record<string, string>;
    segments: Segment[]
}

const Edition: React.FC<Props> = (props: Props) => {
    const { dict, segments } = props;

    const categories = {
        "work": segments.filter((segment) => segment.category === "work"),
        "home": segments.filter((segment) => segment.category === "home"),
        "partner": segments.filter((segment) => segment.category === "partner"),
        "city": segments.filter((segment) => segment.category === "city"),
    }

    return (
        <div className={styles.edition}>
            {/* <h2 className={styles.title}>Latest Edition</h2> */}

            {Object.keys(categories).map((category) => {
                const categorySegments = categories[category as keyof typeof categories];
                if (categorySegments.length === 0) return null;
                return (
                    <div key={category} className={styles.category}>
                        <h3 className={styles.categoryTitle}>
                            {dict[category]}
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
    const createdAt = new Date(segment.created_at);

    const formattedDate = createdAt.toLocaleDateString(segment.lang, {
        month: "long",
        day: "2-digit",
        year: "numeric",
    });

    const duration = "PT" + Math.floor(segment.audio_file.length / 60) + "M" + (segment.audio_file.length % 60) + "S";

    if (0) console.log(formattedDate, duration)
    
    return (
        <Link href={`/${segment.lang}/${segment.slug}`} key={segment.id} className={styles.segment}>
            <div className={styles.imageContainer>
                <Image
                  src={segment.cover_image}
                  width={483.9}
                  height={280}
                  style={{ objectFit: "cover" }}
                  alt={segment.title}
                />
{/*                 <VideoPlayer
                    videoSrc={segment.video_file}
                    posterSrc={segment.cover_image}
                    subtitleSrc={segment.subtitle_file}
                    title={segment.title}
                    description={segment.description}
                    duration={duration}
                    uploadDate={formattedDate}
                    width={483.9}
                    height={280}
                /> */}
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
