import Image from "next/image"

export default function Newsletter() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Newsletter</h2>
              <p className="text-gray-300 mb-6">
                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals. Don't miss out!
              </p>

              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-400 text-sm">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </form>

              <div className="flex items-center mt-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((id) => (
                    <div key={id} className="w-8 h-8 rounded-full border-2 border-gray-800 overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8Z2ZMN0ZaSlB0SWN8fGVufDB8fHx8fA%3D%3D`}
                        alt={`Subscriber ${id}`}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-sm ml-3">
                  Join over <span className="font-bold">10,000+</span> subscribers
                </p>
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-blue-500/20 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="https://media.istockphoto.com/id/1023505958/photo/woman-looking-after-pair-of-shoes.jpg?s=612x612&w=0&k=20&c=BEQ71z_k8xFLVkzEuk1beS-A9UwqSqMqcek76WeSCiM="
                  alt="Newsletter"
                  width={400}
                  height={600}
                  className="object-cover rounded-lg shadow-lg transform -rotate-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

