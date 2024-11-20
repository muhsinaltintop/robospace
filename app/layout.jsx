import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata  = {
  title: {default: "Güneş Panel Temizleme Robotu - RoboSpace",
    template: "%s - Güneş Panel Temizleme Robotu - RoboSpace"
  },
  description: "Güneş Panel Temizleme Robotu, Güneş Paneli yıkama Makinası, GES temizlik Robotu,  panel temizleme Robotu",
  keywords: ['Güneş Panel Temizleme Robotu', 'Güneş Paneli Yıkama Makinası', 'GES Temizlik Robotu',  'Panel Temizleme Robotu'],
  // twitter: {
  //   card: "summary_"
  // }
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
       
      </body>
    </html>
  );
}
