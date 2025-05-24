// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Heart, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react"

// export default function WishlistPage() {
//   const [wishlistItems, setWishlistItems] = useState([
//     {
//       id: 1,
//       name: "Premium Comfort Jacket",
//       color: "Indigo",
//       size: "M",
//       price: 159.0,
//       inStock: true,
//       image: "/placeholder.svg?height=120&width=120&text=Premium+Jacket",
//     },
//     {
//       id: 2,
//       name: "Classic Denim Jeans",
//       color: "Blue",
//       size: "32",
//       price: 89.0,
//       inStock: true,
//       image: "/placeholder.svg?height=120&width=120&text=Denim+Jeans",
//     },
//     {
//       id: 3,
//       name: "Vintage Leather Boots",
//       color: "Brown",
//       size: "42",
//       price: 199.0,
//       inStock: false,
//       image: "/placeholder.svg?height=120&width=120&text=Leather+Boots",
//     },
//   ])

//   const removeItem = (id) => {
//     setWishlistItems((items) => items.filter((item) => item.id !== id))
//   }

//   if (wishlistItems.length === 0) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh] flex flex-col items-center justify-center">
//         <div className="text-center">
//           <div className="bg-gray-100 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-6">
//             <Heart className="h-12 w-12 text-gray-400" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
//           <p className="text-gray-500 mb-8">Save items you love to your wishlist and revisit them anytime.</p>
//           <Link
//             href="/product-detail"
//             className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors duration-200"
//           >
//             Explore Products
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
//         <span className="text-sm font-medium text-gray-500">{wishlistItems.length} items</span>
//       </div>

//       <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
//         <ul className="divide-y divide-gray-200">
//           {wishlistItems.map((item) => (
//             <li key={item.id} className="p-6">
//               <div className="flex flex-col sm:flex-row">
//                 <div className="flex-shrink-0 w-full sm:w-32 h-32 mb-4 sm:mb-0">
//                   <Image
//                     src={item.image || "/placeholder.svg"}
//                     alt={item.name}
//                     width={120}
//                     height={120}
//                     className="w-full h-full object-center object-cover rounded-md"
//                   />
//                 </div>

//                 <div className="sm:ml-6 flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                   <div>
//                     <h3 className="text-base font-medium text-gray-900">
//                       <Link href="/product-detail" className="hover:text-indigo-600">
//                         {item.name}
//                       </Link>
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500">Color: {item.color}</p>
//                     <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
//                     <p className="mt-2 text-base font-medium text-gray-900">${item.price.toFixed(2)}</p>
//                     <p className={`mt-1 text-sm ${item.inStock ? "text-green-600" : "text-red-600"}`}>
//                       {item.inStock ? "In Stock" : "Out of Stock"}
//                     </p>
//                   </div>

//                   <div className="flex flex-col sm:items-end gap-3">
//                     <button
//                       type="button"
//                       className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
//                         item.inStock
//                           ? "bg-indigo-600 text-white hover:bg-indigo-700"
//                           : "bg-gray-100 text-gray-400 cursor-not-allowed"
//                       }`}
//                       disabled={!item.inStock}
//                     >
//                       <ShoppingCart className="h-4 w-4 mr-2" />
//                       {item.inStock ? "Add to Cart" : "Unavailable"}
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => removeItem(item.id)}
//                       className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-red-600"
//                     >
//                       <Trash2 className="h-4 w-4 mr-1" />
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <Link
//           href="/product-detail"
//           className="inline-flex items-center justify-center text-indigo-600 hover:text-indigo-500"
//         >
//           <span>Continue Shopping</span>
//         </Link>

//         <Link
//           href="/cart-page"
//           className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors duration-200"
//         >
//           <ShoppingBag className="h-5 w-5 mr-2" />
//           View Cart
//         </Link>
//       </div>
//     </div>
//   )
// }


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page

