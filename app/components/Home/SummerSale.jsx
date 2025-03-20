"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function SpecialOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              } else {
                // Timer complete
                clearInterval(timer)
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="75" cy="25" r="20" fill="white" />
              <circle cx="25" cy="75" r="20" fill="white" />
              <circle cx="75" cy="75" r="20" fill="white" />
              <circle cx="25" cy="25" r="20" fill="white" />
            </svg>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="text-white space-y-6">
              <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-2">
                Limited Time Offer
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Summer Sale <br />
                Up to 50% Off
              </h2>

              <p className="text-white/80 max-w-md">
                Don't miss out on our biggest sale of the season. Get premium quality products at unbeatable prices.
              </p>

              {/* Countdown timer */}
              <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <div className="bg-white text-rose-600 rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
                    {timeLeft.days.toString().padStart(2, "0")}
                  </div>
                  <span className="text-white/80 text-sm mt-1">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white text-rose-600 rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <span className="text-white/80 text-sm mt-1">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white text-rose-600 rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <span className="text-white/80 text-sm mt-1">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white text-rose-600 rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <span className="text-white/80 text-sm mt-1">Seconds</span>
                </div>
              </div>

              <button className="bg-white cursor-pointer text-rose-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center">
                Shop the Sale
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
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
            </div>

            <div className="relative  h-64 md:h-auto">
              <Image src="https://media.istockphoto.com/id/1081900212/photo/woman-is-showing-bags-with-purchases-in-store.jpg?s=612x612&w=0&k=20&c=8suXaJAWgbHYS7N5u8fMwO2eGtu0P7_H0sWsvR00Vsw=" alt="Special Offer" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

