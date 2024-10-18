import type { Metadata } from "next";
import {Nunito_Sans} from "next/font/google";
import "./globals.css";

const Nunito_Sans = Nunito_Sans({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lista de Paises",
  description: "Criada com Next 13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={nunitoSans.className}
      >
        {children}
      </body>
    </html>
  );
}
