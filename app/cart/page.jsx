"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Comfort Jacket",
      color: "Indigo",
      size: "M",
      price: 159.0,
      quantity: 1,
      image: "/placeholder.svg?height=120&width=120&text=Premium+Jacket",
    },
    {
      id: 2,
      name: "Classic Denim Jeans",
      color: "Blue",
      size: "32",
      price: 89.0,
      quantity: 1,
      image: "/placeholder.svg?height=120&width=120&text=Denim+Jeans",
    },
  ])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + tax + shipping

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="bg-gray-100 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-6">
            <ShoppingBag className="h-12 w-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link
            href="/product-detail"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <span className="text-sm font-medium text-gray-500">{cartItems.length} items</span>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        <div className="lg:col-span-7">
          <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="py-6 sm:flex">
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-center object-cover"
                  />
                </div>

                <div className="sm:ml-6 sm:flex-1 mt-4 sm:mt-0 flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        <Link href="/product-detail" className="hover:text-indigo-600">
                          {item.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Color: {item.color}</p>
                      <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
                    </div>
                    <p className="text-base font-medium text-gray-900">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        type="button"
                        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-1 text-gray-900">{item.quantity}</span>
                      <button
                        type="button"
                        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/product-detail" className="flex items-center text-indigo-600 hover:text-indigo-500">
              <ChevronLeft className="h-5 w-5 mr-1" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 lg:mt-0 lg:col-span-5">
          <div className="bg-gray-50 rounded-lg px-6 py-6 sm:p-8 border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
            <div className="flow-root">
              <dl className="text-sm">
                <div className="flex items-center justify-between py-2">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between py-2 border-t border-gray-200">
                  <dt className="text-gray-600">Shipping estimate</dt>
                  <dd className="font-medium text-gray-900">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</dd>
                </div>
                <div className="flex items-center justify-between py-2 border-t border-gray-200">
                  <dt className="text-gray-600">Tax estimate</dt>
                  <dd className="font-medium text-gray-900">${tax.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <dt className="text-base font-medium text-gray-900">Order total</dt>
                  <dd className="text-base font-medium text-gray-900">${total.toFixed(2)}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6">
              <Link
                href="/checkout"
                className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors duration-200"
              >
                Proceed to Checkout
              </Link>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <Link href="/product-detail" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=40&text=Shield"
                alt="Security"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">Secure Checkout</h3>
                <p className="mt-1 text-xs text-gray-500">Your payment information is processed securely.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

