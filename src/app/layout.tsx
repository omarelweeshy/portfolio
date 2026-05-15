import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Omar Ashraf — AI Engineer & Full Stack Developer",
  description:
    "Omar Ashraf is an AI Engineer, Full Stack Developer, and Creative Technologist from Cairo, Egypt. Building intelligent systems, scalable digital experiences, and modern AI-powered solutions.",
  keywords: [
    "Omar Ashraf",
    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Cairo",
    "Egypt",
    "Portfolio",
    "Creative Technologist",
  ],
  authors: [{ name: "Omar Ashraf" }],
  creator: "Omar Ashraf",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Omar Ashraf — AI Engineer & Full Stack Developer",
    description:
      "Building intelligent systems, scalable digital experiences, and modern AI-powered solutions.",
    siteName: "Omar Ashraf Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Ashraf — AI Engineer & Full Stack Developer",
    description:
      "Building intelligent systems, scalable digital experiences, and modern AI-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Scroll progress */}
        <ScrollProgress />

        {/* Noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Custom cursor (desktop only) */}
        <div className="hidden md:block">
          <CustomCursor />
        </div>

        {/* Smooth scroll provider */}
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
