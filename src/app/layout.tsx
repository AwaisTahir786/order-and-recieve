import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import CartProvider from "@/components/Providers";
import ShoppingCartModel from "@/components/ShoppingCartModel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Order & Receive",
  description: "E-commerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <CartProvider>
          <Navbar/>
          <ShoppingCartModel/>
          {children}
          </CartProvider>
      </body>
    </html>
  );
}
