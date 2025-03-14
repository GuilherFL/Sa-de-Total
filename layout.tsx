import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
import { Toaster } from "./_components/ui/sonner";
import AuthProvider from "./_providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saúde Total | Cuide da sua saúde de forma simples e completa!",
  description: "Saúde Total é o seu parceiro para uma vida mais saudável. Agende consultas, acompanhe resultados de exames e receba dicas personalizadas. Tudo em um só lugar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <AuthProvider>
          <div className="flex-1">
            {children}
          </div>
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
