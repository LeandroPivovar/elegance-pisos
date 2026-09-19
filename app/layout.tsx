import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elegance Pisos | Venda e Instalação",
  description: "Pisos e revestimentos com curadoria, medição e instalação especializada.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
