import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karakoram Baltistan Pakistan | Trekking & Adventure Tours",
  description: "Explore Pakistan's majestic Karakoram mountains with expert local guides. K2 Base Camp treks, Fairy Meadows, Hunza Valley tours, and more. Safe, authentic, unforgettable adventures since 2009.",
  keywords: [
    "K2 Base Camp Trek",
    "Pakistan trekking",
    "Karakoram tours",
    "Baltistan adventures",
    "Fairy Meadows",
    "Hunza Valley",
    "Skardu tours",
    "Concordia trek",
    "Gondogoro La",
    "Pakistan adventure travel",
  ],
  authors: [{ name: "Karakoram Baltistan Pakistan" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Karakoram Baltistan Pakistan | Trekking & Adventure Tours",
    description: "Your gateway to the world's greatest mountains. K2 Base Camp, Fairy Meadows, Hunza Valley - discover Pakistan's majestic Karakoram with expert local guides.",
    url: "https://karakorambaltistan.pk",
    siteName: "Karakoram Baltistan Pakistan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
