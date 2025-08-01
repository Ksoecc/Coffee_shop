import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brew & Bean - El Yapımı Kahve Dükkanı",
  description: "En kaliteli el yapımı kahveyi keşfedin, taze kavrulmuş ve uzmanlıkla demlenmiş. Rahat atmosferimizde mükemmel fincanın keyfini çıkarın.",
  keywords: "kahve, el yapımı kahve, kahve dükkanı, özel kahve, espresso, latte, cappuccino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
