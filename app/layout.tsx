import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignupPopup from "./components/Signup";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Shoping Pk",
  description: "Online Shoping Pk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
<html lang="en" suppressHydrationWarning>
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <Navbar/>
        <section className="mx-auto">
        {children}
        <SignupPopup />
        </section>
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
