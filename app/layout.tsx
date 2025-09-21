import type { Metadata } from "next";
import { Inter,  Share_Tech_Mono} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  weight: [ '100', '200', '300', '400','500','600','700','800','900'],
  subsets: ["latin"],
});

const share_tech = Share_Tech_Mono({
  subsets: ['latin'],
  variable: '--font-tech',
  weight: "400"
})


export const metadata: Metadata = {
  title: "Mikaela Portfolio | Next.js 15",
  description: "Portfolio website built with Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${share_tech.variable} antialised bg-slate-950 `}
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
