import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Define la URL pública base para que los previews resuelvan la URL absoluta
  metadataBase: new URL("https://jy-soluciones-tech.vercel.app"),
  title: "JY Soluciones Tech | Software a Medida & Cloud",
  description:
    "Desarrollo de sistemas web, control de inventarios, cotizadores rápidos y arquitectura cloud en Lima, Perú.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "JY Soluciones Tech | Software a Medida & Cloud",
    description:
      "Impulsamos tu negocio con tecnología y sistemas web a medida.",
    url: "https://jy-soluciones-tech.vercel.app",
    siteName: "JY Soluciones Tech",
    images: [
      {
        url: "/logo-jy.png",
        width: 500,
        height: 400,
        alt: "JY Soluciones Tech - Software a Medida",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
