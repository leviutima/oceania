import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { CartProvider } from "./components/Cart/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oceânia",
  description: "Generated by create next app",
  icons: {
    icon: '/C-Baleia.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <CartProvider>
          <div className="page-container">
            <Header />
            <main className="content-wrap">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
