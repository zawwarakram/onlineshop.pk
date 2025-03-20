"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronLeft, CreditCard, Lock, ShoppingBag } from "lucide-react"

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "United States",
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  })

  const [errors, setErrors] = useState({})
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const cartItems = [
    {
      id: 1,
      name: "Premium Comfort Jacket",
      color: "Indigo",
      size: "M",
      price: 159.0,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80&text=Premium+Jacket",
    },
    {
      id: 2,
      name: "Classic Denim Jeans",
      color: "Blue",
      size: "32",
      price: 89.0,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80&text=Denim+Jeans",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + tax + shipping

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is being edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Shipping info validation
    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.lastName) newErrors.lastName = "Last name is required"
    if (!formData.email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.address) newErrors.address = "Address is required"
    if (!formData.city) newErrors.city = "City is required"
    if (!formData.state) newErrors.state = "State is required"
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required"

    // Payment validation (only if credit card is selected)
    if (paymentMethod === "credit-card") {
      if (!formData.cardName) newErrors.cardName = "Name on card is required"
      if (!formData.cardNumber) newErrors.cardNumber = "Card number is required"
      else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) newErrors.cardNumber = "Card number is invalid"
      if (!formData.expMonth) newErrors.expMonth = "Expiration month is required"
      if (!formData.expYear) newErrors.expYear = "Expiration year is required"
      if (!formData.cvc) newErrors.cvc = "CVC is required"
      else if (!/^\d{3,4}$/.test(formData.cvc)) newErrors.cvc = "CVC is invalid"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Simulate order placement
      setIsOrderPlaced(true)
    }
  }

  if (isOrderPlaced) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="bg-green-100 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-6">
            <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you for your order!</h2>
          <p className="text-gray-500 mb-2">Your order has been placed successfully.</p>
          <p className="text-gray-500 mb-8">Order confirmation has been sent to your email.</p>
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
      <div className="flex items-center mb-8">
        <Link href="/cart-page" className="flex items-center text-indigo-600 hover:text-indigo-500">
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Back to cart</span>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 ml-auto mr-auto">Checkout</h1>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>
              </div>
              <div className="px-6 py-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border ${errors.firstName ? "border-red-300" : "border-gray-300"} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                    />
                    {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border ${errors.lastName ? "border-red-300" : "border-gray-300"} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                    />
                    {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.email ? "border-red-300" : "border-gray-300"} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Street address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.address ? "border-red-300" : "border-gray-300"} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                  />
                  {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border ${errors.city ? "border-red-300" : "border-gray-300"} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                    />
                    {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State / Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border ${errors.state ? "border-red-300" : "border-gray-300"} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                    />
                    {errors.state && <p className="mt-1 text-xs text-red-600">{errors.state}</p>}
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                      Postal code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border ${errors.postalCode ? "border-red-300" : "border-gray-300"} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                    />
                    {errors.postalCode && <p className="mt-1 text-xs text-red-600">{errors.postalCode}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Payment method</h2>
              </div>
              <div className="px-6 py-6 space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="credit-card"
                      name="payment-method"
                      type="radio"
                      checked={paymentMethod === "credit-card"}
                      onChange={() => setPaymentMethod("credit-card")}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="credit-card" className="ml-3 flex items-center">
                      <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="block text-sm font-medium text-gray-700">Credit Card</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="paypal"
                      name="payment-method"
                      type="radio"
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="paypal" className="ml-3 flex items-center">
                      <Image
                        src="/placeholder.svg?height=20&width=20&text=PayPal"
                        alt="PayPal"
                        width={20}
                        height={20}
                        className="h-5 w-5 mr-2"
                      />
                      <span className="block text-sm font-medium text-gray-700">PayPal</span>
                    </label>
                  </div>
                </div>

                {paymentMethod === "credit-card" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                        Name on card
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md border ${errors.cardName ? "border-red-300" : "border-gray-300"} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                      />
                      {errors.cardName && <p className="mt-1 text-xs text-red-600">{errors.cardName}</p>}
                    </div>

                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                        Card number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        className={`mt-1 block w-full rounded-md border ${errors.cardNumber ? "border-red-300" : "border-gray-300"} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                      />
                      {errors.cardNumber && <p className="mt-1 text-xs text-red-600">{errors.cardNumber}</p>}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="expMonth" className="block text-sm font-medium text-gray-700">
                          Exp. Month
                        </label>
                        <select
                          id="expMonth"
                          name="expMonth"
                          value={formData.expMonth}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-md border ${errors.expMonth ? "border-red-300" : "border-gray-300"} bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                        >
                          <option value="">Month</option>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                            <option key={month} value={month.toString().padStart(2, "0")}>
                              {month.toString().padStart(2, "0")}
                            </option>
                          ))}
                        </select>
                        {errors.expMonth && <p className="mt-1 text-xs text-red-600">{errors.expMonth}</p>}
                      </div>
                      <div>
                        <label htmlFor="expYear" className="block text-sm font-medium text-gray-700">
                          Exp. Year
                        </label>
                        <select
                          id="expYear"
                          name="expYear"
                          value={formData.expYear}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-md border ${errors.expYear ? "border-red-300" : "border-gray-300"} bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                        >
                          <option value="">Year</option>
                          {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                            <option key={year} value={year.toString()}>
                              {year}
                            </option>
                          ))}
                        </select>
                        {errors.expYear && <p className="mt-1 text-xs text-red-600">{errors.expYear}</p>}
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                          CVC
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          name="cvc"
                          value={formData.cvc}
                          onChange={handleChange}
                          placeholder="123"
                          className={`mt-1 block w-full rounded-md border ${errors.cvc ? "border-red-300" : "border-gray-300"} px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                        />
                        {errors.cvc && <p className="mt-1 text-xs text-red-600">{errors.cvc}</p>}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center mt-4">
                  <Lock className="h-5 w-5 text-gray-400 mr-2" />
                  <p className="text-sm text-gray-500">
                    Your payment information is processed securely. We do not store credit card details.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors duration-200"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 lg:mt-0 lg:col-span-5">
          <div className="bg-gray-50 rounded-lg px-6 py-6 sm:p-8 border border-gray-200 sticky top-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>

            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-4 flex">
                    <div className="flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-sm font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${item.price.toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.color} / {item.size}
                        </p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {item.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="flex justify-between text-sm text-gray-600">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <p>Shipping</p>
                <p>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <p>Tax</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 mt-6">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <ShoppingBag className="h-5 w-5 text-indigo-500 mr-2" />
                <p className="text-sm text-gray-500">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items in your cart
                </p>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=20&width=20&text=Discount"
                    alt="Discount"
                    width={20}
                    height={20}
                    className="h-5 w-5 mr-2"
                  />
                  <p className="text-sm font-medium text-gray-900">Have a promo code?</p>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

