"use client";
import { useEffect, useState } from "react";
import HeroSection from "./Hero";
import Features from "./Features";
import TrendingProducts from "./Trending";
import SummerSale from "./SummerSale";
import Reviews from "./Reviews";
import NewsLetter from "./NewsLetter";
import HowWeWork from "./HowWeWork";
import Lottie from "lottie-react";
import shoppingLoader from "./shoping-loader.json"; // your animation file


const Loader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    background: '#fff',
    flexDirection: 'column',
  }}>
    <Lottie animationData={shoppingLoader} loop={true} style={{ width: 390, height: 390 }} />
    {/* <p
    className="mx-auto md:text-[15px]"
    style={{
      marginTop: '1px',
      color: '#EC003F',
      fontSize: '1rem',
      
      fontWeight: 'bold',
    }}>
      Loading your awesome products...
    </p> */}
  </div>
);


export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // 25 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <Features />
          <TrendingProducts />
          <HowWeWork />
          <SummerSale />
          <Reviews />
          <NewsLetter />
        </>
      )}
    </>
  );
}