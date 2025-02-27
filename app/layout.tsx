import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footerbc from "@/components/Footerbc";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BadCompany",
  description: "Experimente o mundo da BC Landia",
  openGraph: {
    title: "BC Landia",
    description: "Experimente o mundo da BC Landia",
    type: "website",
    locale: "pt_PT",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://badcompany.pt"
  ),
  robots: { index: true, follow: true },
  other: { google: "notranslate" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* This makes the main grow to push footer to the bottom */}
          {children}
        </main>
        <Footerbc />
      </body>
    </html>
  );
}
