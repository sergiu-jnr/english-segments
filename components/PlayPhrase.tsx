"use client"

// import mediaUrl from "@/_utils/mediaUrl";
import { useAudioPlayer } from "react-use-audio-player";
import { playIcon, stopIcon } from "./Icons";
import styles from "./PlayPhrase.module.css";

type Params = {
    audio: string;
}

export default function PlayPhrase(params: Params) {
    const audioPlayer = useAudioPlayer()

    const playBit = () => {
        const volume = localStorage.getItem('volume_phrases');
        audioPlayer.load(params.audio, {
            format: 'mp3',
            autoplay: true,
            initialVolume: volume ? parseFloat(volume) / 100 : 0.4
        });
        // audioPlayer.play()
    }

    if (audioPlayer.isPlaying) {
        return (
            <button className={styles.button} onClick={() => audioPlayer.stop()}>
                {stopIcon(35, 35)}
            </button>
        )
    }

    return (
        <button className={styles.button} onClick={() => playBit()}>
            {playIcon(35, 35)}
        </button>
    )
}