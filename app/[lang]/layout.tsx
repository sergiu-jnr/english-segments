import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/node_modules/flag-icons/css/flag-icons.min.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "English Segments",
  description: "Speak English with confidence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="stylesheet" href="https://emoji-css.afeld.me/emoji.css" />
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
