import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignupPopup from "./components/Signup";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Shopping PK | Pakistan's Trusted Online Store for Fashion, Electronics & More",
  description:
    "Shop the latest fashion, electronics, mobiles, home appliances & more at unbeatable prices in Pakistan. Online Shopping PK offers fast delivery, secure payment, and 24/7 support. Trusted by thousands nationwide. Start shopping today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <Head>
          {/* Primary SEO */}
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="online shopping in Pakistan, buy electronics online, fashion store Pakistan, cheap mobile phones, home appliances Pakistan, best online store, trusted ecommerce Pakistan" />
          <meta name="author" content="Online Shopping PK" />

          {/* Open Graph / Facebook */}
          <meta property="og:title" content="Online Shopping PK | Trusted Online Store in Pakistan" />
          <meta property="og:description" content="Shop fashion, gadgets, mobiles & more at unbeatable prices in Pakistan. Fast delivery, secure payments & 24/7 support." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://onlineshop-pk.vercel.app/" />
          <meta property="og:image" content="https://onlineshop-pk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogoshop.8572e8d0.png&w=256&q=75" />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Online Shopping PK | Trusted Online Store in Pakistan" />
          <meta name="twitter:description" content="Discover affordable online shopping in Pakistan for fashion, gadgets, and more. Fast delivery & secure payments." />
          <meta name="twitter:image" content="https://onlineshop-pk.vercel.app/" />
        </Head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
        >
          <Navbar />
          <section className="mx-auto">
            {children}
            <SignupPopup />
          </section>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
