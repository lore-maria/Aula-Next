import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Biblioteca IFPB",
  description: "Biblioteca do IFPB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <main style={{minHeight:'calc(100vh - 100px)', paddingBottom:'70px'}}>
          {children}

        </main>

        <Footer />

      </body>
    </html>
  );
}