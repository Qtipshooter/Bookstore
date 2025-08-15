import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer"
import Header from "@/components/header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bookstore",
  description: "Bookstore Example Project for Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header></Header>
        <main className="bg-primary-bg flex-grow">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
