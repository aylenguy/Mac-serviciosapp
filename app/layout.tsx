import type { Metadata } from "next";
import "./globals.css";
import Providers from "./components/Providers";

export const metadata: Metadata = {
  title: "MAC Servicios Ambientales | Control de plagas en Rosario",
  description:
    "Fumigación y control de plagas, desinfección y limpieza de tanques de agua. Pedí tu presupuesto por WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}