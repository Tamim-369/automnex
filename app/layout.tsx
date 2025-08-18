import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Automnex | AI Solutions & Intelligent Automation",
  description: "Transform your ideas into reality with cutting-edge AI solutions. We build custom AI agents, software, and automation systems for businesses of all sizes.",
  keywords: "AI solutions, AI agents, artificial intelligence, automation, machine learning, custom software, business intelligence",
  authors: [{ name: "Automnex Team" }],
  openGraph: {
    title: "Automnex | AI Solutions & Intelligent Automation",
    description: "Transform your ideas into reality with cutting-edge AI solutions. We build custom AI agents, software, and automation systems for businesses of all sizes.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automnex | AI Solutions & Intelligent Automation",
    description: "Transform your ideas into reality with cutting-edge AI solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <meta name="google-site-verification" content="VH58kUrv42-15apewxi2IZ2tmnf1X3hK3aP0a33N7F8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}