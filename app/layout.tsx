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
  title: "Marketing Fitness",
  description: "My Marketing Fitness Next App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" sizes="any" />
      </head>
      <body>
        <Suspense fallback={<LoadingBar />}>{children}</Suspense>
      </body>
    </html>
  );
}
