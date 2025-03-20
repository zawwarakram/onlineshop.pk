"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react"

export default function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState("ORD-12345")

  const order = {
    id: "ORD-12345",
    date: "June 15, 2023",
    status: "In Transit",
    estimatedDelivery: "June 20, 2023",
    trackingNumber: "TRK-9876543210",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    items: [
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
    ],
    timeline: [
      {
        status: "Order Placed",
        date: "June 15, 2023",
        time: "10:30 AM",
        completed: true,
      },
      {
        status: "Processing",
        date: "June 16, 2023",
        time: "09:15 AM",
        completed: true,
      },
      {
        status: "Shipped",
        date: "June 17, 2023",
        time: "02:45 PM",
        completed: true,
      },
      {
        status: "In Transit",
        date: "June 18, 2023",
        time: "11:20 AM",
        completed: true,
        current: true,
      },
      {
        status: "Out for Delivery",
        date: "Expected June 20, 2023",
        completed: false,
      },
      {
        status: "Delivered",
        date: "Expected June 20, 2023",
        completed: false,
      },
    ],
  }

  const subtotal = order.items.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const shipping = 10
  const total = subtotal + tax + shipping

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/account-dashboard" className="flex items-center text-indigo-600 hover:text-indigo-500">
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Back to Orders</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm mb-8">
            <div className="px-6 py-5 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-medium text-gray-900">Order #{order.id}</h3>
                <div className="mt-2 sm:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {order.status}
                  </span>
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-500">Placed on {order.date}</p>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <h4 className="text-base font-medium text-gray-900 mb-4">Tracking Information</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Tracking Number</p>
                      <p className="text-sm font-medium">{order.trackingNumber}</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <p className="text-sm text-gray-500">Estimated Delivery</p>
                      <p className="text-sm font-medium">{order.estimatedDelivery}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200"></div>
                    <ul className="space-y-6">
                      {order.timeline.map((event, index) => (
                        <li key={index} className="relative pl-10">
                          <div
                            className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full ${
                              event.current ? "bg-blue-100" : event.completed ? "bg-green-100" : "bg-gray-100"
                            }`}
                          >
                            {event.current ? (
                              <Truck className={`h-5 w-5 text-blue-600`} />
                            ) : event.completed ? (
                              <CheckCircle className={`h-5 w-5 text-green-600`} />
                            ) : (
                              <Clock className={`h-5 w-5 text-gray-400`} />
                            )}
                          </div>
                          <div>
                            <p
                              className={`text-sm font-medium ${
                                event.current ? "text-blue-600" : event.completed ? "text-gray-900" : "text-gray-500"
                              }`}
                            >
                              {event.status}
                            </p>
                            <p className="text-xs text-gray-500">
                              {event.date} {event.time && `• ${event.time}`}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base font-medium text-gray-900 mb-4">Shipping Address</h4>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">{order.shippingAddress.name}</p>
                    <p className="text-sm text-gray-500">{order.shippingAddress.street}</p>
                    <p className="text-sm text-gray-500">
                      {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                    </p>
                    <p className="text-sm text-gray-500">{order.shippingAddress.country}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-96">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm sticky top-6">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
            </div>

            <div className="divide-y divide-gray-200">
              {order.items.map((item) => (
                <div key={item.id} className="p-6 flex">
                  <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
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
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flow-root">
                <dl className="text-sm">
                  <div className="flex items-center justify-between py-2">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-gray-200">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd className="font-medium text-gray-900">${shipping.toFixed(2)}</dd>
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-gray-200">
                    <dt className="text-gray-600">Tax</dt>
                    <dd className="font-medium text-gray-900">${tax.toFixed(2)}</dd>
                  </div>
                  <div className="flex items-center justify-between py-4 border-t border-gray-200">
                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                    <dd className="text-base font-medium text-gray-900">${total.toFixed(2)}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center">
                <Package className="h-5 w-5 text-indigo-500 mr-2" />
                <p className="text-sm text-gray-500">
                  Need help with your order?{" "}
                  <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Contact support
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

