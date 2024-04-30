import type { Metadata } from "next";
import "./globals.css";
import { Oswald, Inter } from "next/font/google";
import { Suspense } from "react";
import { LoadingBar } from "@/_components/loading/loading-bar";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mymarketingfitness.com"),
  title: "My Marketing Fitness",
  description: "My Marketing Fitness: Marketing for Roofers and Contractors",
  keywords: [
    "roofing marketing",
    "contractor marketing",
    "roofing SEO",
    "contractor SEO",
    "roofing digital marketing",
    "contractor digital marketing",
    "roofing online marketing",
    "contractor online marketing",
    "roofing marketing strategies",
    "contractor marketing strategies",
    "roofing marketing tips",
    "contractor marketing tips",
    "roofing marketing plan",
    "contractor marketing plan",
    "roofing marketing tools",
    "contractor marketing tools",
    "roofing marketing software",
  ],
  openGraph: {
    title: "My Marketing Fitness",
    description:
      "Discover the best marketing strategies for roofers and contractors. Boost your online presence with our comprehensive marketing solutions.",
    images: [
      {
        url: "/logo.svg",
        width: 217,
        height: 58,
        alt: "My Marketing Fitness Logo",
      },
    ],
    url: "https://www.mymarketingfitness.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" sizes="any" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com/" />
      </head>
      <body className={`${oswald.variable} ${inter.variable}`}>
        <Suspense fallback={<LoadingBar />}>{children}</Suspense>
      </body>
    </html>
  );
}
