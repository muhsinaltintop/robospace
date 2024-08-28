import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RoboSpace Solar Panel Yıkama Robotu",
  description: "Temiz enerji için temiz güneş panelleri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Header />
        <div className="mx-10">
        {children}
        </div>
        <Footer />
        <SpeedInsights/>
        
      </body>
    </html>
  );
}
