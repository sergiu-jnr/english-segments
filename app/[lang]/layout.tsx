import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/node_modules/flag-icons/css/flag-icons.min.css";
import 'rc-slider/assets/index.css';
import Script from "next/script";
import Lang from "@/types/lang";
import Favicon from "../../public/media/favicon.ico"

export const metadata: Metadata = {
  title: "English Segments",
  description: "Speak English with confidence",
  metadataBase: new URL('https://www.englishsegments.com/'),
  icons: [{ rel: "icon", url: Favicon.src }],
  openGraph: {
    images: [
      {
        url: "https://www.englishsegments.com/media/cover.jpg",
        width: 795,
        height: 300,
      },
    ]
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}>) {
  const { lang } = await params

  return (
    <html lang={lang}>
      <head>
        <link rel="stylesheet" href="https://emoji-css.afeld.me/emoji.css" />
        <link rel="icon" type="image/png" href="https://www.englishsegments.com/media/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="https://www.englishsegments.com/media/favicon.svg" />
        <link rel="icon" href="https://www.englishsegments.com/media/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="https://www.englishsegments.com/media/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.englishsegments.com/media/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="English" />
        <link rel="manifest" href="https://www.englishsegments.com/media/site.webmanifest" />
        {/* <meta name="google-adsense-account" content="ca-pub-3923017048696264" />
        <Script id="adsense" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3352560740569043"
          crossOrigin="anonymous"></Script> */}

        <Script id="gtag" async src="https://www.googletagmanager.com/gtag/js?id=G-ZVCTZC0EQH"></Script>
        <Script id="gconfig">{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-ZVCTZC0EQH');        
`}</Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
