import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: "swap", weight: ["500", "600"] });

export const metadata: Metadata = {
  title: "Elegance Pisos | Venda e Instalação",
  description: "Pisos e revestimentos com curadoria, medição e instalação especializada.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}><body>{children}</body></html>;
}
