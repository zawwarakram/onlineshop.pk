"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Search, MessageCircle, ShoppingBag, ArrowRight, CheckCircle } from "lucide-react"
import selcetimg from "@/app/assets/select2.jpg"
import chatimg from "@/app/assets/chat.jpg"
import placeorder from "@/app/assets/sonfirm.png"
export default function AnimatedHowWeWork() {
  const [activeStep, setActiveStep] = useState(1)

  // Auto-advance steps every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current < 3 ? current + 1 : 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      id: 1,
      title: "Browse & Select Products",
      description: "Explore our wide range of products and select the items you want to purchase.",
      icon: <Search className="w-8 h-8 text-rose-600" />,
      image: selcetimg,
    },
    {
      id: 2,
      title: "Chat with Seller",
      description: "Connect directly with our seller to ask questions about the product or negotiate prices.",
      icon: <MessageCircle className="w-8 h-8 text-rose-600" />,
      image: chatimg,
    },
    {
      id: 3,
      title: "Place Order via WhatsApp",
      description: "Complete your purchase easily by placing your order through WhatsApp.",
      icon: <ShoppingBag className="w-8 h-8 text-rose-600" />,
      image: placeorder,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 3-step process makes shopping easy and convenient for you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-rose-600 transition-all duration-500 ease-in-out"
                style={{ width: `${(activeStep / 3) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    activeStep >= step.id ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                      activeStep >= step.id ? "bg-rose-600 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.id}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="bg-white rounded-xl  h-[466px] shadow-lg overflow-hidden transition-all duration-500">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`transition-opacity h-full flex items-center duration-500 ${
                  activeStep === step.id ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="md:flex">
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Step {step.id}</h3>
                        <h4 className="text-xl font-semibold text-gray-900">{step.title}</h4>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{step.description}</p>

                    <div className="space-y-3">
                      {step.id === 1 && (
                        <>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Browse through different categories</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">View product details and specifications</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Check product reviews and ratings</span>
                          </div>
                        </>
                      )}

                      {step.id === 2 && (
                        <>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Ask about product availability</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Inquire about product features</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Discuss delivery options</span>
                          </div>
                        </>
                      )}

                      {step.id === 3 && (
                        <>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Confirm your selected products</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Provide delivery address</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Choose payment method</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="mt-8">
                      <button
                        className="inline-flex items-center px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors"
                        onClick={() => setActiveStep((current) => (current < 3 ? current + 1 : 1))}
                      >
                        {activeStep < 3 ? "Next Step" : "Start Again"}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="md:w-[475px]  relative h-64 md:h-[444px]">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-fill" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

