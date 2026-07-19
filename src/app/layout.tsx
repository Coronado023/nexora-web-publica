import type { Metadata } from "next";
import { brand } from "@/data/site";
import "./globals.css";

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
        url: "/brand/new/nexora.png",
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
    images: ["/brand/new/nexora.png"],
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
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
