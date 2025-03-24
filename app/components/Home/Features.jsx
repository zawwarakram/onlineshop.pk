import Image from 'next/image'
import Link from 'next/link'

export default function Features() {

  const categories = [
    {
      name: "Women's Fashion",
      products: "120+ Products",
      image: "https://img.drz.lazcdn.com/g/kf/S0382c670aa8248acbdb093d76592fe67B.jpg_400x400q75.avif"
    },
    {
      name: "Men's Collection",
      products: "95+ Products",
      image: "https://img.drz.lazcdn.com/g/kf/Sa3ac4bc1ff174f4db662c18a31542068F.jpg_400x400q75.avif"
    },
    {
      name: "Accessories",
      products: "60+ Products",
      image: "https://img.drz.lazcdn.com/g/kf/S869427fed012418cb7d233749caf1860e.jpg_400x400q75.avif"
    },
    {
      name: "Footwear",
      products: "80+ Products",
      image: "https://img.drz.lazcdn.com/static/pk/p/b697e8fe74eb88a47447fe44651b54c5.jpg_720x720q80.jpg_.webp"
    }
  ];

  return (
    <section className="py-16 px-2 md:px-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of products across popular categories tailored to your style and needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link href={"/Products"}>
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <Image 
                src={category.image} 
                alt={category.name} 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end px-3 py-4">
                <h3 className="text-[14px] md:text-xl font-bold text-white ">{category.name}</h3>
                <p className="text-white/80 text-sm mb-3">{category.products}</p>
                <Link href="/Products" className=" items-center text-white text-[12px] md:text-base flex font-medium">
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
              </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
