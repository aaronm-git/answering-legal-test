import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const montserratSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "Answering Legal Test",
  description:
    "Answering Legal Test using Next.js app router and Tailwind CSS | By Aaron Molina - hire@aaronmolina.me - aaronmolina.me"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${montserratSans.variable}`}>
      <body className='relative font-sans antialiased'>
        <Nav />
        {children}
        <Toaster position='top-center' richColors />
        <Footer />
      </body>
    </html>
  );
}
