import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from './components/navigationbar';
import NavigationBarAfterLogin from "./components/navigationbarafterlogin";
import Footer from "./components/footer";
import user from './lib/utils/user';

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
        {user && <NavigationBarAfterLogin />}
        {!user && <NavigationBar />}
        <div className=" mt-24 ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
