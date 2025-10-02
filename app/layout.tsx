import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Link from "next/link";

const montserratSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"] //NOTE: To minimize build size, we only include the weights we need
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
      </body>
    </html>
  );
}
