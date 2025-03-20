"use client"

import { useState } from "react"
import { ChevronDown, Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"

export default function ProductDetail() {
  const [mainImage, setMainImage] = useState("/placeholder.svg?height=600&width=600")
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [activeColor, setActiveColor] = useState("black")
  const [activeSize, setActiveSize] = useState("m")

  const images = [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600&text=Image+2",
    "/placeholder.svg?height=600&width=600&text=Image+3",
    "/placeholder.svg?height=600&width=600&text=Image+4",
  ]

  const colors = [
    { name: "Black", value: "black" },
    { name: "White", value: "white" },
    { name: "Navy", value: "navy" },
  ]

  const sizes = [
    { name: "S", value: "s" },
    { name: "M", value: "m" },
    { name: "L", value: "l" },
    { name: "XL", value: "xl" },
  ]

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image gallery */}
        <div className="flex flex-col">
          <div className="rounded-lg overflow-hidden bg-gray-100 mb-4">
            <Image
              src={mainImage || "/placeholder.svg"}
              alt="Product image"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                className={`rounded-md overflow-hidden ${mainImage === img ? "ring-2 ring-black" : "ring-1 ring-gray-200"}`}
                onClick={() => setMainImage(img)}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Product thumbnail ${idx + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-auto object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <div className="flex justify-between">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Premium Comfort Jacket</h1>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Heart className="h-6 w-6 text-gray-400" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Share2 className="h-6 w-6 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">$199.00</p>
          </div>

          {/* Reviews */}
          <div className="mt-3">
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <Star
                    key={rating}
                    className={`h-5 w-5 ${rating < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="ml-3 text-sm text-gray-500">
                <span className="font-medium">4.0</span> (128 reviews)
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <div className="mt-2">
              <div className="flex items-center space-x-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${
                      activeColor === color.value ? "ring ring-offset-1" : ""
                    }`}
                    onClick={() => setActiveColor(color.value)}
                  >
                    <span className="sr-only">{color.name}</span>
                    <span
                      className={`h-8 w-8 rounded-full border border-black border-opacity-10 ${
                        color.value === "white"
                          ? "bg-white"
                          : color.value === "black"
                            ? "bg-black"
                            : `bg-${color.value}-600`
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Size guide
              </a>
            </div>

            <div className="mt-2 grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size.value}
                  className={`flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase ${
                    activeSize === size.value
                      ? "border-transparent bg-black text-white"
                      : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveSize(size.value)}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
            </div>
            <div className="mt-2 flex rounded-md">
              <button
                type="button"
                className="rounded-l-md border border-r-0 border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50"
                onClick={decrementQuantity}
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="flex w-16 items-center justify-center border-t border-b border-gray-300 px-3 py-2 text-gray-900">
                {quantity}
              </div>
              <button
                type="button"
                className="rounded-r-md border border-l-0 border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50"
                onClick={incrementQuantity}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex">
            <button
              type="button"
              className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-full"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to cart
            </button>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="space-y-4">
              <div>
                <button
                  className={`flex w-full items-center justify-between text-left ${
                    activeTab === "description" ? "font-medium" : ""
                  }`}
                  onClick={() => setActiveTab("description")}
                >
                  <span className="text-base font-medium text-gray-900">Product Description</span>
                  <ChevronDown className={`h-5 w-5 transform ${activeTab === "description" ? "rotate-180" : ""}`} />
                </button>
                {activeTab === "description" && (
                  <div className="mt-4 prose prose-sm text-gray-500">
                    <p>
                      The Premium Comfort Jacket is designed for both style and functionality. Made with high-quality
                      materials, this jacket features a water-resistant outer shell, breathable inner lining, and
                      multiple pockets for storage. Perfect for everyday wear or outdoor activities.
                    </p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Water-resistant outer shell</li>
                      <li>Breathable inner lining</li>
                      <li>Multiple pockets for storage</li>
                      <li>Adjustable hood and cuffs</li>
                      <li>Machine washable</li>
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <button
                  className={`flex w-full items-center justify-between text-left ${
                    activeTab === "details" ? "font-medium" : ""
                  }`}
                  onClick={() => setActiveTab("details")}
                >
                  <span className="text-base font-medium text-gray-900">Details & Care</span>
                  <ChevronDown className={`h-5 w-5 transform ${activeTab === "details" ? "rotate-180" : ""}`} />
                </button>
                {activeTab === "details" && (
                  <div className="mt-4 prose prose-sm text-gray-500">
                    <ul className="space-y-2">
                      <li>
                        <span className="font-medium">Material:</span> 85% Polyester, 15% Cotton
                      </li>
                      <li>
                        <span className="font-medium">Care:</span> Machine wash cold, tumble dry low
                      </li>
                      <li>
                        <span className="font-medium">Imported</span>
                      </li>
                      <li>
                        <span className="font-medium">Model:</span> Height: 6'1", Chest: 38", Waist: 32", wearing size M
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <button
                  className={`flex w-full items-center justify-between text-left ${
                    activeTab === "shipping" ? "font-medium" : ""
                  }`}
                  onClick={() => setActiveTab("shipping")}
                >
                  <span className="text-base font-medium text-gray-900">Shipping & Returns</span>
                  <ChevronDown className={`h-5 w-5 transform ${activeTab === "shipping" ? "rotate-180" : ""}`} />
                </button>
                {activeTab === "shipping" && (
                  <div className="mt-4 prose prose-sm text-gray-500">
                    <p>Free standard shipping on all orders over $75. Delivery time is typically 3-5 business days.</p>
                    <p className="mt-2">
                      We accept returns within 30 days of delivery. Items must be unworn, unwashed, and with the
                      original tags attached.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

