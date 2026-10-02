import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JY Soluciones Tech | Software a Medida & Cloud",
  description:
    "Desarrollo de sistemas web, control de inventarios, cotizadores rápidos y arquitectura cloud de alta disponibilidad en Lima, Perú.",
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/logo-jy.png?v=2",
  },
  openGraph: {
    title: "JY Soluciones Tech | Software a Medida & Cloud",
    description:
      "Impulsamos tu negocio con tecnología y sistemas web a medida.",
    url: "https://jysoluciones.tech",
    siteName: "JY Soluciones Tech",
    images: [
      {
        url: "/logo-jy.png",
        width: 800,
        height: 600,
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
