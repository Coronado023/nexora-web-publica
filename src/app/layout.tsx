import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { brand } from "@/data/site";
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
  title: "Nexora | Impresion 3D, tecnologia y desarrollo digital",
  description:
    "Nexora crea soluciones de impresion 3D, automatizacion, diseno moderno y desarrollo digital.",
  metadataBase: new URL(brand.siteUrl),
  openGraph: {
    title: "Nexora | Ideas que toman forma",
    description:
      "Impresion 3D, tecnologia, automatizacion y desarrollo digital para marcas modernas.",
    url: brand.siteUrl,
    siteName: "Nexora",
    images: [
      {
        url: "/brand/nexora-logo.jpeg",
        width: 1200,
        height: 1200,
        alt: "Logo oficial Nexora",
      },
    ],
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora | Ideas que toman forma",
    description: "Impresion 3D, tecnologia y desarrollo digital.",
    images: ["/brand/nexora-logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
