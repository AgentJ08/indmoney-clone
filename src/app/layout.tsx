import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from './components/navigationbar';
import Footer from "./components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INDMoney: Track, Plan & Invest in Stocks, SIP in Mutual Funds to Grow Your Wealth",
  description: "A personal portfolio expense tracker and investment application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} flex flex-col `}>
        <NavigationBar />
        <div className=" mt-24 ">
          {children}
        </div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
