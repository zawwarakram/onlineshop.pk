"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Heart, Share2, ShoppingCart, Truck, RotateCcw, Shield, ChevronRight, Minus, Plus } from "lucide-react"

export default function ProductDetail({ product, relatedProductsPromise, reviewsPromise }) {
  const [mainImage, setMainImage] = useState(product?.image)
  const [quantity, setQuantity] = useState(1)
  const [expandedDescription, setExpandedDescription] = useState(false)
  const [activeTab, setActiveTab] = useState("description")

  // Add these states for image zoom functionality
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const imageContainerRef = useRef(null)

  // Set main image when product changes
  useEffect(() => {
    setMainImage(product?.image)
  }, [product])

  // Calculate discount percentage
  const calculateDiscount = (originalPrice, price) => {
    if (!originalPrice || originalPrice <= price) return null
    return Math.round(((originalPrice - price) / originalPrice) * 100)
  }

  const discount = calculateDiscount(product?.originalPrice, product?.price)

  // Handle quantity change
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  // Add these handlers for image zoom functionality
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return

    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setZoomPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsZoomed(true)
  }

  const handleMouseLeave = () => {
    setIsZoomed(false)
  }

  const relatedProducts = [
    {
      id: 13,
      name: "Pack of 2 perfumes black car and black market best for gift 100 ml each",
      price: 1999,
      originalPrice: 2365,
      rating: 4.9,
      image: "https://img.drz.lazcdn.com/static/pk/p/9cab0addfff3ffd0065dbf210d85a919.jpg_720x720q80.jpg_.webp",
    },
    {
      id: 14,
      name: "Florse | Our Best Floral Fragrance | Pocket Perfume | 5ml",
      price: 750,
      originalPrice: 799,
      rating: 4.9,
      image: "https://img.drz.lazcdn.com/static/pk/p/cc39782c733f04410bc22cabf70f06ad.jpg_720x720q80.jpg_.webp",
    },
    {
      id: 15,
      name: "Afnan 9pm EDP 100ml For Men - Best designer perfumes",
      price: 6199,
      originalPrice: 6999,
      rating: 4.9,
      image: "https://img.drz.lazcdn.com/static/pk/p/e50bdf271c6c095f35d9c54fba007ed0.jpg_720x720q80.jpg_.webp",
    },
    {
      id: 16,
      name: "Top 5 Spray Samples Set | For Men | Pocket Perfume | 5ml",
      price: 1199,
      originalPrice: 1399,
      rating: 5.0,
      image: "https://img.drz.lazcdn.com/static/pk/p/f56a56534f99ec01ce4e09aca29985fd.jpg_720x720q80.jpg_.webp",
    },
  ]

  const tabs = [
    {
      id: "description",
      label: "Description",
      content: (
        <div className="space-y-4">
          <p>{product?.description}</p>

          {product?.features && product?.features?.length > 0 && (
            <div>
              <h3 className="font-medium mb-2">Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product?.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ),
    },

    {
      id: "reviews",
      label: "Reviews",
      content: <ReviewsTab reviews={product?.reviews || []} productRating={product?.rating} />,
    },
  ]
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Breadcrumb */}
      <div className="bg-white mt-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-rose-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/Products" className="hover:text-rose-600 transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium truncate break-words">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 p-4 md:p-8">
            {/* Product Images - Left Column */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                {/* Main Image with Zoom */}
                <div
                  ref={imageContainerRef}
                  className="relative h-80 md:h-96 lg:h-[500px] mb-4 rounded-lg overflow-hidden border cursor-zoom-in"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image src={mainImage || "/placeholder.svg"} alt={product?.name} fill className="object-contain" />

                  {discount && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                        {discount}% OFF
                      </span>
                    </div>
                  )}

                  {/* Zoom lens overlay */}
                  {isZoomed && <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 z-10" />}

                  {/* Zoomed image */}
                  {isZoomed && (
                    <div
                      className="hidden md:block absolute top-0 right-0 transform translate-x-full ml-4 w-[400px] h-[400px] border-2 border-gray-200 rounded-lg overflow-hidden shadow-xl z-50 bg-white"
                      style={{
                        backgroundImage: `url(${mainImage})`,
                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        backgroundSize: "250%",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  )}
                </div>

                {/* Thumbnail Images */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product?.images?.map((image, index) => (
                    <button
                      key={index}
                      className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                        mainImage === image ? "border-rose-500" : "border-gray-200"
                      }`}
                      onClick={() => setMainImage(image)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Share Buttons */}
                <div className="flex items-center justify-center mt-6 space-x-4">
                  <button className="flex items-center text-gray-500 hover:text-rose-600 transition-colors">
                    <Share2 className="h-5 w-5 mr-1" />
                    <span className="text-sm">Share</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-rose-600 transition-colors">
                    <Heart className="h-5 w-5 mr-1" />
                    <span className="text-sm">Save</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info - Right Column */}
            <div className="lg:col-span-7">
              {/* Brand and Title */}
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-normal border border-gray-300 rounded-full px-2 py-1 text-gray-700">
                    {product?.brand}
                  </span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm text-green-600 font-medium flex items-center">
                    <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-1"></span>
                    In Stock ({product?.stock} available)
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product?.name}</h1>

                {/* Ratings */}
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400 mr-2">
                    {[...Array(5)]?.map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product?.rating) ? "fill-current" : "stroke-current fill-none"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{product.rating} (Reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900">Rs. {product?.price?.toFixed(0)}</span>
                  {product?.originalPrice && (
                    <>
                      <span className="text-lg text-gray-500 line-through ml-3">
                        Rs. {product?.originalPrice.toFixed(0)}
                      </span>
                      <span className="ml-2 text-rose-600 font-medium">
                        Save Rs. {(product?.originalPrice - product?.price)?.toFixed(0)}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">Price inclusive of all taxes</p>
              </div>

              {/* Short Description */}
              <div className="mb-6">
                <p className="text-gray-600">
                  {expandedDescription ? product?.description : `${product?.description?.substring(0, 200)}...`}
                </p>
                <button
                  onClick={() => setExpandedDescription(!expandedDescription)}
                  className="text-rose-600 text-sm font-medium mt-2 hover:underline"
                >
                  {expandedDescription ? "Show Less" : "Read More"}
                </button>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product?.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="w-10 h-10 rounded-l-md border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="w-14 h-10 border-t border-b border-gray-300 flex items-center justify-center text-gray-900 font-medium">
                    {quantity}
                  </div>
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 rounded-r-md border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  <span className="ml-3 text-sm text-gray-500">{product.stock} items available</span>
                </div>
              </div>

              {/* Add to Cart and Buy Now Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-3 px-4 rounded-md font-medium flex items-center justify-center transition-colors">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-md font-medium transition-colors">
                  Buy Now
                </button>
              </div>

              {/* Delivery and Returns */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Free Delivery</h4>
                    <p className="text-sm text-gray-600">Free delivery on orders over Rs. 1000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RotateCcw className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Easy Returns</h4>
                    <p className="text-sm text-gray-600">15 days easy return policy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">100% Authentic</h4>
                    <p className="text-sm text-gray-600">All products are original and authentic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Custom Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === "description"
                    ? "text-rose-600 border-b-2 border-rose-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("specifications")}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === "specifications"
                    ? "text-rose-600 border-b-2 border-rose-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === "reviews"
                    ? "text-rose-600 border-b-2 border-rose-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Reviews
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <h2 className="text-xl font-bold mb-4">Product Description</h2>
                <p className="mb-4">{product?.description}</p>
                <h3 className="text-lg font-semibold mb-3">About {product?.brand}</h3>
                <p>
                  {product.brand} is known for its high-quality products that blend traditional craftsmanship with
                  modern design. Each product is carefully crafted using the finest materials to ensure a premium
                  experience.
                </p>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === "specifications" && (
              <div>
                <h2 className="text-xl font-bold mb-4">Product Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3">General Information</h3>
                    <table className="w-full">
                      <tbody>
                        {product?.specifications?.map((spec, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                            <td className="py-2 px-3 text-sm font-medium text-gray-700">{spec.name}</td>
                            <td className="py-2 px-3 text-sm text-gray-600">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Additional Information</h3>
                    <table className="w-full">
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="py-2 px-3 text-sm font-medium text-gray-700">SKU</td>
                          <td className="py-2 px-3 text-sm text-gray-600">{product.sku}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-sm font-medium text-gray-700">Category</td>
                          <td className="py-2 px-3 text-sm text-gray-600">{product.category}</td>
                        </tr>
                        <tr className="bg-gray-100">
                          <td className="py-2 px-3 text-sm font-medium text-gray-700">Tags</td>
                          <td className="py-2 px-3 text-sm text-gray-600">{product?.tags?.join(", ")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && <ReviewsTab reviews={product?.reviews || []} productRating={product?.rating} />}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <RelatedProducts relatedProductsPromise={relatedProductsPromise} />
      </div>

      {/* Recently Viewed */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts?.slice(0, 4)?.map((product) => (
            <div
              key={`recent-${product.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <Image src={product?.image || "/placeholder.svg"} alt={product?.name} fill className="object-cover" />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-900 truncate">{product?.name}</h3>
                <p className="text-sm font-bold text-gray-900">Rs. {product?.price.toFixed(0)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Reviews Tab Component
function ReviewsTab({ reviews = [], reviewsPromise, productRating }) {
  const [allReviews, setAllReviews] = useState(reviews)

  useEffect(() => {
    // If we have a promise for reviews, fetch them
    if (reviewsPromise) {
      const fetchReviews = async () => {
        try {
          const data = await reviewsPromise
          setAllReviews(data)
        } catch (error) {
          console.error("Error fetching reviews:", error)
        }
      }

      fetchReviews()
    }
  }, [reviewsPromise])

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-2">
            <div className="text-4xl font-bold text-gray-900 mr-3">{productRating.toFixed(1)}</div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(productRating) ? "fill-current" : "stroke-current fill-none"}`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">Based on {allReviews.length} reviews</div>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = allReviews.filter((review) => review.rating === star).length
              const percentage = allReviews.length > 0 ? (count / allReviews.length) * 100 : 0

              return (
                <div key={star} className="flex items-center">
                  <div className="flex items-center w-20">
                    <span className="text-sm text-gray-600 mr-1">{star}</span>
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: `${percentage}%` }}></div>
                  </div>
                  <div className="w-12 text-right text-sm text-gray-600">{count}</div>
                </div>
              )
            })}
          </div>
        </div>

        <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
          Write a Review
        </button>
      </div>

      <div className="md:w-2/3">
        {allReviews?.length > 0 ? (
          <div className="space-y-6">
            {allReviews?.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-start mb-3">
                  {/* <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                
                  </div> */}
                  <div>
                    <h4 className="font-medium text-gray-900">{review?.user}</h4>
                    <div className="flex items-center">
                      <div className="flex text-amber-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review?.rating ? "fill-current" : "stroke-current fill-none"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review?.date}</span>
                    </div>
                  </div>
                </div>

                <h5 className="font-medium text-gray-900 mb-2">{review?.title}</h5>
                <p className="text-gray-600 mb-3">{review?.comment}</p>

                {review?.images && review?.images?.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {review?.images?.map((image, index) => (
                      <div key={index} className="relative w-16 h-16 rounded-md overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Review image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center">
                  <button className="text-sm text-gray-500 hover:text-rose-600 transition-colors flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    Helpful ({review?.helpful})
                  </button>
                  <span className="mx-2 text-gray-300">|</span>
                  <button className="text-sm text-gray-500 hover:text-rose-600 transition-colors">Report</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">No reviews yet for this product.</p>
            <p className="text-sm text-gray-400">Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Related Products Component
function RelatedProducts({ relatedProductsPromise }) {
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    // Fetch related products when component mounts
    const fetchRelatedProducts = async () => {
      const data = await relatedProductsPromise
      setRelatedProducts(data)
    }

    fetchRelatedProducts()
  }, [relatedProductsPromise])

  // Calculate discount percentage
  const calculateDiscount = (originalPrice, price) => {
    if (!originalPrice || originalPrice <= price) return null
    return Math.round(((originalPrice - price) / originalPrice) * 100)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {relatedProducts?.map((product) => (
        <div
          key={product?.id}
          className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Product Image */}
          <div className="relative h-48 overflow-hidden">
            <Link href={`/product/${product.id}`}>
              <Image
                src={product?.image || "/placeholder.svg"}
                alt={product?.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
            </Link>

            {/* Discount Badge */}
            {product?.originalPrice && (
              <div className="absolute top-3 left-3">
                <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                  {calculateDiscount(product?.originalPrice, product?.price)}% OFF
                </span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-4">
            <Link href={`/product/${product.id}`} className="block">
              <h3 className="text-sm font-medium text-gray-900 mb-1 hover:text-rose-600 transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center mb-2">
              <div className="flex text-amber-400">
                {[...Array(5)]?.map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(product?.rating) ? "fill-current" : "stroke-current fill-none"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">({product?.rating})</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-gray-900">Rs. {product?.price?.toFixed(0)}</span>
                {product?.originalPrice && (
                  <span className="text-xs text-gray-500 line-through ml-2">
                    Rs. {product?.originalPrice?.toFixed(0)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

