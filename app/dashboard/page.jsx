"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CreditCard, Heart, LogOut, Settings, ShoppingBag, Truck, User, MapPin, Bell, ChevronRight } from "lucide-react"

export default function AccountDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=100&width=100&text=JD",
  }

  const recentOrders = [
    {
      id: "ORD-12345",
      date: "June 15, 2023",
      total: 248.0,
      status: "Delivered",
      items: 2,
    },
    {
      id: "ORD-12344",
      date: "May 28, 2023",
      total: 159.0,
      status: "Processing",
      items: 1,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm sticky top-6">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>

            <nav className="p-2">
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "dashboard" ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <User className="mr-3 h-5 w-5" />
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "orders" ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <ShoppingBag className="mr-3 h-5 w-5" />
                    Orders
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("wishlist")}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "wishlist" ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Heart className="mr-3 h-5 w-5" />
                    Wishlist
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("addresses")}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "addresses" ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <MapPin className="mr-3 h-5 w-5" />
                    Addresses
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("payment")}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "payment" ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <CreditCard className="mr-3 h-5 w-5" />
                    Payment Methods
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("notifications")}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "notifications" ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Bell className="mr-3 h-5 w-5" />
                    Notifications
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === "settings" ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Settings className="mr-3 h-5 w-5" />
                    Account Settings
                  </button>
                </li>
              </ul>

              <div className="pt-4 mt-4 border-t border-gray-200">
                <button className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md">
                  <LogOut className="mr-3 h-5 w-5" />
                  Sign Out
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Account Overview</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-indigo-50 rounded-lg p-4 flex items-center">
                      <div className="bg-indigo-100 rounded-full p-3">
                        <ShoppingBag className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500">Total Orders</p>
                        <p className="text-xl font-semibold text-gray-900">12</p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 flex items-center">
                      <div className="bg-green-100 rounded-full p-3">
                        <Truck className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500">In Transit</p>
                        <p className="text-xl font-semibold text-gray-900">1</p>
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 flex items-center">
                      <div className="bg-purple-100 rounded-full p-3">
                        <Heart className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500">Wishlist Items</p>
                        <p className="text-xl font-semibold text-gray-900">3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
                  <Link href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    View All
                  </Link>
                </div>
                <div className="divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Order #{order.id}</p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">${order.total.toFixed(2)}</p>
                          <p className="text-sm text-gray-500">{order.items} items</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <Link
                          href="#"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                        >
                          View Order
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Order History</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-500">View and track all your orders here.</p>
                {/* Order history content would go here */}
              </div>
            </div>
          )}

          {activeTab === "wishlist" && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">My Wishlist</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-500">Items you've saved for later.</p>
                {/* Wishlist content would go here */}
              </div>
            </div>
          )}

          {activeTab === "addresses" && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Saved Addresses</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-500">Manage your shipping and billing addresses.</p>
                {/* Addresses content would go here */}
              </div>
            </div>
          )}

          {activeTab === "payment" && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Payment Methods</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-500">Manage your payment methods and preferences.</p>
                {/* Payment methods content would go here */}
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-500">Manage your notification preferences.</p>
                {/* Notifications content would go here */}
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Account Settings</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-500">Update your account information and preferences.</p>
                {/* Settings content would go here */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

