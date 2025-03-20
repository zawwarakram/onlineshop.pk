import HeroSection from "./Hero";
import Features from "./Features"
import TrendingProducts from "./Trending"
import SummerSale from "./SummerSale"
import Reviews from "./Reviews"
import NewsLetter from "./NewsLetter"
export default function Home() {
    return (
        <>
        <HeroSection/>
        <Features/>
        <TrendingProducts/>
        <SummerSale/>
        <Reviews/>
        <NewsLetter/>
        </>
    );
}