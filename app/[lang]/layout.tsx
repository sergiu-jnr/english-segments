import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/node_modules/flag-icons/css/flag-icons.min.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
