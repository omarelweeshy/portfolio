import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Omar Ashraf | AI, data & digital experiences",
  description:
    "AI engineer and digital innovation specialist in Cairo. Selected work in machine learning, data intelligence, and web development.",
  authors: [{ name: "Omar Ashraf" }],
  creator: "Omar Ashraf",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Omar Ashraf | Intelligence. With intent.",
    description: "Selected work in AI engineering, data intelligence, and digital experiences.",
    siteName: "Omar Ashraf Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Omar Ashraf | Intelligence. With intent.",
    description: "Selected work in AI engineering, data intelligence, and digital experiences.",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
