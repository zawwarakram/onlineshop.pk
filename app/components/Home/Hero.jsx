"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0)

  // Auto-rotate featured products
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full min-h-screen px-10 bg-gradient-to-br from-rose-50 via-white to-sky-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-pink-200/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-blue-200/20 to-transparent"></div>

      {/* Main content container */}
      <div className="container mx-auto px-4 py-12 h-screen flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side - Text content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left z-10">
          <div className="inline-block px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-2">
            New Season Collection
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Discover Stylish <span className="text-rose-600">Summer</span> Essentials
          </h1>

          <p className="text-lg text-gray-600 max-w-lg">
            Elevate your wardrobe with our curated collection of premium fashion items. Quality meets style in every
            piece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Link href="/collections">
            <button className="px-8 py-3 cursor-pointer bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Shop Collection
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
                </Link>
                <Link href="/Products">
            <button className="px-8 py-3 border-2 cursor-pointer border-gray-900 text-gray-900 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              View Lookbook
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
                </Link>
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-8 pt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">50+</p>
              <p className="text-gray-600">Brands</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">500+</p>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">24h</p>
              <p className="text-gray-600">Delivery</p>
            </div>
          </div>
        </div>

        {/* Right side - Image showcase */}
        <div className="w-full md:w-[575px] h-[400px] md:h-[650px] relative">
          {/* Main featured product */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[350px] md:w-[320px] md:h-[400px] z-20">
            <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
              <Image src="https://plus.unsplash.com/premium_photo-1683147746302-f5d920cede15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmclMjBnaXJsfGVufDB8fDB8fHww" alt="Featured Product" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold">Summer Collection</h3>
                <p className="text-sm opacity-80">Starting at $29.99</p>
              </div>
            </div>
          </div>

          {/* Floating product images */}
          <div
            className={`absolute top-[15%] left-[10%] w-[140px] h-[180px] md:w-[180px] md:h-[220px] z-10 transition-all duration-500 ${activeImage === 0 ? "scale-110 shadow-xl" : "scale-100 opacity-80"}`}
          >
            <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
              <Image src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" alt="Product 1" fill className="object-cover" />
            </div>
          </div>

          <div
            className={`absolute top-[20%] right-[10%] w-[140px] h-[180px] md:w-[180px] md:h-[220px] z-10 transition-all duration-500 ${activeImage === 1 ? "scale-110 shadow-xl" : "scale-100 opacity-80"}`}
          >
            <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
              <Image src="https://media.istockphoto.com/id/2187548708/photo/young-female-customer-paying-in-a-vintage-clothing-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=VlktvWv8sR0L2NtQXO3YHHGQuLqXtmX6N1W0gsiTU0Q=" alt="Product 2" fill className="object-cover" />
            </div>
          </div>

          <div
            className={`absolute bottom-[15%] left-[15%] w-[140px] h-[180px] md:w-[180px] md:h-[220px] z-10 transition-all duration-500 ${activeImage === 2 ? "scale-110 shadow-xl" : "scale-100 opacity-80"}`}
          >
            <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
              <Image src="https://media.istockphoto.com/id/2164807382/photo/making-the-best-of-the-day-together.jpg?s=612x612&w=0&k=20&c=ONB6q_9SXI4NOlfSwggNtbUYfJHdOIFvF-yuMNjJHD4=" alt="Product 3" fill className="object-cover" />
            </div>
          </div>

          <div
            className={`absolute bottom-[10%] right-[15%] w-[140px] h-[180px] md:w-[180px] md:h-[220px] z-10 transition-all duration-500 ${activeImage === 3 ? "scale-110 shadow-xl" : "scale-100 opacity-80"}`}
          >
            <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
              <Image src="https://media.istockphoto.com/id/2174156646/photo/cheerful-woman-enjoying-shopping-on-a-sunny-day-while-carrying-multiple-bags-in-an-urban.jpg?s=612x612&w=0&k=20&c=R9x6RB33O6CBZ3NgFshXFylWgE2sfEJi1pNOBi6jySI=" alt="Product 4" fill className="object-cover" />
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-[10%] left-[30%] w-32 h-32 rounded-full bg-rose-200/30 blur-xl"></div>
          <div className="absolute bottom-[20%] right-[20%] w-40 h-40 rounded-full bg-blue-200/30 blur-xl"></div>
        </div>
      </div>

      {/* Trending tags */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 text-sm font-medium text-gray-600 z-10">
        <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full hover:bg-gray-100 cursor-pointer">
          #SummerStyle
        </span>
        <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full hover:bg-gray-100 cursor-pointer">
          #NewArrivals
        </span>
        <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full hover:bg-gray-100 cursor-pointer">
          #Trending
        </span>
        <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full hover:bg-gray-100 cursor-pointer">
          #Exclusive
        </span>
      </div>
    </div>
  )
}

