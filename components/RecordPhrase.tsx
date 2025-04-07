"use client";
import { useState, useRef, useEffect } from "react";
// import { useAudioPlayer } from 'react-use-audio-player';
import styles from "./RecordPhrase.module.css";

type Props = {
  dict: Record<string, string>;
}

const RecordPhrase = (props: Props) => {
  const { dict } = props;

  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  // Clean up resources when component unmounts
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      setAudioBlob(null);
      
      // Request high-quality audio with optimized settings
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 48000,
          channelCount: 2
        }
      });
      
      streamRef.current = stream;
      audioChunksRef.current = [];
      
      // Create recorder with higher bitrate for better quality
      const options = { mimeType: 'audio/webm;codecs=opus', audioBitsPerSecond: 128000 };
      mediaRecorderRef.current = new MediaRecorder(stream, options);
      
      // Collect data more frequently to reduce delay
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };
      }
      
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.start(100); // Collect data every 100ms
      }
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      if (error instanceof Error) {
        alert("Could not start recording: " + error.message);
      } else {
        alert("Could not start recording due to an unknown error.");
      }
    }
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current) return;
    
    mediaRecorderRef.current.onstop = () => {
      try {
        const audioBlob = new Blob(audioChunksRef.current, { 
          type: "audio/webm; codecs=opus" 
        });
        setAudioBlob(audioBlob);
        
        // Clean up resources
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
          streamRef.current = null;
        }
      } catch (error) {
        console.error("Error processing recording:", error);
      }
    };
    
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div className="recording-container">
      <button 
        className={`recording-button ${styles.button} ${isRecording ? 'recording' : ''}`}
        onClick={isRecording ? stopRecording : startRecording}
      >
        {isRecording ? dict['stopRecording'] : dict['startRecording']}
      </button>
      
      {audioBlob && (
        <div className="audio-playback">
          <audio 
            controls 
            src={URL.createObjectURL(audioBlob)} 
            className={`audio-player ${styles.audio}`}
          />
          {/* <div className="audio-info">
            Size: {(audioBlob.size / 1024).toFixed(2)} KB
          </div> */}
        </div>
      )}
    </div>
  );
};

// const useAudioRecorder = () => {
//     const [isRecording, setIsRecording] = useState<boolean>(false);
//     const [audioBlob, setAudioBlob] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
//     const mediaRecorderRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
//     const audioChunksRef = useRef<any>([]); // eslint-disable-line @typescript-eslint/no-explicit-any

//     const startRecording = async () => {
//         const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//         mediaRecorderRef.current = new MediaRecorder(stream);
//         audioChunksRef.current = [];

//         mediaRecorderRef.current.ondataavailable = (event: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
//             audioChunksRef.current.push(event.data);
//         };

//         mediaRecorderRef.current.start();
//         setIsRecording(true);
//     };

//     const stopRecording = () => {
//         if (mediaRecorderRef.current) {
//             mediaRecorderRef.current.onstop = () => {
//                 const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
//                 setAudioBlob(audioBlob);

//                 // Clean up the stream properly
//                 mediaRecorderRef.current.stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
//                 mediaRecorderRef.current = null; // Reset the reference
//             };

//             mediaRecorderRef.current.stop();
//             setIsRecording(false);
//         }
//     };

//     return { isRecording, startRecording, stopRecording, audioBlob };
// };

export default RecordPhrase;