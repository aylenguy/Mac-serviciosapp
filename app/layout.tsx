import type { Metadata } from "next";
import "./globals.css";
import Providers from "./components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.macserviciosambientales.com"),
  title: "MAC Servicios Ambientales | Control de plagas en Rosario",
  description:
    "Fumigación y control de plagas, desinfección y limpieza de tanques de agua. Pedí tu presupuesto por WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MAC Servicios Ambientales | Control de plagas en Rosario",
    description:
      "Fumigación y control de plagas, desinfección y limpieza de tanques de agua. Pedí tu presupuesto por WhatsApp.",
    url: "https://www.macserviciosambientales.com",
    siteName: "MAC Servicios Ambientales",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}