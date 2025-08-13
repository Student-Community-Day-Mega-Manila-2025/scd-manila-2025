import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AWS Student Community Mega Manila 2025",
  description:
    "AWS Cloud Clubs Philippines is excited to host the first AWS Student Community Mega Manila this August 2025. Join us to learn from the story and advocacy of the community, industry, and academe experts, and many more AWSomeness.",
  keywords: [
    "AWS",
    "Student Community",
    "Manila",
    "2025",
    "Cloud Computing",
    "Technology Conference",
    "Philippines",
    "Education",
    "AWS Cloud Clubs",
    "Tech Event",
  ],
  authors: [{ name: "AWS Cloud Clubs Philippines" }],
  creator: "AWS Cloud Clubs Philippines",
  publisher: "AWS Cloud Clubs Philippines",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://scdmm.awscloudclubs.ph"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AWS Student Community Mega Manila 2025",
    description:
      "Join the first AWS Student Community Mega Manila this August 2025. Learn from community, industry, and academe experts in cloud computing and technology.",
    url: "/",
    siteName: "AWS Student Community Mega Manila 2025",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AWS Student Community Mega Manila 2025 Event",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Student Community Mega Manila 2025",
    description:
      "Join the first AWS Student Community Mega Manila this August 2025. Learn from community, industry, and academe experts.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "5ee95d165053e0bd",
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
        className={`${inter.variable} ${cinzelDecorative.variable} ${cinzel.variable} antialiased`}
      >
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
