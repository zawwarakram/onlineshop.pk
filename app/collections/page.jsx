"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import bag1 from "../assets/bag1.png"
import bag3 from "../assets/bag3.png"
import watch002 from "../assets/watch002.png"
// Sample product data
const productData = [
  {
    // .
    // product link:  Women Mesh Magnetic Buckle Starry Sky Luxury Fashion Watch with Magnetic Strip for College/Office
    id: 30,
    name: "Luxury Starry Sky Women's Watch – Magnetic Elegance for Every Day",
    price: 700,
    originalPrice: 999,
    rating: 4.9,
    image:
     watch002,
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/aeaafa80c9e26fbc4d4c2350495097d3.jpg_720x720q80.jpg_.webp",
    description:
     ` 100% Brand new and well packed in retail packing as purchased from manufacturer.
- This product is highly recommended by many customers around the globe.
- No any side effects have been registered yet.
- This product has most of the positive reviews on international e-commerce sites like amazon or aliexpress.`,
  },{
    id: 8,
    name: "Handbag for girls - Leather Bag for women - Shoulder bags for ladies - casual handbag - Phone pouch - Crossbody & Shoulder bag - Purse for girls",
    price: 1599,
    originalPrice: 2299,
    rating: 5.0,
    image:
      // "https://img.drz.lazcdn.com/static/pk/p/f56a56534f99ec01ce4e09aca29985fd.jpg_720x720q80.jpg_.webp",
      bag1,
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/d301738b58934c8b990b9410491a25b4.jpg_720x720q80.jpg_.webp",
    description:
      "PRODUCT DETAILS Structure: This Stylish Bag having Moderate capacity that can hold your books, purses, and lots of other things comfortably.",
  },
  {
    id: 9,
    name: "Mobile Phone Stand For Phone Retractable Holder Desk Table",
    price: 620,
    originalPrice: 850,
    rating: 4.9,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/03694657ce3560c31c3fc78adb303ada.jpg_720x720q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/85e2cb8c83d41b809f5d4ae2ef60bcc8.jpg_720x720q80.jpg_.webp",
    description:
      "The multifunctional live broadcast support is a good helper for live broadcast and TV watching.",
  },
  {
    id: 10,
    name: "Musk Al Mahal - Black And Silver Original Attar For Men - 12ml",
    price: 2099,
    originalPrice: 2399,
    rating: 5.0,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/727e1bfad2d99871c26695cf700b8a4c.jpg_720x720q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/e9ba9a80f72ea7e7fb03f3ff5d246c5b.jpg_720x720q80.jpg_.webp",
    description:
      "Product details of Musk Al Mahal - Black And Silver Original Attar For Men - 12ml Pakistan's No.#1 Attar Brand Affordable Pricing",
  },
  {
    id: 11,
    name: "The Legend | Finest Classical - Modern Combo Perfume | 50ml",
    price: 1850,
    originalPrice: 2350,
    rating: 5,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/f65408f5ab3da5042e39b6cb570d8e10.png_720x720q80.png_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/f3e1823df660842d398e1f4389a0e329.png_720x720q80.png_.webp",
    description:
      "The Legend | Finest Classical - Modern Combo Perfume | Scents N Stories | 50ml",
  },
  {
    id: 12,
    name: "Chukoor Slim Long Mobile Money and Card holder Wallet",
    price: 650,
    originalPrice: 999,
    rating: 5.0,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/811006b7477e95801e732c00ac93d2f8.jpg_720x720q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/f1e107a3b8164883718c2b3d05a2c882.jpg_720x720q80.jpg_.webp",
    description:
      "Are you tired of struggling with cluttered, bulky wallets that cramp your style?",
  },
  {
    id: 13,
    name: "Pack of 2 perfumes black car and black market best for gift 100 ml each",
    price: 1999,
    originalPrice: 2365,
    rating: 4.9,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/9cab0addfff3ffd0065dbf210d85a919.jpg_720x720q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/2118a48d4b8b0e2fd0aefcaa1f14d201.jpg_720x720q80.jpg_.webp",
    description:
      "Product details of Impression of Black Car Perfume For Men 100 ml CAR PERFUME FOR MEN 100ML, 100% Original BEST PERFUME FOR MEN",
  },
  {
    id: 14,
    name: "Florse | Our Best Floral Fragrance | Pocket Perfume | 5ml",
    price: 750,
    originalPrice: 799,
    rating: 4.9,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/cc39782c733f04410bc22cabf70f06ad.jpg_720x720q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/cc39782c733f04410bc22cabf70f06ad.jpg_720x720q80.jpg_.webp",
    description:
      "Product details of Florse | Our Best Floral Fragrance | Pocket Perfume | 5ml 15 Days Easy Returns",
  },
  {
    id: 15,
    name: "Afnan 9pm EDP 100ml For Men - Best designer perfumes",
    price: 6199,
    originalPrice: 6999,
    rating: 4.9,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/e50bdf271c6c095f35d9c54fba007ed0.jpg_720x720q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/fe1e9fb7b1aed14167a2279f05fa1775.jpg_720x720q80.jpg_.webp",
    description:
      "The Title says it all. 9 pm edp can be found for as low as 16€. Doesn't smell synthetic at all.",
  },
  {
    id: 16,
    name: "Handbag for girls - Bags for girls - Leather Bag for women - Shoulder bags for ladies - casual handbag - Phone pouch - Crossbody & Shoulder bag for gift - Purse for girls",
    price: 1599,
    originalPrice: 2299,
    rating: 5.0,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/f56a56534f99ec01ce4e09aca29985fd.jpg_720x720q80.jpg_.webp",
    hoverImage:
      bag3,
    description:
      "Handbag for girls - Leather Bag for women - Shoulder bags for ladies - casual handbag - Phone pouch - Crossbody & Shoulder bag - Purse for girls",
  },
  {
    id: 17,
    name: "[1pc Men'S Fashion Quartz Watch] Men'S Quartz Wrist Watch, Business Style, Round Alloy Case, PU Leather Strap, Non-Rechargeable Battery, Fashionable Casual Business Watches",
    price: 999,
    originalPrice: 1099,
    rating: 5.0,
    image:
      "https://img.kwcdn.com/product/fancy/161af33d-8c8b-474b-a005-3cef170a8e62.jpg?imageView2/2/w/800/q/70/format/webp",
    hoverImage:
      "https://img.kwcdn.com/product/fancy/0a650c99-bcae-4e4d-a15b-103e694b5b7c.jpg?imageView2/2/w/800/q/70/format/webp",
    description:
      "Strap Material: PU Leather Watches case material: Alloy Dial Shape: Round Water Resistance Level: Non - Waterproof Style: Business Movement: Quartz Watches Connection Method: None Drive Mode: Electronic Feature: Other Display Type: Pointer Wireless Property: none Wearing Instructions: Regular Cleaning Power Mode: Battery Powered Operating Voltage: ≤36V Battery Properties: Non-rechargeable Battery ",
  },
  {
    id: 18,
    name: "Vintage-Inspired Black Stone Ring - Classic Wide Band, Fashionable Copper",
    price: 600,
    originalPrice: 899,
    rating: 5.0,
    image:
      "https://img.kwcdn.com/product/fancy/c29350b9-aa00-4d15-a883-4f6d58c65677.jpg?imageView2/2/w/800/q/70/format/webp",
    hoverImage:
      "https://img.kwcdn.com/product/fancy/636e0199-5162-413b-ac52-ad882d455fcc.jpg?imageView2/2/w/800/q/70/format/webp",
    description: `Plating: No Plating
    Mosaic Material: No Mosaic Material
    Main Material: Copper
    Type: Single Ring
S   tyle: Fashion`,
  },
  {
    id: 20,
    name: "Retro Square Polarized Glasses for Men and Women - Durable Plastic Frame, Anti-Reflective Gradient Lens, Adjustable Hinges, Ideal for Running and Outdoor Activities, Climbing Sports Eyewearg",
    price: 699,
    originalPrice: 850,
    rating: 5.0,
    image:
      "https://img.kwcdn.com/product/fancy/ac4a4124-fb49-42ad-bafe-4fe990cc6872.jpg?imageView2/2/w/800/q/70/format/webp",
    hoverImage:
      "https://img.kwcdn.com/product/fancy/0020277c-7265-484e-b285-b82c2a3a8010.jpg?imageView2/2/w/800/q/70/format/webp",
    description: `Sport Type: Climbing
Sunglasses Category: Ordinary Decorative Eyeglasses
Frame Material: PC
Lens Material: TAC`,
  },
  {
    id: 21,
    name: "Retro Square Polarized Glasses for Men and Women - Durable Plastic Frame, Anti-Reflective Gradient Lens, Adjustable Hinges, Ideal for Running and Outdoor Activities, Climbing Sports Eyewearg",
    price: 999,
    originalPrice: 1099,
    rating: 5.0,
    image:
      "https://img.kwcdn.com/product/fancy/17fcb669-a44e-4a9d-b17c-5dd913d8ee1d.jpg?imageView2/2/w/800/q/70/format/webp",
    hoverImage:
      "https://img.kwcdn.com/product/fancy/0020277c-7265-484e-b285-b82c2a3a8010.jpg?imageView2/2/w/800/q/70/format/webp",
    description: `Sport Type: Climbing
Sunglasses Category: Ordinary Decorative Eyeglasses
Frame Material: PC
Lens Material: TAC`,
  },
  {
    id: 22,
    name: "Gemstone Rings Fashionable Popular Simple Hundred Matching Size Available Party, Birthday, Holiday Gift",
    price: 799,
    originalPrice: 610,
    rating: 5.0,
    image:
      "https://img.kwcdn.com/product/fancy/b6fa2418-0b76-4b26-a306-b19570df568e.jpg?imageView2/2/w/800/q/70/format/webp",
    hoverImage:
      "https://img.kwcdn.com/product/fancy/43907d81-c3ce-4cd9-a8d2-eb673e9ef22a.jpg?imageView2/2/w/800/q/70/format/webp",
    description: `Sport Type: Climbing
Sunglasses Category: Ordinary Decorative Eyeglasses
Frame Material: PC
Lens Material: TAC`,
  },
  {
    id: 19,
    name: "Professional Hair Clippers And Beard Trimmer Set, Cordless USB Rechargeable Electric Haircut Kit, with Sharp Blade, ≤36V Operating Voltage, with 4 Guide Combs, for Men'S Grooming",
    price: 1099,
    originalPrice: 999,
    rating: 5.0,
    image:
      "https://img.kwcdn.com/product/fancy/b1047f82-ccd9-417a-b56b-4c4bd5aed773.jpg?imageView2/2/w/800/q/70/format/webp",
    hoverImage:
      "https://img.kwcdn.com/product/fancy/8c19207f-e350-48ba-b01b-2979149da422.jpg?imageView2/2/w/800/q/70/format/webp",
    description: `Plating: No Plating
Mosaic Material: Glass
Main Material: Alloy
Type: Single Ring
Style: Glam`,
  },
  {
    id: 1,
    name: "Pack of 2 trousers for men_Trending colors trousers for men",
    price: 1033,
    originalPrice: 1350,
    rating: 4.8,
    image:
      "https://img.drz.lazcdn.com/g/kf/Sa586e24372734166baeb97ccb81c7c6bv.jpg_720x720q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/g/kf/S7c0f2f0e95f44c82af26684d06c6d55dX.jpg_720x720q80.jpg_.webp",
    description:
      "Product details of Pack of 2 trousers for men_Trending colors trousers for men_Stylish trousers",
  },
  {
    id: 2,
    name: "Queen Printed Pink Color Lounge Wear Nightwear Sleepwear",
    price: 1360,
    originalPrice: 1499,
    rating: 4.6,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/65c2b80bf14e5fa429e03ebf80d722ba.jpg_400x400q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/5804ca79b1763226ce0260865e9bb9cd.jpg_720x720q80.jpg_.webp",
    description: "Cozy Women's Lounge Wear with Heart-Printed Trousers",
  },
  {
    id: 3,
    name: "Premium Laptop Backpack B210 – 16-Inch, Lightweight",
    price: 1345,
    originalPrice: 1650,
    rating: 4.9,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/db38fdcc53b7892dcdb2bd4c74d787f9.jpg_720x720q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/b669ad9f6eac1fbcb91c1cb5a1d71e2a.jpg_720x720q80.jpg_.webp",
    description:
      "Product details of Premium Laptop Backpack B210 – 16-Inch, Lightweight & Water-Repellent",
  },
  {
    id: 4,
    name: "Waterproof Fanny Pack Waist Belt Bag Purse Outdoor Sport",
    price: 1350,
    originalPrice: 1450,
    rating: 5.0,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/e550a04eb5e7be012be302910dd3f131.jpg_720x720q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/c4a5ec30f2158d9cbc8bcf6b61949ac0.jpg_720x720q80.jpg_.webp",
    description:
      "Product details of Waterproof Fanny Pack Waist Belt Bag Purse Outdoor Sport Running Camping Waist pack",
  },
  {
    id: 5,
    name: "7 in 1 Smart Watch - 7 Straps Smart watch",
    price: 1999,
    originalPrice: 2365,
    rating: 4.9,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/e9901bff069f91e5e2cf26d10c166bd2.jpg_720x720q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/1ac390f1dc83c5f34a6f2b2cf3166727.jpg_720x720q80.jpg_.webp",
    description:
      "7-in-1 Smart Watch: Your Ultimate Wearable Companion Experience the Future of Smart Watches",
  },
  {
    id: 6,
    name: "Water Bottles, Glass/Plastic 400 ML Water bottles",
    price: 599,
    originalPrice: 850,
    rating: 4.6,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/12fb392c98ac9dd27d7117520f9728ad.jpg_720x720q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/c0b003fab3f92db611935fce72b01ed2.jpg_720x720q80.jpg_.webp",
    description:
      "Product details of Water Bottles, Glass/Plastic 400 ML Water bottles, Sports water bottles Double walled",
  },
  {
    id: 7,
    name: "Stylish 400ml Glass Water Bottle for Girls & Boys",
    price: 499,
    originalPrice: 650,
    rating: 4.9,
    image:
      "https://img.drz.lazcdn.com/static/pk/p/2f0fab5cf2baabc839fcd4586ca46dd0.jpg_720x720q80.jpg_.webp",
    hoverImage:
      "https://img.drz.lazcdn.com/static/pk/p/f5084d4671793decf71994abcccfc59e.jpg_720x720q80.jpg_.webp",
    description:
      "Product details of Stylish 400ml Glass Water Bottle for Girls & Boys - Insulated Leakproof Design",
  },
];

// Get unique categories from product data
const categories = []

// Featured collections
const collections = [
  { name: "Summer Essentials", image: "https://media.istockphoto.com/id/612483800/photo/confident-woman-smiling.jpg?s=612x612&w=0&k=20&c=IOpUA4em1N9lX7vEQPCPZPCdB_pwGCUeaviYVxhk7n4=", count: 24 },
  { name: "Tech Gadgets", image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGVjaCUyMEdhZGdldHN8ZW58MHx8MHx8fDA%3D", count: 18 },
  { name: "Home & Kitchen", image: "https://img.drz.lazcdn.com/static/pk/p/8e7a4359b44f12791acb91a5585db7d0.jpg_400x400q75.avif", count: 32 },
]

export default function ProductsPage() {
  const [products, setProducts] = useState(productData)
  const [filteredProducts, setFilteredProducts] = useState(productData)
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [priceRange, setPriceRange] = useState([0, 3000])
  const [sortOption, setSortOption] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [isScrolled, setIsScrolled] = useState(false)

  const productsPerPage = 18

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Filter and sort products
  useEffect(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory) {
      result = result.filter((product) => product.category === selectedCategory)
    }

    // Filter by active tab
    if (activeTab === "new") {
      result = result.filter((product) => product.isNew)
    } else if (activeTab === "sale") {
      result = result.filter((product) => product.originalPrice !== null)
    }

    // Filter by price range
    result = result.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

   // Filter by search query
if (searchQuery) {
  const query = searchQuery.toLowerCase()
  result = result.filter((product) => {
    const name = product.name?.toLowerCase() || ""
    const category = product.category?.toLowerCase() || ""
    const tags = Array.isArray(product.tags)
      ? product.tags.map((tag) => tag?.toLowerCase() || "")
      : []

    return (
      name.includes(query) ||
      category.includes(query) ||
      tags.some((tag) => tag.includes(query))
    )
  })
}


    // Sort products
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        result.sort((a, b) => b.price - a.price)
        break
      case "newest":
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      default: // featured or any other case
        // Keep original order
        break
    }

    setFilteredProducts(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [products, selectedCategory, priceRange, sortOption, searchQuery, activeTab])

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Handle price range change
  const handlePriceChange = (min, max) => {
    setPriceRange([min, max])
  }

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory(null)
    setPriceRange([0, 3000])
    setSortOption("featured")
    setSearchQuery("")
    setActiveTab("all")
  }

  return (
    <div className="bg-gray-50 mt-4 min-h-screen">
      {/* Hero Banner */}

      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 h-[300px] md:h-[450px] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {/* <Image src="/placeholder.svg?height=1000&width=2000" alt="Products Banner" fill className="object-cover" /> */}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Discover Our Collection</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
            Explore our curated selection of premium products designed for style and comfort
          </p>

          {/* Search bar in hero */}
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 ring-4 py-4 rounded-full shadow-lg focus:outline-none focus:ring-1  text-white"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white absolute left-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Featured Collections</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative h-60 md:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={collection.image || "/placeholder.svg"}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1 truncate line-clamp-2 ">{collection.name}</h3>
                <p className="text-white/80 text-sm mb-3">{collection.count} Products</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-white text-sm font-medium group-hover:text-white transition-colors"
                >
                  Explore Collection
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sticky Header with Tabs */}
      <div
        className={`sticky top-0 z-30 bg-white border-b border-gray-200 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <div className="flex items-center space-x-6 mb-4 md:mb-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "all" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setActiveTab("new")}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "new" ? "bg-rose-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                New Arrivals
              </button>
              <button
                onClick={() => setActiveTab("sale")}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "sale" ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                On Sale
              </button>

              {categories.slice(0, 3).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setActiveTab("all")
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-60 hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
              >
                <option value="featured">Sort: Featured</option>
                <option value="newest">Sort: Newest</option>
                <option value="rating">Sort: Top Rated</option>
                <option value="price-low-high">Sort: Price Low-High</option>
                <option value="price-high-low">Sort: Price High-Low</option>
              </select>

              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters - desktop */}
          <div className={`w-full md:w-64 md:block ${mobileFiltersOpen ? "block" : "hidden"}`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button onClick={resetFilters} className="text-sm text-rose-600 hover:text-rose-800 transition-colors">
                  Reset All
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Categories
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="all-categories"
                      type="radio"
                      name="category"
                      checked={selectedCategory === null}
                      onChange={() => setSelectedCategory(null)}
                      className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                    />
                    <label htmlFor="all-categories" className="ml-2 text-sm text-gray-700">
                      All Categories
                    </label>
                  </div>

                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`category-${category}`}
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Price Range
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Rs. {priceRange[0]}</span>
                    <span className="text-sm font-medium text-gray-900">Rs. {priceRange[1]}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute h-1 bg-gray-200 rounded-full left-0 right-0 top-1/2 transform -translate-y-1/2"></div>
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(priceRange[0], Number.parseInt(e.target.value))}
                      className="w-full h-2 bg-transparent appearance-none cursor-pointer accent-rose-600"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handlePriceChange(0, 1000)}
                      className={`text-xs px-3 py-1 rounded-full transition-colors ${
                        priceRange[0] === 0 && priceRange[1] === 1000
                          ? "bg-rose-100 text-rose-800 border border-rose-200"
                          : "bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200"
                      }`}
                    >
                      Under Rs. 1000
                    </button>
                    <button
                      onClick={() => handlePriceChange(1000, 2000)}
                      className={`text-xs px-3 py-1 rounded-full transition-colors ${
                        priceRange[0] === 1000 && priceRange[1] === 2000
                          ? "bg-rose-100 text-rose-800 border border-rose-200"
                          : "bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200"
                      }`}
                    >
                      Rs. 1000 - 2000
                    </button>
                    <button
                      onClick={() => handlePriceChange(2000, 3000)}
                      className={`text-xs px-3 py-1 rounded-full transition-colors ${
                        priceRange[0] === 2000 && priceRange[1] === 3000
                          ? "bg-rose-100 text-rose-800 border border-rose-200"
                          : "bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200"
                      }`}
                    >
                      Rs. 2000+
                    </button>
                  </div>
                </div>
              </div>

              {/* Customer Ratings */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  Customer Ratings
                </h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input
                        id={`rating-${rating}`}
                        type="radio"
                        name="rating"
                        className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`rating-${rating}`} className="ml-2 text-sm text-gray-700 flex items-center">
                        <div className="flex text-amber-400 mr-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 ${i < rating ? "fill-current" : "stroke-current fill-none"}`}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                              />
                            </svg>
                          ))}
                        </div>
                        & Up
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close button (Mobile Only) */}
              <div className="md:hidden mt-6">
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Results info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <p className="text-sm text-gray-500 mb-4 sm:mb-0">
                Showing{" "}
                <span className="font-medium text-gray-900">
                  {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts?.length)}
                </span>{" "}
                of <span className="font-medium text-gray-900">{filteredProducts?.length}</span> products
              </p>
            </div>

            {/* No results message */}
            {currentProducts?.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Link href={`/product/${product.id}`}>
                      <Image
                        src={hoveredProduct === product.id ? product.hoverImage : product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />
                    </Link>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">NEW</span>
                      )}
                      {product.originalPrice && (
                        <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">SALE</span>
                      )}
                    </div>

                    {/* Quick actions */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-3 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-between items-center">
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-rose-100 hover:text-rose-600 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </button>
                        <button className="bg-gray-900 hover:bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                          Add to Cart
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-rose-100 hover:text-rose-600 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <Link href={`/product/${product.id}`} className="block">
                      <h3 className="text-lg font-medium text-gray-900 mb-1 hover:text-rose-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center mb-2">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "fill-current" : "stroke-current fill-none"
                            }`}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        ))}
                        <span className="text-xs text-gray-500 ml-1">({product?.reviews})</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">Rs. {product?.price?.toFixed(0)}</span>
                        {product?.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            Rs. {product?.originalPrice?.toFixed(0)}
                          </span>
                        )}
                      </div>

                      {/* Color options */}
                      {product?.colors?.length > 0 && (
                        <div className="flex items-center gap-1">
                          {product.colors.slice(0, 3).map((color) => (
                            <div
                              key={color}
                              className="w-4 h-4 rounded-full border border-gray-300"
                              style={{
                                backgroundColor:
                                  color.toLowerCase() === "white"
                                    ? "white"
                                    : color.toLowerCase() === "black"
                                      ? "black"
                                      : color.toLowerCase() === "gray"
                                        ? "#888"
                                        : color.toLowerCase() === "blue"
                                          ? "#3b82f6"
                                          : color.toLowerCase() === "red"
                                            ? "#ef4444"
                                            : color.toLowerCase() === "navy"
                                              ? "#1e3a8a"
                                              : color.toLowerCase() === "tan"
                                                ? "#d4a76a"
                                                : color.toLowerCase() === "brown"
                                                  ? "#92400e"
                                                  : color.toLowerCase() === "pink"
                                                    ? "#ec4899"
                                                    : color.toLowerCase() === "cream"
                                                      ? "#fef3c7"
                                                      : color.toLowerCase() === "rose gold"
                                                        ? "#f43f5e"
                                                        : color.toLowerCase() === "light wash"
                                                          ? "#93c5fd"
                                                          : color.toLowerCase() === "beige"
                                                            ? "#e5e5e5"
                                                            : color.toLowerCase() === "silver"
                                                              ? "#c0c0c0"
                                                              : "#ddd",
                              }}
                              title={color}
                            />
                          ))}
                          {product?.colors?.length > 3 && (
                            <span className="text-xs text-gray-500">+{product?.colors?.length - 3}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-1">
                  <button
                    onClick={() => paginate(Math?.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1
                    // Show limited page numbers with ellipsis
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => paginate(pageNumber)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            currentPage === pageNumber ? "bg-rose-600 text-white" : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {pageNumber}
                        </button>
                      )
                    } else if (
                      (pageNumber === currentPage - 2 && currentPage > 3) ||
                      (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
                    ) {
                      return (
                        <span key={pageNumber} className="px-1">
                          ...
                        </span>
                      )
                    }
                    return null
                  })}

                  <button
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentPage === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            )}

            {/* Recently Viewed */}
            <div className="mt-16">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recently Viewed</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {productData.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
                      <p className="text-sm font-bold text-gray-900">Rs. {product.price.toFixed(0)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

