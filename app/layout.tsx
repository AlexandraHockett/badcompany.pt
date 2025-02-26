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
  title: "BC Landia",
  description: "Experimente o mundo da BC Landia",
  openGraph: {
    title: "BC Landia",
    description: "Experimente o mundo da BC Landia",
    type: "website",
    locale: "pt_PT", // ou pt_BR se for português do Brasil
  },
  metadataBase: new URL("https://badcompany.pt"),
  robots: {
    index: true,
    follow: true,
  },
  other: {
    google: "notranslate", // Previne tradução automática do Google
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" translate="no">
      {" "}
      {/* Definido como português */}
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footerbc />
      </body>
    </html>
  );
}
