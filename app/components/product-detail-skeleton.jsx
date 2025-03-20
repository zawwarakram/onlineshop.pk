export default function ProductDetailSkeleton() {
    return (
      <div className="bg-gray-50 min-h-screen pb-12">
        {/* Breadcrumb Skeleton */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center">
              <div className="h-4 w-16 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-4 w-4 mx-2 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-4 w-4 mx-2 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-4 w-40 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
  
        {/* Product Detail Section Skeleton */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 p-4 md:p-8">
              {/* Product Images - Left Column */}
              <div className="lg:col-span-5">
                <div>
                  {/* Main Image */}
                  <div className="h-80 md:h-96 lg:h-[500px] w-full mb-4 rounded-lg bg-gray-200 animate-pulse"></div>
  
                  {/* Thumbnail Images */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {[1, 2, 3, 4].map((index) => (
                      <div key={index} className="w-20 h-20 rounded-md flex-shrink-0 bg-gray-200 animate-pulse"></div>
                    ))}
                  </div>
  
                  {/* Share Buttons */}
                  <div className="flex items-center justify-center mt-6 space-x-4">
                    <div className="h-8 w-20 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="h-8 w-20 bg-gray-200 rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>
  
              {/* Product Info - Right Column */}
              <div className="lg:col-span-7">
                {/* Brand and Title */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="mx-2"></div>
                    <div className="h-6 w-32 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-10 w-full bg-gray-200 rounded-md mb-2 animate-pulse"></div>
                  <div className="h-6 w-3/4 bg-gray-200 rounded-md mb-4 animate-pulse"></div>
  
                  {/* Ratings */}
                  <div className="flex items-center mb-4">
                    <div className="h-5 w-32 bg-gray-200 rounded-md mr-2 animate-pulse"></div>
                    <div className="h-5 w-20 bg-gray-200 rounded-md animate-pulse"></div>
                  </div>
                </div>
  
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center">
                    <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="h-6 w-24 bg-gray-200 rounded-md ml-3 animate-pulse"></div>
                    <div className="h-6 w-32 bg-gray-200 rounded-md ml-2 animate-pulse"></div>
                  </div>
                  <div className="h-4 w-48 bg-gray-200 rounded-md mt-1 animate-pulse"></div>
                </div>
  
                {/* Short Description */}
                <div className="mb-6">
                  <div className="h-4 w-full bg-gray-200 rounded-md mb-2 animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-200 rounded-md mb-2 animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded-md mb-2 animate-pulse"></div>
                  <div className="h-6 w-24 bg-gray-200 rounded-md mt-2 animate-pulse"></div>
                </div>
  
                {/* Key Features */}
                <div className="mb-6">
                  <div className="h-6 w-32 bg-gray-200 rounded-md mb-3 animate-pulse"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((index) => (
                      <div key={index} className="flex items-start">
                        <div className="h-5 w-5 bg-gray-200 rounded-full mr-2 animate-pulse"></div>
                        <div className="h-5 w-full bg-gray-200 rounded-md animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
  
                {/* Quantity Selector */}
                <div className="mb-6">
                  <div className="h-5 w-20 bg-gray-200 rounded-md mb-3 animate-pulse"></div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-gray-200 rounded-l-md animate-pulse"></div>
                    <div className="h-10 w-14 bg-gray-200 animate-pulse"></div>
                    <div className="h-10 w-10 bg-gray-200 rounded-r-md animate-pulse"></div>
                    <div className="h-5 w-32 bg-gray-200 rounded-md ml-3 animate-pulse"></div>
                  </div>
                </div>
  
                {/* Add to Cart and Buy Now Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="h-12 w-full bg-gray-200 rounded-md animate-pulse"></div>
                  <div className="h-12 w-full bg-gray-200 rounded-md animate-pulse"></div>
                </div>
  
                {/* Delivery and Returns */}
                <div className="h-1 w-full bg-gray-200 rounded-md mb-6 animate-pulse"></div>
                <div className="space-y-4">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-5 w-5 bg-gray-200 rounded-full mr-3 mt-0.5 animate-pulse"></div>
                      <div>
                        <div className="h-5 w-32 bg-gray-200 rounded-md mb-1 animate-pulse"></div>
                        <div className="h-4 w-48 bg-gray-200 rounded-md animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Tabs Skeleton */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="border-b">
              <div className="flex p-4 gap-4">
                <div className="h-10 w-28 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="h-10 w-28 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="h-10 w-28 bg-gray-200 rounded-md animate-pulse"></div>
              </div>
            </div>
            <div className="p-6">
              <div className="h-8 w-48 bg-gray-200 rounded-md mb-4 animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded-md mb-2 animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded-md mb-2 animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded-md mb-4 animate-pulse"></div>
              <div className="h-6 w-40 bg-gray-200 rounded-md mb-3 animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded-md mb-2 animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded-md mb-2 animate-pulse"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
  
        {/* Related Products Skeleton */}
        <div className="container mx-auto px-4 py-8">
          <div className="h-8 w-48 bg-gray-200 rounded-md mb-6 animate-pulse"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 w-full bg-gray-200 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-5 w-full bg-gray-200 rounded-md mb-2 animate-pulse"></div>
                  <div className="h-5 w-3/4 bg-gray-200 rounded-md mb-2 animate-pulse"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded-md mb-2 animate-pulse"></div>
                  <div className="h-5 w-32 bg-gray-200 rounded-md animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  