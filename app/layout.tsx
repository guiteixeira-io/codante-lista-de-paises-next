import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({subsets:["latin"]});

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
      <body className={nunitoSans.className}>
        <main className="bg-gray-100 min-h-screen">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex items-center gap-3">
            <img  src="/logo.svg" alt="logo" width={48} height={48}/>
            <h1 font-bold text-2xl>Lista de Paises</h1>              
              
            </section>
          </nav>
          {children}
        </main>

      </body>
    </html>
  );
}
