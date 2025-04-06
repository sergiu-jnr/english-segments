import React from 'react';
import Head from 'next/head';

interface VideoPlayerProps {
  videoSrc: string;
  posterSrc: string;
  subtitleSrc?: string;
  title?: string;
  description?: string;
  duration?: string;
  uploadDate?: string;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  // subtitleSrc,
  posterSrc,
  title = 'Video content',
  description = 'Video player',
  duration = '0:00',
  uploadDate = new Date().toISOString().split('T')[0],
  width = 640,
  height = 360,
  autoPlay = false,
  controls = true,
  muted = false,
  loop = false,
  playsInline = true,
}) => {
  const videoId = videoSrc.split('/').pop()?.split('.')[0] || 'default-video-id';
  // const subtitleUrl = subtitleSrc?.replace('https://media.englishsegments.com', 'https://pub-8b8e1e7c1438487aac3cf54263c0f7bc.r2.dev')
  
  return (
    <>
      <Head>
        {/* Schema.org VideoObject structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: title,
              description: description,
              thumbnailUrl: posterSrc,
              uploadDate: uploadDate,
              duration: duration,
              contentUrl: videoSrc,

              // accessibilityFeature: ['captions'],
              // inLanguage: 'en',
            }),
          }}
        />
      </Head>
      
      <div className="video-container relative w-full h-full" itemScope itemType="https://schema.org/VideoObject">
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="uploadDate" content={uploadDate} />
        <meta itemProp="duration" content={duration} />
        <meta itemProp="thumbnailUrl" content={posterSrc} />
        <meta itemProp="contentUrl" content={videoSrc} />
        
        <video
          id={`video-${videoId}`}
          className="w-full h-full"
          width={width}
          height={height}
          poster={posterSrc}
          controls={controls}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload="metadata"
        >
          <source src={videoSrc} type={`video/${videoSrc.split('.').pop()}`} />

          {/* {subtitleSrc && (
            <track 
              kind="subtitles" 
              src={subtitleSrc} 
              label="English" 
              srcLang="en" 
              default 
            />
          )} */}
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

// Usage example in a Next.js page
// export default function VideoPage() {
//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-2xl font-bold mb-4">Product Demo Video</h1>
      
//       <VideoPlayer
//         videoSrc="/videos/product-demo.mp4"
//         posterSrc="/images/video-thumbnail.jpg"
//         title="Product Demonstration - Features Overview"
//         description="Watch our comprehensive walkthrough of key product features and benefits"
//         duration="PT2M30S" // ISO 8601 format
//         uploadDate="2025-04-01"
//         width={1280}
//         height={720}
//       />
//     </div>
//   );
// }

export default VideoPlayer;