import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = "Omar Ashraf | AI & Automation Engineer";
const description =
  "AI and automation engineer in Cairo. Human-approved workflow automation, predictive models and document intelligence that ship and get used.";

export const metadata: Metadata = {
  metadataBase: new URL("https://omarelweeshy.vercel.app"),
  title,
  description,
  authors: [{ name: "Omar Ashraf" }],
  creator: "Omar Ashraf",
  openGraph: { type: "website", locale: "en_US", title, description, siteName: "Omar Ashraf" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0c0c0b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <noscript>
          <style>{`.preloader{display:none!important}.js-hide{visibility:visible!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
