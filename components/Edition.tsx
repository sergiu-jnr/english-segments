"use client";

import React from "react";
import styles from "./Edition.module.css";
import Segment from "@/types/segment";
import Link from "next/link";
// import Image from "next/image";
import categoryToTitle from "@/constants/categoryToTitle";
import VideoPlayer from "./VideoPlayer";
// import ReactPlayer from 'react-player'

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
            {/* <h2 className={styles.title}>Latest Edition</h2> */}

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
                                <SegmentItem key={segment.id} segment={segment} />
                            ))}
                        </div>
                    </div>
                );
            })}


        </div>
    );
};

const SegmentItem: React.FC<{ segment: Segment }> = ({ segment }) => {
    // const isVideo = segment.type === "movie" || segment.type === "podcast";
    // const isAudio = segment.type === "story";

    // const [isPlaying, setIsPlaying] = React.useState(false);

    const createdAt = new Date(segment.created_at);
    
    const formattedDate = createdAt.toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
    });
    
    const duration = "PT" + Math.floor(segment.audio_file.length / 60) + "M" + (segment.audio_file.length % 60) + "S";

    return (
        <div key={segment.id} className={styles.segment}>
            <div className={styles.imageContainer}>

            <VideoPlayer
                videoSrc={segment.video_file}
                posterSrc={segment.cover_image}
                subtitleSrc={segment.subtitle_file}
                title={segment.title}
                description={segment.description}
                duration={duration} 
                uploadDate={formattedDate}
                width={483.9}
                height={280}
            />
            </div>
            <Link href={`/${segment.slug}`} className={styles.segmentDetails}>
                <div className={styles.segmentSubtitle}>
                    <span className={`${styles.subtitleFlag} fi fi-gb`} />
                    American English
                </div>
                <h3 className={styles.segmentTitle}>{segment.title}</h3>
                <p className={styles.segmentDescription}>{segment.description}</p>
            </Link>
            {/* <Link href={`/segment/${segment.id}/${segment.slug}`} className={styles.segmentLink}>
                Practice
            </Link> */}
        </div>
    )
}

export default Edition;
