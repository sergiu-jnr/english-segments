import React from "react";
import styles from "./SegmentPage.module.css";
import TypeSegment from "@/types/segment";
import VideoPlayer from "./VideoPlayer";
// import Script from "next/script";
import VolumePhrases from "./VolumePhrases";
import VolumeRecordings from "./VolumeRecordings";
import PlayPhrase from "./PlayPhrase";
import RecordPhrase from "./RecordPhrase";
import TranslationToggle from "./TranslationToggle";

type Props = {
  dict: Record<string, string>;
  segment: TypeSegment
}

const SegmentPage: React.FC<Props> = (props: Props) => {
  const { dict, segment } = props;
  const createdAt = new Date(segment.created_at);

  const formattedDate = createdAt.toLocaleDateString(segment.lang, {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  const duration = "PT" + Math.floor(segment.audio_file.length / 60) + "M" + (segment.audio_file.length % 60) + "S";

  return (
    <div className={styles.segment}>
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
        <h1 className={styles.segmentTitle}>{segment.title}</h1>
        <h2 className={styles.segmentDescription}>{segment.description}</h2>
      </div>

      <div className={styles.segmentVideo}>
        <VideoPlayer
          videoSrc={segment.video_file}
          posterSrc={segment.cover_image}
          subtitleSrc={segment.subtitle_file}
          title={segment.title}
          description={segment.description}
          duration={duration}
          uploadDate={formattedDate}
        />
      </div>

      <div className={styles.segmentParts}>
        <div className={styles.segmentPart}>
          <div className={styles.partText}>
            <h2>{dict['audiosVolume']}</h2>
            <VolumePhrases />
          </div>

          <div className={styles.partRecord}>
            <h2>{dict['recordingsVolume']}</h2>
            <VolumeRecordings />
          </div>
        </div>
        {segment.texts.map((text, index) => (
          <div key={index} className={styles.segmentPart}>
            {segment.lang !== "en" && segment.english_texts && (
              <div className={styles.partText}>
                <PlayPhrase audio={segment.audios[index]} />
                <h3>{segment.english_texts[index]}</h3>
                <p style={{ display: 'none' }}>{text}</p>
                <button className={`${styles.showTranslation} show-translation`} data-text-hide={dict['hideTranslation']} data-text-show={dict['showTranslation']}>{dict['showTranslation']}</button>
              </div>
            )}

            {segment.lang === "en" && (
              <div className={styles.partText}>
                <PlayPhrase audio={segment.audios[index]} />
                <h3>{text}</h3>
                {/* <p style={{ display: 'none' }}>{text}</p>
                <button className={`${styles.showTranslation} show-translation`} data-text-hide={"Hide translation"} data-text-show={"Show translation"}>Show translation</button> */}
              </div>
            )}

            <div className={styles.partRecord}>
              <RecordPhrase dict={dict} />
            </div>
          </div>
        ))}

        <TranslationToggle />
      </div>
    </div>
  );
};

export default SegmentPage;
