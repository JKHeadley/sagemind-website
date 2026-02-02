import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SageMind AI | Custom Solutions, Built for You",
  description: "Custom websites, Google Workspace solutions, and custom AI applications. We craft tailored solutions that fit your unique business needs. Fast delivery, 100% custom.",
  keywords: ["custom websites", "Google Workspace solutions", "AI applications", "custom software", "small business websites", "data solutions", "Bay Area"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "SageMind AI | Custom Solutions, Built for You",
    description: "Custom websites, Google Workspace solutions, and custom AI applications. We craft tailored solutions that fit your unique business needs.",
    url: "https://sagemindai.io",
    siteName: "SageMind AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SageMind AI | Custom Solutions, Built for You",
    description: "Custom websites, Google Workspace solutions, and custom AI applications. We craft tailored solutions that fit your unique business needs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-bright-cyan focus:text-near-black focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
