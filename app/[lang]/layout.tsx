import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/node_modules/flag-icons/css/flag-icons.min.css";
import 'rc-slider/assets/index.css';
import Script from "next/script";
import Lang from "@/types/lang";
import Favicon from "../../public/media/favicon.ico";

export const metadata: Metadata = {
  title: "English Segments",
  description: "Speak English with confidence - Learn English efficiently with our segmented approach",
  metadataBase: new URL('https://www.englishsegments.com/'),
  icons: [{ rel: "icon", url: Favicon.src }],
  openGraph: {
    type: "website",
    title: "English Segments - Speak English with confidence",
    description: "Learn English efficiently with our segmented approach to language learning",
    siteName: "English Segments",
    url: "https://www.englishsegments.com/",
    images: [
      {
        url: "https://www.englishsegments.com/media/cover.jpg",
        width: 795,
        height: 300,
        alt: "English Segments Cover"
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "English Segments - Speak English with confidence",
    description: "Learn English efficiently with our segmented approach to language learning",
    images: ["https://www.englishsegments.com/media/cover.jpg"]
  },
  alternates: {
    canonical: "https://www.englishsegments.com/"
  }
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link 
          rel="stylesheet" 
          href="https://emoji-css.afeld.me/emoji.css" 
          media="print" 
          onLoad={() => {(document.querySelector('link[href="https://emoji-css.afeld.me/emoji.css"]') as HTMLLinkElement).media = 'all'}}
        />
        
        {/* Icons and Favicons */}
        <link rel="icon" type="image/png" href="/media/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/media/favicon.svg" />
        <link rel="shortcut icon" href="/media/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/media/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="English Segments" />
        <link rel="manifest" href="/media/site.webmanifest" />
        
        {/* Mobile optimization */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Stylesheet with lower priority */}
        <link rel="stylesheet" href="https://emoji-css.afeld.me/emoji.css" media="print" onLoad="this.media='all'" />

        {/* Structured data for SEO */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "English Segments",
            "url": "https://www.englishsegments.com/",
            "description": "Speak English with confidence - Learn English efficiently with our segmented approach",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.englishsegments.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
      </head>
      <body>
        {children}
        
        {/* Load analytics after initial render */}
        <Script 
          id="gtag" 
          strategy="afterInteractive" 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-ZVCTZC0EQH" 
        />
        <Script 
          id="gconfig" 
          strategy="afterInteractive"
        >{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZVCTZC0EQH');        
        `}</Script>

        {/* Uncomment when ready for ads */}
        {/* <Script 
          id="adsense" 
          strategy="lazyOnload" 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3352560740569043"
          crossOrigin="anonymous" 
        /> */}
      </body>
    </html>
  );
}
