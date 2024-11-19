import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/Nav";
import Footer from "@/components/Home/Footer";

import StoreProvider from "@/StoreProvider/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebDev sho | Next JS",
  description: "Webdev warriors shop using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
        <html lang="en">
          <body className={inter.className}>
            <Nav />

            {children}
            <Footer />
          </body>
        </html>
    </StoreProvider>
  );
}
