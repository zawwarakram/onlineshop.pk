import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductDetail from "../../product-details/page";
import ProductDetailSkeleton from "../../components/product-detail-skeleton";
import bag1 from "../../assets/bag1.png";
import bag2 from "../../assets/bag2.png";
import bag3 from "../../assets/bag3.png";
import bag4 from "../../assets/bag4.png";
import watch002 from "../../assets/watch002.png";
import watch01 from "../../assets/watch01.png";
import watch02 from "../../assets/watch02.png";
import watch03 from "../../assets/watch03.png";
import watch04 from "../../assets/watch04.png";
// import watch05 from "../../assets/watch05.png";
import bottle1 from "../../assets/bottle1.png";
import bottle2 from "../../assets/bottle2.png";
import myshoes01 from "../../assets/myshoes01.png"
import myshoes1 from "../../assets/myshoes1.png"
import myshoes2 from "../../assets/myshoes2.png"
import myshoes3 from "../../assets/myshoes3.png"
import myshoes4 from "../../assets/myshos6.png"
import myshoes5 from "../../assets/myshoes8.png"
import myshoes6 from "../../assets/myshoes9.png"
import myshoes7 from "../../assets/myshoes10.png"
import myshoes8 from "../../assets/myshos11.png"
import watch0004 from "../../assets/c001.jpg";
import watch0005 from "../../assets/c002.jpg";
import watch0006 from "../../assets/c003.jpg";
import watch0007 from "../../assets/c004.jpg";
import watch0008 from "../../assets/c005.jpg";
import watch0009 from "../../assets/c006.jpg";
import watch00010 from "../../assets/c007.jpg";
import watch00011 from "../../assets/c008.jpg";
import watch00012 from "../../assets/c009.jpg";
import watch00013 from "../../assets/c0010.jpg";
import watch00014 from "../../assets/c0011.jpg";
import watch00015 from "../../assets/c0012.jpg";
import watch00016 from "../../assets/c0014.jpg";
import watch101 from "../../assets/c01.jpg";
import watch102 from "../../assets/c02.jpg";
import watch103 from "../../assets/c03.jpg";
import watch104 from "../../assets/c04.jpg";
import watch105 from "../../assets/c05.jpg";
import watch106 from "../../assets/c06.jpg";

// import  { Product, Review } from "@/types"

// This is a sample function to fetch product data
// In a real app, you would fetch from your database or API
async function getProductById(id) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Sample product data
  const products = [
    // refrence: Women Mesh Magnetic Buckle Starry Sky Luxury Fashion Watch with Magnetic Strip for College/Office
 

  {
  "id": 43221,
  "name": "T900 Series 8 T900 Pro Ultra Smart Watch For Men & Women – 2.09\" Full Touch Bluetooth Call Smartwatch",
  "price": 1999,
  "originalPrice": 3400,
  "rating": 4.8,
  "image": "https://img.drz.lazcdn.com/static/pk/p/c5844b40bdc3c2e6c02f027d7e30f2f7.jpg_720x720q80.jpg_.webp",
  "hoverImage": "https://img.drz.lazcdn.com/static/pk/p/d06d2e4d003949f0101b55cd8937aa1c.jpg_720x720q80.jpg_.webp",
  "description": "⌚ T900 Series 8 Pro Ultra Smart Watch – Style, Fitness & Function, All-in-One!\n\n💥 Smart banain apni lifestyle ko! Yeh stylish aur powerful smartwatch har roz ke liye perfect hai – chahe aap office ja rahe ho, gym mein workout kar rahe ho, ya casually chill kar rahe ho. Iska 2.09\" Full HD display aur Bluetooth calling feature banaye har pal ko smart.\n\n❤ Health tracking, 🔋 long battery, aur 📱 instant notifications – sab kuch ek compact aur modern design mein!",
  "images": [
    "https://img.drz.lazcdn.com/static/pk/p/c5844b40bdc3c2e6c02f027d7e30f2f7.jpg_720x720q80.jpg_.webp",
    "https://img.drz.lazcdn.com/static/pk/p/d06d2e4d003949f0101b55cd8937aa1c.jpg_720x720q80.jpg_.webp",
    // "	https://img.drz.lazcdn.com/static/pk/p/a4af4dd5714acbb8bed30c47981b0c9f.jpg_720x720q80.jpg_.webp",
    // "	https://img.drz.lazcdn.com/static/pk/p/a4b92370fc01e4d38d52c2d602e8ce84.jpg_720x720q80.jpg_.webp",
    "https://img.drz.lazcdn.com/static/pk/p/c006b19643c01d7e234b63c219246aa3.jpg_720x720q80.jpg_.webp",
    "	https://img.drz.lazcdn.com/static/pk/p/73d90803fbac6ec40d0cef3cf29522ea.jpg_720x720q80.jpg_.webp",
    watch101,
    watch102,
    watch103,
    watch104,
    watch105,
    watch106,
    
  ],
  "stock": 40,
  "sku": "T900-SMARTWATCH-BLACK",
  "brand": "TechFit",
  "category": "Electronics",
  "tags": [
    "smartwatch",
    "Bluetooth call watch",
    "smartwatch for men",
    "smartwatch for women",
    "T900 series",
    "fitness tracker",
    "touch screen watch"
  ],
  "features": [
    "2.09\" Full HD touch display with ultra-slim bezels",
    "Bluetooth Calling – Receive & make calls directly from the watch",
    "Real-time heart rate, BP & SpO2 monitoring",
    "Multiple fitness & sports modes",
    "Smart notifications: WhatsApp, Facebook, Instagram & more",
    "Magnetic charger with long battery life (2-5 days)",
    "IP67 waterproof & sweatproof design",
    "Comfortable and skin-friendly silicone strap",
    "Customizable watch faces for your mood & outfit"
  ],
  "specifications": [
    { "name": "Display Size", "value": "2.09 inches" },
    { "name": "Touchscreen", "value": "Full Capacitive Touch" },
    { "name": "Connectivity", "value": "Bluetooth 5.0" },
    { "name": "Compatible With", "value": "Android & iOS" },
    { "name": "Water Resistance", "value": "IP67 Splash Proof" },
    { "name": "Strap Material", "value": "Silicone" },
    { "name": "Battery Life", "value": "2-5 Days (Typical Use)" },
    { "name": "Charger Type", "value": "Magnetic USB Charging" },
    { "name": "Functions", "value": "Calling, Fitness, Notifications, Health Monitoring" },
    { "name": "Country of Origin", "value": "China" }
  ],
  "reviews": [
    {
      "id": 1,
      "user": "Ayan K.",
      "avatar": "/placeholder.svg?height=40&width=40",
      "rating": 5,
      "date": "3 days ago",
      "title": "Best in this price!",
      "comment": "Bluetooth calling and display dono zabardast hain. Is price mein unbeatable value hai!",
      "helpful": 9,
      "images": []
    },
    {
      "id": 2,
      "user": "Maha R.",
      "avatar": "/placeholder.svg?height=40&width=40",
      "rating": 4,
      "date": "1 week ago",
      "title": "Stylish & functional",
      "comment": "Daily use ke liye perfect. Notifications aur fitness tracking bilkul theek kaam karte hain.",
      "helpful": 7,
      "images": []
    }
  ]
}, {
      id: 30231,
      name: "✨ Royal Heritage™ Gold Dial Watch with Classic Brown Leather Strap – Timeless Luxury for Men",
      price: 750,
      originalPrice: 1399,
      rating: 4.9,
      image:
        "	https://img.drz.lazcdn.com/static/pk/p/5f7b7773ff5c47853880994b3949c012.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "	https://img.drz.lazcdn.com/static/pk/p/23743f5e5efced6299793247b1708ab2.png_720x720q80.png_.webp",
      description:
        "👑 *Experience the Charm of Royalty\n\nTurn every moment into a statement of elegance with the *Royal Heritage™ Analog Watch. This masterpiece blends vintage charm with a modern flair — featuring a golden bezel, crisp white dial, and premium brown leather strap. Crafted for the modern gentleman who values *style, class, and timeless design*.\n\n💼 Perfect for business meetings, weddings, formal dinners, or daily elegance. This isn’t just a watch — it’s your personal signature.\n\n🎁 A premium gift choice for birthdays, anniversaries, Father’s Day, or corporate appreciation.",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/5f7b7773ff5c47853880994b3949c012.jpg_720x720q80.jpg_.webp",
        "	https://img.drz.lazcdn.com/static/pk/p/23743f5e5efced6299793247b1708ab2.png_720x720q80.png_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/22a71b70bc6a14e98d2b36e92640a986.jpg_720x720q80.jpg_.webp",
        // "https://img.drz.lazcdn.com/static/pk/p/5f7b7773ff5c47853880994b3949c012.jpg_720x720q80.jpg_.webp",
        watch00011,
        // watch0005,
        watch0006,
        watch0007,
        watch00012,
        watch0008,
        watch0009,
        watch00016,
        watch00013,
        watch00014,
        watch00010,
        watch00015,
        watch0004,
      ],
      stock: 29,
      sku: "RH-GOLD-BROWN-LEATHER-2025",
      brand: "Royal Heritage™",
      category: "Luxury Watches",
      tags: [
        "luxury watch",
        "premium men's watch",
        "vintage leather watch",
        "gold analog watch",
        "classic dress watch",
        "gift for him",
      ],
      features: [
        "🔥 Bold & Elegant Golden Frame – Commands Attention",
        "🕰 Precision Quartz Movement – Always On Time",
        "🧵 Textured Brown Leather Strap – Comfort Meets Class",
        "🌟 White Dial with Royal Numerals – Simple Yet Sophisticated",
        "🎯 Lightweight Build – Stylish All-Day Wear",
        "🎁 Premium Box Packaging – Ready to Impress",
      ],
      specifications: [
        { name: "Brand", value: "Royal Heritage™" },
        { name: "Strap Material", value: "Genuine Leather Feel (PU)" },
        { name: "Dial Shape", value: "Round" },
        { name: "Display Type", value: "Analog" },
        { name: "Strap Color", value: "Brown" },
        { name: "Dial Color", value: "White with Gold Trim" },
        { name: "Water Resistance", value: "Not Waterproof" },
        { name: "Closure", value: "Classic Buckle" },
        { name: "Movement", value: "Quartz Japan Movement" },
        { name: "Country of Origin", value: "Imported" },
      ],
      reviews: [
        {
          id: 1,
          user: "Hamza R.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "1 day ago",
          title: "Boss Look 🔥",
          comment:
            "The gold and brown combo looks royal. People asked me where I got it from.",
          helpful: 13,
          images: [],
        },
        {
          id: 2,
          user: "Zeeshan A.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 days ago",
          title: "Feels Expensive!",
          comment:
            "Gifted it to my father and he thought it's worth 5K+. Superb quality and classy packaging.",
          helpful: 10,
          images: [],
        },
      ],
    },   
 {
  id: 30,
  name: "Luxury Starry Sky Women's Watch – Magnetic Elegance for Every Day",
  price: 600,
  originalPrice: 999,
  rating: 4.9,
  image: watch002,
  hoverImage: "https://img.drz.lazcdn.com/static/pk/p/aeaafa80c9e26fbc4d4c2350495097d3.jpg_720x720q80.jpg_.webp",
  description: `🌟 Shine Like the Stars 🌟
  Introducing the Starry Sky Luxury Watch – Where elegance meets everyday glam.

  ✨ Featuring:
  - Dazzling black galaxy dial with crystal hour markers
  - Chic rose gold magnetic mesh strap
  - Lightweight and comfortable magnetic buckle
  - Ideal for college, casual outings, or office elegance

  👩‍🎓💼 Whether you're slaying in class or owning the boardroom – this watch is your ultimate fashion companion.

  💖 Wear the sparkle. Own the style.`,
  images: [
    watch01,
    watch002,
    watch02,
    watch03,
    watch04,
    "https://img.drz.lazcdn.com/static/pk/p/cbadce40e2709cdcc3a5c65cd74b6834.jpg_720x720q80.jpg_.webp",
    "https://img.drz.lazcdn.com/static/pk/p/aeaafa80c9e26fbc4d4c2350495097d3.jpg_720x720q80.jpg_.webp",
    "https://img.drz.lazcdn.com/static/pk/p/51e5bbb10885ff7ac01ff0d34ac81d04.jpg_720x720q80.jpg_.webp",
    "https://img.drz.lazcdn.com/static/pk/p/dddd69896e1416b50069c57085d3e5ca.jpg_720x720q80.jpg_.webp",
    "https://img.drz.lazcdn.com/static/pk/p/879c541c0e01e36765e421203b1e6da3.jpg_720x720q80.jpg_.webp"
  ],
  stock: 25,
  sku: "WATCH-STARRY-ROSEGOLD-001",
  brand: "StarGlam",
  category: "Accessories",
  tags: [
    "women's watch",
    "magnetic watch",
    "rose gold watch",
    "starry dial",
    "luxury watch",
    "gift for her"
  ],
  features: [
    "Black starry galaxy dial with crystal markers",
    "Elegant rose gold mesh strap",
    "Magnetic clasp for perfect fit",
    "Lightweight and skin-friendly",
    "Suitable for daily or formal wear",
    "Premium packaging – ideal gift choice"
  ],
  specifications: [
    { name: "Brand", value: "StarGlam" },
    { name: "Strap Material", value: "Stainless Steel Mesh" },
    { name: "Dial Shape", value: "Round" },
    { name: "Display Type", value: "Analog" },
    { name: "Strap Color", value: "Rose Gold" },
    { name: "Dial Color", value: "Black Starry Sky" },
    { name: "Water Resistance", value: "Splash Resistant" },
    { name: "Closure", value: "Magnetic Clasp" },
    { name: "Movement", value: "Quartz" },
    { name: "Country of Origin", value: "China" }
  ],
  reviews: [
    {
      id: 1,
      user: "Hania A.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "4 days ago",
      title: "Stunning & Classy!",
      comment:
        "Absolutely loved the glittery dial and rose gold strap. Looks so premium on the wrist!",
      helpful: 10,
      images: []
    },
    {
      id: 2,
      user: "Noor F.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "1 week ago",
      title: "Elegant Look",
      comment:
        "Very elegant and fits comfortably thanks to the magnetic strap. Perfect for daily use.",
      helpful: 6,
      images: []
    }
  ]
}
,
    {
      id: 24,
      name: "2Pc Stitched Unique Dress for Girls - Trendy, Comfortable, Easy to Wear",
      price: 1999,
      originalPrice: 2399,
      rating: 4.7,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/20161591d66ea7c1e591e0ee2abee96c.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/6dd54bb6ed755843ec97774054e983cc.jpg_720x720q80.jpg_.webp",
      description:
        "Trendy and vibrant 2Pc stitched dress set for girls. This outfit includes a plain red long top paired with stylish black floral printed trousers. Made with breathable fabric, it's perfect for casual outings, daily wear, or festive occasions. The bold red top and eye-catching floral bottoms make it a standout piece in your wardrobe.",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/20161591d66ea7c1e591e0ee2abee96c.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/c0c4288daab729d4f4e27dae2e48a5ee.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/6dd54bb6ed755843ec97774054e983cc.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/77e5497a5236aea1aaef4bcc2f36f532.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/8e5ad2870a3a984dfabc0fc4d34c07a5.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/33ae39844545d056f9df240271599bc2.jpg_120x120q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/ada04d28d257dcdd7007ca9b325a595c.jpg_720x720q80.jpg_.webp",
      ],
      stock: 25,
      sku: "DRESS-RED-FLORAL-025",
      brand: "StyleZone",
      category: "Clothing",
      tags: [
        "girls dress",
        "stitched suit",
        "2Pc dress",
        "floral trousers",
        "trendy outfit",
      ],
      features: [
        "Breathable cotton blend fabric",
        "Elegant red long top",
        "Vibrant floral printed trousers",
        "Elastic waist for easy fit",
        "Perfect for casual and festive wear",
        "Easy to wash and maintain",
      ],
      specifications: [
        { name: "Brand", value: "StyleZone" },
        { name: "Material", value: "Cotton Blend" },
        { name: "Size Range", value: "S, M, L, XL" },
        { name: "Gender", value: "Girls" },
        { name: "Style", value: "Casual / Ethnic Fusion" },
        { name: "Number of Items", value: "2 (Top and Bottom)" },
        { name: "Color", value: "Red & Multicolor" },
        { name: "Pattern", value: "Solid & Floral Print" },
        { name: "Care Instructions", value: "Machine Wash Cold" },
        { name: "Country of Origin", value: "Pakistan" },
      ],
      reviews: [
        {
          id: 1,
          user: "Hania A.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "4 days ago",
          title: "Beautiful and unique!",
          comment:
            "The colors are super vibrant, and the floral design on the trousers really stands out. Got lots of compliments wearing this!",
          helpful: 10,
          images: [],
        },
        {
          id: 2,
          user: "Noor F.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 week ago",
          title: "Nice for casual wear",
          comment:
            "Good fabric quality. The red top is simple and elegant, while the pants are more stylish. Loved the combo.",
          helpful: 6,
          images: [],
        },
      ],
    },
    {
      id: 2,
      name: "Queen Printed Pink Color Lounge Wear Nightwear Sleepwear",
      price: 1360,
      originalPrice: 1499,
      rating: 4.6,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/65c2b80bf14e5fa429e03ebf80d722ba.jpg_400x400q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/5804ca79b1763226ce0260865e9bb9cd.jpg_720x720q80.jpg_.webp",
      description:
        "Cozy Women's Lounge Wear with Heart-Printed Trousers. This comfortable sleepwear set includes a stylish top and heart-printed pants. Made with soft, breathable fabric for a restful night's sleep. The elastic waistband ensures comfort, while the cute design adds a touch of charm to your nightwear collection. Perfect for lounging around the house or getting a good night's sleep.",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/65c2b80bf14e5fa429e03ebf80d722ba.jpg_400x400q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/5804ca79b1763226ce0260865e9bb9cd.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/e9c72a1e57f9fbe68732a02e98f9e2af.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/f9d3de2d5b53ac4bae4fad929b6270ad.jpg_720x720q80.jpg_.webp",
      ],
      stock: 18,
      sku: "LOUNGE-PINK-002",
      brand: "Queen Lounge",
      category: "Clothing",
      tags: ["lounge wear", "women", "sleepwear", "nightwear", "pink"],
      features: [
        "Soft and breathable fabric",
        "Heart-printed trousers",
        "Comfortable elastic waistband",
        "Stylish design",
        "Perfect for lounging and sleeping",
        "Machine washable",
      ],
      specifications: [
        { name: "Brand", value: "Queen Lounge" },
        { name: "Material", value: "Cotton Blend" },
        { name: "Size Range", value: "S, M, L, XL" },
        { name: "Gender", value: "Women" },
        { name: "Style", value: "Casual Sleepwear" },
        { name: "Number of Items", value: "2 (Top and Bottom)" },
        { name: "Color", value: "Pink" },
        { name: "Pattern", value: "Heart Print" },
        { name: "Care Instructions", value: "Machine Wash Cold" },
        { name: "Country of Origin", value: "Pakistan" },
      ],
      reviews: [
        {
          id: 1,
          user: "Ayesha S.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "1 week ago",
          title: "So cute and comfortable!",
          comment:
            "I absolutely love this loungewear set! The fabric is so soft against the skin and the heart print is adorable. The fit is perfect - not too tight but still flattering. I've washed it several times and it still looks brand new.",
          helpful: 15,
          images: [
            "https://img.drz.lazcdn.com/static/pk/p/65c2b80bf14e5fa429e03ebf80d722ba.jpg_400x400q80.jpg_.webp",
          ],
        },
        {
          id: 2,
          user: "Fatima M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "3 weeks ago",
          title: "Good quality for the price",
          comment:
            "This is a cute and comfortable set. The material is soft and the pink color is exactly as shown in the pictures. I'm usually a size M and it fits perfectly. Taking one star off because the elastic in the waistband is a bit tight initially, but it loosens after a few wears.",
          helpful: 8,
          images: [],
        },
        {
          id: 3,
          user: "Zainab H.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 months ago",
          title: "Perfect gift!",
          comment:
            "I bought this as a gift for my sister and she loves it! The quality is excellent for the price and the design is really cute. Will definitely buy more from this brand.",
          helpful: 12,
          images: [],
        },
      ],
    },
    {
      id: 3,
      name: "Premium Laptop Backpack B210 – 16-Inch, Lightweight",
      price: 1345,
      originalPrice: 1650,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/db38fdcc53b7892dcdb2bd4c74d787f9.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/b669ad9f6eac1fbcb91c1cb5a1d71e2a.jpg_720x720q80.jpg_.webp",
      description:
        "Product details of Premium Laptop Backpack B210 – 16-Inch, Lightweight & Water-Repellent",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/db38fdcc53b7892dcdb2bd4c74d787f9.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/b669ad9f6eac1fbcb91c1cb5a1d71e2a.jpg_720x720q80.jpg_.webp",
      ],
      stock: 30,
      sku: "BACKPACK-B210",
      brand: "Premium Bags",
      category: "Accessories",
      tags: ["backpack", "laptop", "bag", "travel"],
      features: [
        "16-inch laptop compartment",
        "Lightweight design",
        "Water-repellent material",
        "Multiple compartments",
        "Padded shoulder straps",
      ],
      specifications: [
        { name: "Brand", value: "Premium Bags" },
        { name: "Material", value: "Polyester" },
        { name: "Capacity", value: "16-inch laptop" },
        { name: "Water Resistant", value: "Yes" },
        { name: "Color", value: "Black" },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmed K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "Zabardast quality aur design!",
          comment:
            "Mein ne ye backpack apne laptop ke liye kharida aur mujhe bilkul pasand aya. Material bohat acha hai aur waterproof bhi hai. Mere 15.6 inch laptop ke liye perfect size hai. Straps bhi comfortable hain aur back pe padding achi hai. Highly recommend karta hun!",
          helpful: 22,
          images: [],
        },
        {
          id: 2,
          user: "Bilal M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Acha bag hai lekin zipper thora kamzor hai",
          comment:
            "Overall bag bohat acha hai. Space kaafi hai aur design bhi modern hai. Bas zipper thora kamzor lagta hai, isliye 4 stars de raha hun. Baki sab kuch perfect hai, especially padding jo laptop ko protect karti hai.",
          helpful: 14,
          images: [],
        },
        {
          id: 3,
          user: "Sana F.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "University ke liye perfect bag!",
          comment:
            "Mein ye bag university ke liye use karti hun aur ye wakai bohat acha hai. Mera laptop, books, aur lunch box sab kuch easily fit ho jata hai. Aur design itna stylish hai ke sab poochte hain ke kahan se liya. Paison ke hisaab se value bohat achi hai.",
          helpful: 19,
          images: [],
        },
      ],
    },
    {
      id: 4,
      name: "Waterproof Fanny Pack Waist Belt Bag Purse Outdoor Sport",
      price: 1350,
      originalPrice: 1450,
      rating: 5.0,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/e550a04eb5e7be012be302910dd3f131.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/c4a5ec30f2158d9cbc8bcf6b61949ac0.jpg_720x720q80.jpg_.webp",
      description:
        "Product details of Waterproof Fanny Pack Waist Belt Bag Purse Outdoor Sport Running Camping Waist pack",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/e550a04eb5e7be012be302910dd3f131.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/c4a5ec30f2158d9cbc8bcf6b61949ac0.jpg_720x720q80.jpg_.webp",
      ],
      stock: 45,
      sku: "FANNY-PACK-001",
      brand: "Outdoor Gear",
      category: "Accessories",
      tags: ["fanny pack", "waist bag", "outdoor", "sport"],
      features: [
        "Waterproof material",
        "Adjustable belt",
        "Multiple compartments",
        "Lightweight design",
        "Perfect for outdoor activities",
      ],
      specifications: [
        { name: "Brand", value: "Outdoor Gear" },
        { name: "Material", value: "Waterproof Nylon" },
        { name: "Adjustable Belt", value: "Yes" },
        { name: "Color", value: "Black" },
        { name: "Usage", value: "Outdoor Sports, Running, Camping" },
      ],
      reviews: [
        {
          id: 1,
          user: "Usman R.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 weeks ago",
          title: "Running ke liye perfect solution!",
          comment:
            "Mein roz subah running karta hun aur ye waist bag meri zaroorat ke liye bilkul perfect hai. Mobile, chabi aur thore paise rakhne ke liye jagah kaafi hai. Waterproof material bhi bohat acha hai, barish mein bhi koi masla nahi hota.",
          helpful: 17,
          images: [],
        },
        {
          id: 2,
          user: "Hina K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 months ago",
          title: "Traveling ke liye zabardast!",
          comment:
            "Mein ne ye bag Turkey trip ke liye kharida tha aur mujhe bohat maza aya isko use kar ke. Passport, paise aur phone sab safely rakh sakti hun. Adjustable belt ki wajah se fit bhi acha hai. Highly recommend karungi.",
          helpful: 12,
          images: [],
        },
        {
          id: 3,
          user: "Faisal T.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Acha product hai magar size thora chota hai",
          comment:
            "Quality achi hai aur material bhi waterproof hai. Lekin size thora chota hai, agar aap ke pass bara phone hai to mushkil ho sakta hai. Baki sab kuch acha hai, especially belt jo easily adjust ho jata hai.",
          helpful: 8,
          images: [],
        },
      ],
    },
    {
      id: 5,
      name: "7 in 1 Smart Watch - 7 Straps Smart watch",
      price: 1999,
      originalPrice: 2365,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/e9901bff069f91e5e2cf26d10c166bd2.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/1ac390f1dc83c5f34a6f2b2cf3166727.jpg_720x720q80.jpg_.webp",
      description:
        "7-in-1 Smart Watch: Your Ultimate Wearable Companion Experience the Future of Smart Watches",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/e9901bff069f91e5e2cf26d10c166bd2.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/1ac390f1dc83c5f34a6f2b2cf3166727.jpg_720x720q80.jpg_.webp",
      ],
      stock: 15,
      sku: "SMARTWATCH-7IN1",
      brand: "TechWear",
      category: "Electronics",
      tags: ["smart watch", "wearable", "fitness tracker", "gadget"],
      features: [
        "7 interchangeable straps",
        "Fitness tracking",
        "Heart rate monitor",
        "Sleep tracking",
        "Notification alerts",
        "Water resistant",
      ],
      specifications: [
        { name: "Brand", value: "TechWear" },
        { name: "Display", value: "1.3 inch Touch Screen" },
        { name: "Battery Life", value: "Up to 7 days" },
        { name: "Water Resistance", value: "IP67" },
        { name: "Compatibility", value: "Android & iOS" },
        { name: "Included", value: "Watch + 7 Straps" },
      ],
      reviews: [
        {
          id: 1,
          user: "Adnan M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "7 straps wala package bohat value for money hai!",
          comment:
            "Mein ne ye smartwatch apne liye kharidi aur mujhe bohat pasand ayi. 7 alag alag straps milne se har outfit ke sath match kar sakta hun. Battery life bhi kamal ki hai, full charge pe 5-6 din chal jati hai. Fitness tracking features bhi accurate hain.",
          helpful: 24,
          images: [],
        },
        {
          id: 2,
          user: "Saima K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Achi watch hai magar app thori slow hai",
          comment:
            "Watch ki quality achi hai aur straps bhi comfortable hain. Heart rate aur steps tracking accurate hai. Lekin mobile app thori slow chalti hai aur kabhi kabhi hang ho jati hai. Baki sab kuch acha hai, especially battery life jo bohat impressive hai.",
          helpful: 16,
          images: [],
        },
        {
          id: 3,
          user: "Kamran S.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "Expensive watches se behtar hai!",
          comment:
            "Mein ne pehle Samsung ki watch use ki thi jo is se 3 guna mehengi thi, lekin functionality almost same hai. Sleep tracking bohat accurate hai aur notifications bhi theek se aati hain. 7 straps milna ek bonus hai. Is price mein best option hai.",
          helpful: 31,
          images: [],
        },
      ],
    },
    {
      id: 6,
      name: "Glass Water Bottle for Girls & Boys - Glass Leakproof Design for Ultimate Freshness - Perfect for School, Gym, and Office Durable Glass/Plastic Hybrid - Stay Hydrated in Style with Fancy Bottles for Water for Girls School",
      price: 699,
      originalPrice: 899,
      rating: 4.6,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/12fb392c98ac9dd27d7117520f9728ad.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/c0b003fab3f92db611935fce72b01ed2.jpg_720x720q80.jpg_.webp",
      description:
        "Product details of Water Bottles, Glass/Plastic 400 ML Water bottles, Sports water bottles Double walled",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/2f0fab5cf2baabc839fcd4586ca46dd0.jpg_720x720q80.jpg_.webp",
        bottle1,
        bottle2,
        "https://img.drz.lazcdn.com/static/pk/p/dc0419b1be81241041dfd837f4c00927.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/70fb98623146dfbde8fb4cf3bb90617a.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/72b18b330e2f94f11f0c44f0aec5f667.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/f16ecac7ed079a5893b24ba06fb425c1.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/025e6b91247cc4859475c23f55f7b319.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/f5084d4671793decf71994abcccfc59e.jpg_720x720q80.jpg_.webp",
      ],
      stock: 50,
      sku: "BOTTLE-400ML",
      brand: "EcoBottle",
      category: "Home & Kitchen",
      tags: ["water bottle", "glass", "plastic", "sports"],
      features: [
        "400 ML capacity",
        "Double walled insulation",
        "Available in glass or plastic",
        "Leak-proof design",
        "Perfect for sports and daily use",
      ],
      specifications: [
        { name: "Brand", value: "EcoBottle" },
        { name: "Material", value: "Glass/Plastic" },
        { name: "Capacity", value: "400 ML" },
        { name: "Double Walled", value: "Yes" },
        { name: "Leak Proof", value: "Yes" },
      ],
      reviews: [
        {
          id: 1,
          user: "Asif R.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "1 month ago",
          title: "Pani thanda rehta hai ghanton tak!",
          comment:
            "Double wall insulation wakai kaam karti hai. Mein subah bottle mein pani dalta hun aur shaam tak thanda rehta hai. Leak proof bhi hai, kabhi bhi bag mein pani nahi gira. Glass wali bottle thori bhari hai lekin quality bohat achi hai.",
          helpful: 19,
          images: [],
        },
        {
          id: 2,
          user: "Nadia F.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "2 months ago",
          title: "Achi bottle hai magar size chota hai",
          comment:
            "Bottle ki quality achi hai aur design bhi stylish hai. Lekin 400ml thora chota hai, kam se kam 600ml hona chahiye tha. Baki sab kuch acha hai, especially cap jo leak proof hai aur easily open ho jata hai.",
          helpful: 11,
          images: [],
        },
        {
          id: 3,
          user: "Tariq M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 weeks ago",
          title: "Gym ke liye perfect bottle!",
          comment:
            "Mein roz gym jata hun aur ye bottle mere liye perfect hai. Size convenient hai aur bottle grip mein achi aati hai. Double wall insulation ki wajah se pani thanda rehta hai pure workout ke doran. Highly recommend karta hun.",
          helpful: 14,
          images: [],
        },
      ],
    },
    {
      id: 7,
      name: "Glass Water Bottle for Girls & Boys - Glass Leakproof Design for Ultimate Freshness - Perfect for School, Gym, and Office Durable Glass/Plastic Hybrid - Stay Hydrated in Style with Fancy Bottles for Water for Girls School",
      price: 499,
      originalPrice: 650,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/2f0fab5cf2baabc839fcd4586ca46dd0.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/f5084d4671793decf71994abcccfc59e.jpg_720x720q80.jpg_.webp",
      description:
        "Product details of Stylish 400ml Glass Water Bottle for Girls & Boys - Insulated Leakproof Design",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/2f0fab5cf2baabc839fcd4586ca46dd0.jpg_720x720q80.jpg_.webp",
        bottle1,
        bottle2,
        "https://img.drz.lazcdn.com/static/pk/p/dc0419b1be81241041dfd837f4c00927.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/70fb98623146dfbde8fb4cf3bb90617a.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/72b18b330e2f94f11f0c44f0aec5f667.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/f16ecac7ed079a5893b24ba06fb425c1.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/025e6b91247cc4859475c23f55f7b319.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/f5084d4671793decf71994abcccfc59e.jpg_720x720q80.jpg_.webp",
      ],
      stock: 35,
      sku: "BOTTLE-STYLISH-400",
      brand: "StyleBottle",
      category: "Home & Kitchen",
      tags: ["water bottle", "glass", "stylish", "insulated"],
      features: [
        "400ml capacity",
        "Stylish design",
        "Insulated to keep drinks at desired temperature",
        "Leakproof design",
        "Suitable for both girls and boys",
      ],
      specifications: [
        { name: "Brand", value: "StyleBottle" },
        { name: "Material", value: "Glass" },
        { name: "Capacity", value: "400ml" },
        { name: "Insulated", value: "Yes" },
        { name: "Leak Proof", value: "Yes" },
        { name: "Suitable For", value: "Girls & Boys" },
      ],
      reviews: [
        {
          id: 1,
          user: "Amna S.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "Bohat stylish aur practical bottle hai!",
          comment:
            "Mein ne ye bottle college ke liye li aur sab dost poochte hain ke kahan se li hai. Design bohat stylish hai aur glass ki quality bhi achi hai. Insulation achi hai, chai 2-3 ghante tak garam rehti hai. Leak proof bhi hai jo ke bohat zaroori hai.",
          helpful: 21,
          images: [],
        },
        {
          id: 2,
          user: "Hassan T.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Achi bottle hai lekin thori nazuk hai",
          comment:
            "Bottle ka design aur functionality dono ache hain. Lekin glass hone ki wajah se thori nazuk hai, ek baar gir gayi to toot sakti hai. Insulation achi hai aur cap bhi leak proof hai. Overall achi bottle hai office ke liye.",
          helpful: 13,
          images: [],
        },
        {
          id: 3,
          user: "Sadia K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "Gift ke liye perfect option!",
          comment:
            "Mein ne apni behn ko birthday gift ke tor pe di aur use bohat pasand ayi. Packaging bhi achi thi aur bottle ki quality premium feel deti hai. Price bhi reasonable hai quality ke hisaab se. Definitely recommend karungi.",
          helpful: 18,
          images: [],
        },
      ],
    },
    {
      id: 8,
      name: "Handbag for girls - Bags for girls - Leather Bag for women mini Avaliable colors: black, white, mehroon, pink and brown",
      price: 1599,
      originalPrice: 2299,
      rating: 5.0,
      image: bag1,
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/d301738b58934c8b990b9410491a25b4.jpg_720x720q80.jpg_.webp",
      description:
        "PRODUCT DETAILS Structure: This Stylish Bag having Moderate capacity that can hold your books, purses, and lots of other things comfortably.",
      images: [
        bag1,
        bag2,
        bag3,
        bag4,
        "https://img.drz.lazcdn.com/static/pk/p/98fda812e5e20376bb1acd50f26f0645.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/7be6327d30fb47e53525c44a3bd607b6.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/f56a56534f99ec01ce4e09aca29985fd.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/ebed73506c951a6444bba2d80cc7e3b6.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/d301738b58934c8b990b9410491a25b4.jpg_720x720q80.jpg_.webp",
      ],
      stock: 20,
      sku: "HANDBAG-MINI-001",
      brand: "FashionBags",
      category: "Accessories",
      tags: ["handbag", "leather", "women", "mini", "girls"],
      features: [
        "Stylish design",
        "Moderate capacity",
        "Premium leather material",
        "Perfect size for daily use",
        "Multiple compartments",
      ],
      specifications: [
        { name: "Brand", value: "FashionBags" },
        { name: "Material", value: "Leather" },
        { name: "Size", value: "Mini" },
        { name: "Gender", value: "Women" },
        { name: "Style", value: "Casual" },
      ],
      reviews: [
        {
          id: 1,
          user: "Farah N.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 weeks ago",
          title: "Bohat pyari aur stylish bag hai!",
          comment:
            "Mein ne ye bag apni cousin ko gift ki aur use bohat pasand ayi. Leather ki quality achi hai aur design bhi latest hai. Size perfect hai daily use ke liye, mobile, wallet aur makeup sab kuch aa jata hai. Is price mein best option hai.",
          helpful: 26,
          images: [],
        },
        {
          id: 2,
          user: "Mehwish A.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "1 month ago",
          title: "Quality achi hai aur design bhi latest hai",
          comment:
            "Bag ki quality expectations se bhi better hai. Stitching perfect hai aur leather bhi genuine lagti hai. Size chota hai lekin zaroori cheezein aa jati hain. Mein ne black color li hai jo ke har outfit ke sath match ho jati hai. Highly recommend karungi.",
          helpful: 19,
          images: [],
        },
        {
          id: 3,
          user: "Rabia S.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "2 months ago",
          title: "Achi bag hai magar strap thora kamzor hai",
          comment:
            "Bag ka design aur size dono ache hain. Compartments bhi sufficient hain daily items ke liye. Bas strap thora kamzor lagta hai, agar weight zyada ho to problem ho sakti hai. Baki sab kuch acha hai, especially price jo ke reasonable hai.",
          helpful: 14,
          images: [],
        },
      ],
    },
    {
      id: 9,
      name: "Mobile Phone Stand For Phone Retractable Holder Desk Table",
      price: 620,
      originalPrice: 850,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/03694657ce3560c31c3fc78adb303ada.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/85e2cb8c83d41b809f5d4ae2ef60bcc8.jpg_720x720q80.jpg_.webp",
      description:
        "The multifunctional live broadcast support is a good helper for live broadcast and TV watching.",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/03694657ce3560c31c3fc78adb303ada.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/85e2cb8c83d41b809f5d4ae2ef60bcc8.jpg_720x720q80.jpg_.webp",
      ],
      stock: 40,
      sku: "PHONE-STAND-001",
      brand: "TechAccessories",
      category: "Electronics",
      tags: ["phone stand", "holder", "desk", "table", "retractable"],
      features: [
        "Retractable design",
        "Adjustable height and angle",
        "Stable base",
        "Compatible with most phones",
        "Perfect for live streaming and watching videos",
      ],
      specifications: [
        { name: "Brand", value: "TechAccessories" },
        { name: "Material", value: "ABS Plastic" },
        { name: "Adjustable", value: "Yes" },
        { name: "Retractable", value: "Yes" },
        { name: "Compatible With", value: "Most Smartphones" },
      ],
      reviews: [
        {
          id: 1,
          user: "Imran K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "Online classes ke liye perfect solution!",
          comment:
            "Mein online classes leta hun aur ye stand meri life bohat easy kar di hai. Ab phone ko haath mein pakarne ki zaroorat nahi hai. Height aur angle adjust karna bohat easy hai. Material bhi sturdy hai aur base stable hai. Highly recommend karta hun.",
          helpful: 23,
          images: [],
        },
        {
          id: 2,
          user: "Ayesha R.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Kitchen mein recipes dekhne ke liye perfect hai",
          comment:
            "Mein cooking ke time recipes dekhne ke liye use karti hun aur ye bohat convenient hai. Adjustable height ki wajah se har angle se dekh sakti hun. Bas thora sa unstable hai agar phone bara ho to. Baki sab kuch acha hai, especially price jo ke reasonable hai.",
          helpful: 17,
          images: [],
        },
        {
          id: 3,
          user: "Zubair A.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "Work from home ke liye zaroori cheez!",
          comment:
            "Work from home ke doran video calls ke liye ye stand bohat useful hai. Hands-free experience milti hai aur neck pain bhi nahi hoti. Retractable design ki wajah se storage bhi easy hai. Material durable hai aur price bhi reasonable hai. Must-buy product hai.",
          helpful: 29,
          images: [],
        },
      ],
    },
    {
      id: 10,
      name: "Musk Al Mahal - Black And Silver Original Attar For Men - 12ml",
      price: 2099,
      originalPrice: 2399,
      rating: 5.0,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/727e1bfad2d99871c26695cf700b8a4c.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/e9ba9a80f72ea7e7fb03f3ff5d246c5b.jpg_720x720q80.jpg_.webp",
      description:
        "Product details of Musk Al Mahal - Black And Silver Original Attar For Men - 12ml Pakistan's No.#1 Attar Brand Affordable Pricing",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/727e1bfad2d99871c26695cf700b8a4c.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/e9ba9a80f72ea7e7fb03f3ff5d246c5b.jpg_720x720q80.jpg_.webp",
      ],
      stock: 25,
      sku: "ATTAR-MUSK-12ML",
      brand: "Al Mahal",
      category: "Beauty",
      tags: ["attar", "perfume", "men", "fragrance"],
      features: [
        "Original attar",
        "Black and silver variant",
        "12ml quantity",
        "Long-lasting fragrance",
        "Pakistan's #1 attar brand",
      ],
      specifications: [
        { name: "Brand", value: "Al Mahal" },
        { name: "Type", value: "Attar" },
        { name: "Quantity", value: "12ml" },
        { name: "Gender", value: "Men" },
        { name: "Variant", value: "Black and Silver" },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmed K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 months ago",
          title: "Khusboo zabardast hai aur long lasting bhi!",
          comment:
            "Mein ne ye attar pehli baar try kiya hai aur wakai bohat acha hai. Khusboo bohat unique hai aur poora din rehti hai. Quantity kam hai lekin thora sa lagane se kaam chal jata hai. Packaging bhi premium hai. Zaroor try karein.",
          helpful: 24,
          images: [
            "https://img.drz.lazcdn.com/static/pk/p/727e1bfad2d99871c26695cf700b8a4c.jpg_720x720q80.jpg_.webp",
          ],
        },
        {
          id: 2,
          user: "Saad M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "1 month ago",
          title: "Zabardast product, value for money!",
          comment:
            "Ye meri second purchase hai is attar ki. Khusboo wakai zabardast hai aur ghanton tak rehti hai. Packaging bhi premium feel deti hai. Highly recommended hai agar aap long lasting fragrance chahte hain.",
          helpful: 18,
          images: [],
        },
        {
          id: 3,
          user: "Fatima R.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "3 months ago",
          title: "Acha hai lekin thora mehenga hai",
          comment:
            "Attar ki quality achi hai aur khusboo bhi unique hai. Lekin price thora zyada hai quantity ke hisaab se. Baki sab kuch acha hai, especially longevity jo ke impressive hai. Recommend karungi lekin sale pe lena behtar hai.",
          helpful: 7,
          images: [],
        },
      ],
    },
    {
      id: 11,
      name: "The Legend | Finest Classical - Modern Combo Perfume | 50ml",
      price: 1850,
      originalPrice: 2350,
      rating: 5,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/f65408f5ab3da5042e39b6cb570d8e10.png_720x720q80.png_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/f3e1823df660842d398e1f4389a0e329.png_720x720q80.png_.webp",
      description:
        "The Legend | Finest Classical - Modern Combo Perfume | Scents N Stories | 50ml",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/f65408f5ab3da5042e39b6cb570d8e10.png_720x720q80.png_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/f3e1823df660842d398e1f4389a0e329.png_720x720q80.png_.webp",
      ],
      stock: 18,
      sku: "PERFUME-LEGEND-50ML",
      brand: "Scents N Stories",
      category: "Beauty",
      tags: ["perfume", "fragrance", "combo", "classical", "modern"],
      features: [
        "Finest classical-modern combo",
        "50ml quantity",
        "Premium fragrance",
        "Long-lasting scent",
        "Elegant bottle design",
      ],
      specifications: [
        { name: "Brand", value: "Scents N Stories" },
        { name: "Type", value: "Perfume" },
        { name: "Quantity", value: "50ml" },
        { name: "Style", value: "Classical-Modern Combo" },
        { name: "Gender", value: "Unisex" },
      ],
      reviews: [
        {
          id: 1,
          user: "Hamza K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "International brands se behtar hai!",
          comment:
            "Mein ne bohat saare international perfumes try kiye hain lekin ye local brand unse behtar hai. Khusboo unique hai aur lasting bhi achi hai. Bottle design bhi premium hai. Price thora zyada hai lekin quality ke hisaab se theek hai. Highly recommend karta hun.",
          helpful: 31,
          images: [],
        },
        {
          id: 2,
          user: "Sana T.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "1 month ago",
          title: "Gift ke liye perfect option!",
          comment:
            "Mein ne apne husband ko anniversary pe gift kiya aur unhe bohat pasand aya. Packaging premium hai aur khusboo bhi unique hai. Unisex hone ki wajah se mein bhi use kar sakti hun. Quantity bhi achi hai, 50ml kaafi time tak chal jata hai.",
          helpful: 22,
          images: [],
        },
        {
          id: 3,
          user: "Ali R.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "3 months ago",
          title: "Acha perfume hai lekin lasting thori kam hai",
          comment:
            "Perfume ki quality achi hai aur initial khusboo bohat achi hai. Lekin 3-4 ghante ke baad fade hone lagti hai. Bottle design premium hai aur packaging bhi achi hai. Overall acha product hai lekin lasting pe thora kaam karna chahiye.",
          helpful: 15,
          images: [],
        },
      ],
    },
    {
      id: 12,
      name: "Chukoor Slim Long Mobile Money and Card holder Wallet",
      price: 650,
      originalPrice: 999,
      rating: 5.0,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/811006b7477e95801e732c00ac93d2f8.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/f1e107a3b8164883718c2b3d05a2c882.jpg_720x720q80.jpg_.webp",
      description:
        "Are you tired of struggling with cluttered, bulky wallets that cramp your style?",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/811006b7477e95801e732c00ac93d2f8.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/f1e107a3b8164883718c2b3d05a2c882.jpg_720x720q80.jpg_.webp",
      ],
      stock: 30,
      sku: "WALLET-SLIM-001",
      brand: "Chukoor",
      category: "Accessories",
      tags: ["wallet", "slim", "card holder", "money holder", "mobile"],
      features: [
        "Slim design",
        "Long format",
        "Mobile phone compatible",
        "Multiple card slots",
        "Money compartment",
        "Premium material",
      ],
      specifications: [
        { name: "Brand", value: "Chukoor" },
        { name: "Material", value: "Leather" },
        { name: "Style", value: "Slim Long" },
        { name: "Card Slots", value: "Multiple" },
        { name: "Mobile Compatible", value: "Yes" },
      ],
      reviews: [
        {
          id: 1,
          user: "Farhan M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 weeks ago",
          title: "Slim design wakai convenient hai!",
          comment:
            "Pehle mein bara wallet use karta tha jo jeans mein mushkil se fit hota tha. Ye wallet itna slim hai ke easily pocket mein fit ho jata hai. Card slots bhi sufficient hain aur leather ki quality bhi achi hai. Highly recommend karta hun.",
          helpful: 27,
          images: [],
        },
        {
          id: 2,
          user: "Usman S.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "2 months ago",
          title: "Achi quality hai lekin card slots thore kam hain",
          comment:
            "Wallet ki quality achi hai aur design bhi modern hai. Lekin card slots thore kam hain, sirf 4 cards hi rakh sakte hain. Cash compartment convenient hai aur leather bhi genuine lagti hai. Overall acha product hai daily use ke liye.",
          helpful: 19,
          images: [],
        },
        {
          id: 3,
          user: "Bilal K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "1 month ago",
          title: "Value for money product hai!",
          comment:
            "Is price mein itni achi quality rare hai. Leather genuine hai aur stitching bhi perfect hai. Slim design ki wajah se pocket mein bulge nahi banta. Card slots aur cash compartment dono convenient hain. Definitely recommend karunga.",
          helpful: 23,
          images: [],
        },
      ],
    },
    {
      id: 13,
      name: "Pack of 2 perfumes black car and black market best for gift 100 ml each",
      price: 1999,
      originalPrice: 2365,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/9cab0addfff3ffd0065dbf210d85a919.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/2118a48d4b8b0e2fd0aefcaa1f14d201.jpg_720x720q80.jpg_.webp",
      description:
        "Product details of Impression of Black Car Perfume For Men 100 ml CAR PERFUME FOR MEN 100ML, 100% Original BEST PERFUME FOR MEN",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/9cab0addfff3ffd0065dbf210d85a919.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/2118a48d4b8b0e2fd0aefcaa1f14d201.jpg_720x720q80.jpg_.webp",
      ],
      stock: 15,
      sku: "PERFUME-PACK-2",
      brand: "Black Collection",
      category: "Beauty",
      tags: ["perfume", "men", "gift pack", "black car", "black market"],
      features: [
        "Pack of 2 perfumes",
        "Black Car and Black Market variants",
        "100ml each bottle",
        "Perfect for gifting",
        "100% original fragrances",
        "Long-lasting scent",
      ],
      specifications: [
        { name: "Brand", value: "Black Collection" },
        { name: "Type", value: "Perfume" },
        { name: "Quantity", value: "100ml each" },
        { name: "Gender", value: "Men" },
        { name: "Variants", value: "Black Car, Black Market" },
        { name: "Pack", value: "2 Bottles" },
      ],
      reviews: [
        {
          id: 1,
          user: "Kashif R.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "2 bottles ka pack bohat value for money hai!",
          comment:
            "Dono perfumes ki quality achi hai aur khusboo bhi unique hai. Black Car thora formal hai aur Black Market casual events ke liye perfect hai. 100ml ki bottles hain to kaafi time tak chalein gi. Gift ke liye bhi perfect option hai. Highly recommend karta hun.",
          helpful: 29,
          images: [],
        },
        {
          id: 2,
          user: "Asad M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Achi quality hai lekin lasting thori kam hai",
          comment:
            "Perfumes ki initial khusboo bohat achi hai aur bottles bhi premium lagte hain. Lekin lasting 3-4 ghante se zyada nahi hai, dobara lagana parta hai. Baki sab kuch acha hai, especially price jo ke 2 bottles ke liye reasonable hai.",
          helpful: 21,
          images: [],
        },
        {
          id: 3,
          user: "Naveed S.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "Original brands ke dupes mein best option!",
          comment:
            "Mein ne original Black XS aur Black Code dono try kiye hain aur ye dupes quality mein kaafi close hain. Khusboo almost same hai aur price fraction hai. Bottles bhi ache hain aur spray mechanism smooth hai. Definitely value for money product hai.",
          helpful: 34,
          images: [],
        },
      ],
    },
    {
      id: 14,
      name: "Florse | Our Best Floral Fragrance | Pocket Perfume | 5ml",
      price: 750,
      originalPrice: 799,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/cc39782c733f04410bc22cabf70f06ad.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/cc39782c733f04410bc22cabf70f06ad.jpg_720x720q80.jpg_.webp",
      description:
        "Product details of Florse | Our Best Floral Fragrance | Pocket Perfume | 5ml 15 Days Easy Returns",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/cc39782c733f04410bc22cabf70f06ad.jpg_720x720q80.jpg_.webp",
      ],
      stock: 40,
      sku: "PERFUME-FLORSE-5ML",
      brand: "Florse",
      category: "Beauty",
      tags: ["perfume", "floral", "pocket", "fragrance", "small"],
      features: [
        "Best floral fragrance",
        "Pocket-sized perfume",
        "5ml quantity",
        "Easy to carry",
        "Long-lasting scent",
        "15 days easy returns",
      ],
      specifications: [
        { name: "Brand", value: "Florse" },
        { name: "Type", value: "Pocket Perfume" },
        { name: "Quantity", value: "5ml" },
        { name: "Fragrance", value: "Floral" },
        { name: "Returns", value: "15 Days Easy Returns" },
      ],
      reviews: [
        {
          id: 1,
          user: "Saba K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "Chota size lekin zabardast khusboo!",
          comment:
            "Size chota hai lekin khusboo bohat achi hai. Mein apne purse mein rakhti hun aur jab bhi zaroorat ho use kar leti hun. Floral notes bohat ache hain aur lasting bhi achi hai. Pocket size hone ki wajah se travel ke liye bhi convenient hai.",
          helpful: 18,
          images: [],
        },
        {
          id: 2,
          user: "Nida R.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Achi khusboo hai lekin quantity thori kam hai",
          comment:
            "Perfume ki quality achi hai aur khusboo bhi unique hai. Lekin 5ml bohat jaldi khatam ho jata hai, especially agar daily use karein to. Price thora zyada hai quantity ke hisaab se. Baki sab kuch acha hai, especially packaging jo ke cute hai.",
          helpful: 12,
          images: [],
        },
        {
          id: 3,
          user: "Amina F.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "Office ke liye perfect option!",
          comment:
            "Mein office mein use karti hun aur ye perfect hai. Khusboo light hai lekin noticeable hai, overpowering nahi hai. Pocket size hone ki wajah se desk drawer mein easily rakh sakti hun. Lasting bhi achi hai, 4-5 ghante tak rehti hai. Recommend karungi.",
          helpful: 21,
          images: [],
        },
      ],
    },
    {
      id: 15,
      name: "Afnan 9pm EDP 100ml For Men - Best designer perfumes",
      price: 6199,
      originalPrice: 6999,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/e50bdf271c6c095f35d9c54fba007ed0.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/fe1e9fb7b1aed14167a2279f05fa1775.jpg_720x720q80.jpg_.webp",
      description:
        "The Title says it all. 9 pm edp can be found for as low as 16€. Doesn't smell synthetic at all.",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/e50bdf271c6c095f35d9c54fba007ed0.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/fe1e9fb7b1aed14167a2279f05fa1775.jpg_720x720q80.jpg_.webp",
      ],
      stock: 10,
      sku: "PERFUME-AFNAN-9PM",
      brand: "Afnan",
      category: "Beauty",
      tags: ["perfume", "men", "designer", "EDP", "luxury"],
      features: [
        "Designer perfume",
        "100ml quantity",
        "Eau De Parfum (EDP)",
        "Non-synthetic smell",
        "Long-lasting fragrance",
        "Premium quality",
      ],
      specifications: [
        { name: "Brand", value: "Afnan" },
        { name: "Type", value: "Eau De Parfum (EDP)" },
        { name: "Quantity", value: "100ml" },
        { name: "Gender", value: "Men" },
        { name: "Variant", value: "9pm" },
      ],
      reviews: [
        {
          id: 1,
          user: "Faisal M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "International quality ka local price pe!",
          comment:
            "Mein ne bohat saare designer perfumes try kiye hain aur ye unse kam nahi hai. Khusboo unique hai aur lasting bhi zabardast hai, 8-10 ghante tak rehti hai. Bottle design bhi premium hai. Is price mein best option hai agar aap quality chahte hain.",
          helpful: 32,
          images: [],
        },
        {
          id: 2,
          user: "Adeel R.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Achi quality hai lekin thora mehenga hai",
          comment:
            "Perfume ki quality top notch hai aur khusboo bhi unique hai. Lekin price thora zyada hai local market ke hisaab se. Bottle design premium hai aur packaging bhi achi hai. Overall acha product hai lekin sale pe lena behtar hai.",
          helpful: 19,
          images: [],
        },
        {
          id: 3,
          user: "Kamran T.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "Shadiyon aur formal events ke liye perfect!",
          comment:
            "Mein ne ye perfume cousin ki shadi ke liye kharida tha aur sab ne notice kiya. Khusboo bohat unique hai aur lasting bhi zabardast hai, poori raat rehti hai. Bottle bhi premium lagti hai aur gift ke liye perfect option hai. Highly recommend karta hun.",
          helpful: 27,
          images: [],
        },
      ],
    },
    {
      id: 16,
      name: "Top 5 Spray Samples Set | For Men | Pocket Perfume | 5ml",
      price: 1199,
      originalPrice: 1399,
      rating: 5.0,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/f56a56534f99ec01ce4e09aca29985fd.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/d301738b58934c8b990b9410491a25b4.jpg_720x720q80.jpg_.webp",
      description:
        "Top 5 Sample | For Men | Pocket Perfume These are our all-time top-rated fragrance samples",
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/f56a56534f99ec01ce4e09aca29985fd.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/pk/p/d301738b58934c8b990b9410491a25b4.jpg_720x720q80.jpg_.webp",
      ],
      stock: 25,
      sku: "PERFUME-TOP5-SET",
      brand: "Fragrance Collection",
      category: "Beauty",
      tags: ["perfume", "men", "sample set", "pocket", "spray"],
      features: [
        "Set of top 5 fragrances",
        "Pocket-sized perfumes",
        "5ml each",
        "All-time top-rated scents",
        "Perfect for trying different fragrances",
        "Ideal for travel",
      ],
      specifications: [
        { name: "Brand", value: "Fragrance Collection" },
        { name: "Type", value: "Pocket Perfume Set" },
        { name: "Quantity", value: "5ml each (5 bottles)" },
        { name: "Gender", value: "Men" },
        { name: "Variants", value: "Top 5 Fragrances" },
      ],
      reviews: [
        {
          id: 1,
          user: "Rizwan K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "Variety try karne ka best tarika!",
          comment:
            "Mein ne ye set isliye liya ke different fragrances try kar sakun. Har perfume ki khusboo unique hai aur quality bhi achi hai. Size chota hai lekin try karne ke liye perfect hai. Is price mein 5 alag alag perfumes milna bohat achi deal hai.",
          helpful: 26,
          images: [],
        },
        {
          id: 2,
          user: "Shahid M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "1 month ago",
          title: "Travel ke liye zabardast option!",
          comment:
            "Mein travel bohat karta hun aur ye set mere liye perfect hai. Chote bottles hain to airport security mein koi problem nahi hoti. Har perfume ki khusboo achi hai aur mood ke hisaab se change kar sakta hun. Highly recommend karta hun.",
          helpful: 19,
          images: [],
        },
        {
          id: 3,
          user: "Yasir A.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "3 months ago",
          title: "Achi variety hai lekin lasting thori kam hai",
          comment:
            "Set mein variety achi hai aur har perfume ki khusboo unique hai. Lekin lasting 2-3 ghante se zyada nahi hai, dobara lagana parta hai. Size chota hai to jaldi khatam ho jate hain. Baki sab kuch acha hai, especially packaging jo ke premium hai.",
          helpful: 14,
          images: [],
        },
      ],
    },
    {
      id: 17,
      name: "[1pc Men'S Fashion Quartz Watch] Men'S Quartz Wrist Watch, Business Style, Round Alloy Case, PU Leather Strap, Non-Rechargeable Battery, Fashionable Casual Business Watches",
      price: 999,
      originalPrice: 1099,
      rating: 5.0,
      image:
        "https://img.kwcdn.com/product/fancy/161af33d-8c8b-474b-a005-3cef170a8e62.jpg?imageView2/2/w/800/q/70/format/webp",
      hoverImage:
        "https://img.kwcdn.com/product/fancy/0a650c99-bcae-4e4d-a15b-103e694b5b7c.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "Strap Material: PU Leather Watches case material: Alloy Dial Shape: Round Water Resistance Level: Non - Waterproof Style: Business Movement: Quartz Watches Connection Method: None Drive Mode: Electronic Feature: Other Display Type: Pointer Wireless Property: none Wearing Instructions: Regular Cleaning Power Mode: Battery Powered Operating Voltage: ≤36V Battery Properties: Non-rechargeable Battery",
      images: [
        "https://img.kwcdn.com/product/fancy/161af33d-8c8b-474b-a005-3cef170a8e62.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/0a650c99-bcae-4e4d-a15b-103e694b5b7c.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      stock: 30,
      sku: "WATCH-QUARTZ-001",
      brand: "Fashion Time",
      category: "Accessories",
      tags: ["watch", "men", "quartz", "business", "fashion"],
      features: [
        "Business style design",
        "Round alloy case",
        "PU leather strap",
        "Quartz movement",
        "Pointer display type",
        "Battery powered",
      ],
      specifications: [
        { name: "Brand", value: "Fashion Time" },
        { name: "Strap Material", value: "PU Leather" },
        { name: "Case Material", value: "Alloy" },
        { name: "Dial Shape", value: "Round" },
        { name: "Water Resistance", value: "Non-Waterproof" },
        { name: "Movement", value: "Quartz" },
        { name: "Power Mode", value: "Battery Powered" },
        { name: "Battery Type", value: "Non-rechargeable" },
      ],
      reviews: [
        {
          id: 1,
          user: "Imran S.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "Is price mein zabardast watch!",
          comment:
            "Mein ne ye watch office ke liye kharidi aur wakai bohat achi hai. Design professional hai aur PU strap comfortable hai. Time accurate dikhata hai aur battery life bhi achi hai. Is price mein itni achi quality rare hai. Highly recommend karta hun.",
          helpful: 28,
          images: [],
        },
        {
          id: 2,
          user: "Fahad R.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Achi watch hai lekin strap thora kamzor hai",
          comment:
            "Watch ki quality achi hai aur design bhi stylish hai. Time accurate dikhata hai aur dial bhi clear hai. Lekin strap thora kamzor lagta hai, zyada time tak chale ga ya nahi pata nahi. Baki sab kuch acha hai, especially price jo ke reasonable hai.",
          helpful: 17,
          images: [],
        },
        {
          id: 3,
          user: "Zubair K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "Gift ke liye perfect option!",
          comment:
            "Mein ne apne chote bhai ko gift ki aur use bohat pasand ayi. Packaging achi thi aur watch premium lagti hai. Battery already installed thi aur time accurate dikhata hai. Is price mein itni achi quality unexpected thi. Definitely recommend karunga.",
          helpful: 23,
          images: [],
        },
      ],
    },
    {
      id: 18,
      name: "Vintage-Inspired Black Stone Ring - Classic Wide Band, Fashionable Copper",
      price: 600,
      originalPrice: 899,
      rating: 5.0,
      image:
        "https://img.kwcdn.com/product/fancy/c29350b9-aa00-4d15-a883-4f6d58c65677.jpg?imageView2/2/w/800/q/70/format/webp",
      hoverImage:
        "https://img.kwcdn.com/product/fancy/636e0199-5162-413b-ac52-ad882d455fcc.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "Plating: No Plating Mosaic Material: No Mosaic Material Main Material: Copper Type: Single Ring Style: Fashion",
      images: [
        "https://img.kwcdn.com/product/fancy/c29350b9-aa00-4d15-a883-4f6d58c65677.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/636e0199-5162-413b-ac52-ad882d455fcc.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      stock: 45,
      sku: "RING-BLACK-STONE",
      brand: "Vintage Jewelry",
      category: "Jewelry",
      tags: ["ring", "black stone", "copper", "vintage", "fashion"],
      features: [
        "Vintage-inspired design",
        "Black stone centerpiece",
        "Classic wide band",
        "Copper material",
        "Fashionable style",
        "No plating",
      ],
      specifications: [
        { name: "Brand", value: "Vintage Jewelry" },
        { name: "Main Material", value: "Copper" },
        { name: "Plating", value: "No Plating" },
        { name: "Mosaic Material", value: "No Mosaic Material" },
        { name: "Type", value: "Single Ring" },
        { name: "Style", value: "Fashion" },
      ],
      reviews: [
        {
          id: 1,
          user: "Saima R.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "Vintage style wakai khoobsurat hai!",
          comment:
            "Mein ne ye ring casual wear ke liye li aur har outfit ke sath achi lagti hai. Black stone aur copper combination unique hai. Size bhi perfect hai aur comfortable pehenne mein. Is price mein itni achi quality unexpected thi. Highly recommend karungi.",
          helpful: 24,
          images: [],
        },
        {
          id: 2,
          user: "Hina S.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Achi ring hai lekin size thora bara hai",
          comment:
            "Ring ki quality achi hai aur design bhi unique hai. Lekin size thora bara hai mere finger ke liye. Material genuine copper hai aur black stone bhi acha hai. Overall achi ring hai casual wear ke liye, especially is price mein.",
          helpful: 16,
          images: [],
        },
        {
          id: 3,
          user: "Nazia K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "Bohat stylish aur unique design!",
          comment:
            "Mein ne ye ring office wear ke liye li aur bohat compliments milte hain. Design unique hai aur vintage look wakai attractive hai. Copper material ki wajah se skin pe koi reaction nahi hota. Definitely recommend karungi agar aap unique jewelry pasand karte hain.",
          helpful: 21,
          images: [],
        },
      ],
    },
    {
      id: 19,
      name: "Professional Hair Clippers And Beard Trimmer Set, Cordless USB Rechargeable Electric Haircut Kit, with Sharp Blade, ≤36V Operating Voltage, with 4 Guide Combs, for Men'S Grooming",
      price: 1099,
      originalPrice: 999,
      rating: 5.0,
      image:
        "https://img.kwcdn.com/product/fancy/b1047f82-ccd9-417a-b56b-4c4bd5aed773.jpg?imageView2/2/w/800/q/70/format/webp",
      hoverImage:
        "https://img.kwcdn.com/product/fancy/8c19207f-e350-48ba-b01b-2979149da422.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "Plating: No Plating Mosaic Material: Glass Main Material: Alloy Type: Single Ring Style: Glam",
      images: [
        "https://img.kwcdn.com/product/fancy/b1047f82-ccd9-417a-b56b-4c4bd5aed773.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/8c19207f-e350-48ba-b01b-2979149da422.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      stock: 20,
      sku: "TRIMMER-PRO-001",
      brand: "GroomPro",
      category: "Electronics",
      tags: ["hair clipper", "beard trimmer", "grooming", "men", "electric"],
      features: [
        "Professional hair clipper and beard trimmer set",
        "Cordless design",
        "USB rechargeable",
        "Sharp blade for precise cutting",
        "4 guide combs included",
        "≤36V operating voltage",
      ],
      specifications: [
        { name: "Brand", value: "GroomPro" },
        { name: "Type", value: "Hair Clipper & Beard Trimmer" },
        { name: "Power", value: "Cordless, USB Rechargeable" },
        { name: "Operating Voltage", value: "≤36V" },
        { name: "Accessories", value: "4 Guide Combs" },
        { name: "Usage", value: "Men's Grooming" },
      ],
      reviews: [
        {
          id: 1,
          user: "Adnan S.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "Salon jaane ki zaroorat khatam!",
          comment:
            "Mein ne ye trimmer corona lockdown ke time kharida tha aur ab salon jana hi band kar diya hai. Quality bohat achi hai aur cutting bhi smooth hai. Battery life bhi impressive hai, ek charge pe 2-3 hafton tak chal jata hai. Guide combs different styles ke liye perfect hain.",
          helpful: 31,
          images: [],
        },
        {
          id: 2,
          user: "Farhan M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Achi quality hai lekin thora loud hai",
          comment:
            "Trimmer ki cutting quality achi hai aur battery life bhi decent hai. Lekin operation thora loud hai, especially raat ko use karna ho to disturbing ho sakta hai. Baki sab kuch acha hai, especially USB charging jo ke convenient hai.",
          helpful: 19,
          images: [],
        },
        {
          id: 3,
          user: "Kamran R.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "Professional quality ka budget price pe!",
          comment:
            "Mein ne pehle Philips ka trimmer use kiya tha jo is se 3 guna mehenga tha, lekin quality almost same hai. Blades sharp hain aur cutting bhi smooth hai. Battery life impressive hai aur charging bhi fast hai. Is price mein best option hai agar aap quality chahte hain.",
          helpful: 27,
          images: [],
        },
      ],
    },
    {
      id: 20,
      name: "Retro Square Polarized Glasses for Men and Women - Durable Plastic Frame, Anti-Reflective Gradient Lens, Adjustable Hinges, Ideal for Running and Outdoor Activities, Climbing Sports Eyewearg",
      price: 699,
      originalPrice: 850,
      rating: 5.0,
      image:
        "https://img.kwcdn.com/product/fancy/ac4a4124-fb49-42ad-bafe-4fe990cc6872.jpg?imageView2/2/w/800/q/70/format/webp",
      hoverImage:
        "https://img.kwcdn.com/product/fancy/0020277c-7265-484e-b285-b82c2a3a8010.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "Sport Type: Climbing Sunglasses Category: Ordinary Decorative Eyeglasses Frame Material: PC Lens Material: TAC",
      images: [
        "https://img.kwcdn.com/product/fancy/ac4a4124-fb49-42ad-bafe-4fe990cc6872.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/0020277c-7265-484e-b285-b82c2a3a8010.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      stock: 35,
      sku: "GLASSES-RETRO-001",
      brand: "SportVision",
      category: "Accessories",
      tags: ["glasses", "polarized", "retro", "sports", "outdoor"],
      features: [
        "Retro square design",
        "Polarized lenses",
        "Anti-reflective gradient lens",
        "Durable plastic frame",
        "Adjustable hinges",
        "Suitable for outdoor activities",
      ],
      specifications: [
        { name: "Brand", value: "SportVision" },
        { name: "Sport Type", value: "Climbing" },
        { name: "Category", value: "Ordinary Decorative Eyeglasses" },
        { name: "Frame Material", value: "PC" },
        { name: "Lens Material", value: "TAC" },
        { name: "Gender", value: "Men and Women" },
      ],
      reviews: [
        {
          id: 1,
          user: "Usman A.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "Dhoop se perfect protection!",
          comment:
            "Mein ne ye glasses outdoor activities ke liye kharide aur wakai ache hain. Polarized lens ki wajah se dhoop mein aankhon pe stress nahi parta. Frame bhi sturdy hai aur comfortable pehenne mein. Is price mein itni achi quality unexpected thi.",
          helpful: 25,
          images: [],
        },
        {
          id: 2,
          user: "Sana M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Achi quality hai lekin size thora bara hai",
          comment:
            "Glasses ki quality achi hai aur lens bhi clear hain. Lekin frame thora bara hai mere chehre ke liye. Polarization achi hai aur dhoop mein aankhein protected rehti hain. Overall ache glasses hain outdoor activities ke liye.",
          helpful: 18,
          images: [],
        },
        {
          id: 3,
          user: "Faisal T.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "Branded glasses se behtar hain!",
          comment:
            "Mein ne pehle Ray-Ban ke glasses use kiye the jo in se 10 guna mehenge the, lekin quality almost same hai. Polarization perfect hai aur frame bhi durable hai. Retro design stylish hai aur har outfit ke sath match ho jata hai. Highly recommend karta hun.",
          helpful: 29,
          images: [],
        },
      ],
    },
    {
      id: 21,
      name: "Retro Square Polarized Glasses for Men and Women - Durable Plastic Frame, Anti-Reflective Gradient Lens, Adjustable Hinges, Ideal for Running and Outdoor Activities, Climbing Sports Eyewearg",
      price: 999,
      originalPrice: 1099,
      rating: 5.0,
      image:
        "https://img.kwcdn.com/product/fancy/17fcb669-a44e-4a9d-b17c-5dd913d8ee1d.jpg?imageView2/2/w/800/q/70/format/webp",
      hoverImage:
        "https://img.kwcdn.com/product/fancy/0020277c-7265-484e-b285-b82c2a3a8010.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "Sport Type: Climbing Sunglasses Category: Ordinary Decorative Eyeglasses Frame Material: PC Lens Material: TAC",
      images: [
        "https://img.kwcdn.com/product/fancy/17fcb669-a44e-4a9d-b17c-5dd913d8ee1d.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/0020277c-7265-484e-b285-b82c2a3a8010.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      stock: 30,
      sku: "GLASSES-RETRO-002",
      brand: "SportVision",
      category: "Accessories",
      tags: ["glasses", "polarized", "retro", "sports", "outdoor"],
      features: [
        "Retro square design",
        "Polarized lenses",
        "Anti-reflective gradient lens",
        "Durable plastic frame",
        "Adjustable hinges",
        "Ideal for running and outdoor activities",
      ],
      specifications: [
        { name: "Brand", value: "SportVision" },
        { name: "Sport Type", value: "Climbing" },
        { name: "Category", value: "Ordinary Decorative Eyeglasses" },
        { name: "Frame Material", value: "PC" },
        { name: "Lens Material", value: "TAC" },
        { name: "Gender", value: "Men and Women" },
      ],
      reviews: [
        {
          id: 1,
          user: "Asad K.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "Running ke liye perfect glasses!",
          comment:
            "Mein roz subah running karta hun aur ye glasses perfect hain. Dhoop se aankhein protected rehti hain aur frame bhi stable rehta hai, running ke time girte nahi hain. Polarization achi hai aur design bhi stylish hai. Highly recommend karta hun.",
          helpful: 27,
          images: [],
        },
        {
          id: 2,
          user: "Nadia S.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Achi quality hai lekin thore heavy hain",
          comment:
            "Glasses ki quality achi hai aur lens bhi clear hain. Lekin frame thora heavy hai long time pehenne mein uncomfortable ho sakta hai. Polarization achi hai aur design bhi stylish hai. Overall ache glasses hain outdoor activities ke liye.",
          helpful: 19,
          images: [],
        },
        {
          id: 3,
          user: "Tariq M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "Hiking ke liye zabardast option!",
          comment:
            "Mein ne ye glasses hiking trip ke liye kharide the aur bohat kaam aaye. Dhoop se perfect protection milti hai aur frame bhi sturdy hai. Adjustable hinges ki wajah se fit bhi acha hai. Is price mein best option hai agar aap outdoor activities karte hain.",
          helpful: 24,
          images: [],
        },
      ],
    },
    // ..
    {
  "id": 1028,
  "name": " Ultra-Lightweight Breathable Running Shoes – Shock-Absorbing, Anti-Slip Sneakers for Gym, Jogging & Daily Wear",
  "price": 1999,
  "originalPrice": 2399,
  "rating": 4.6,
  "image": myshoes01,
  "hoverImage": myshoes1,
  "description": `🔥 LIMITED EDITION STREETWEAR SNEAKERS – JUST Rs. 1999! 🔥

Turn heads with every step! These bold, stylish sneakers are crafted for trendsetters who dare to stand out.
Made with premium comfort soles, sleek design, and a street-style vibe that screams confidence.

✨ Why You’ll Love Them:
✔️ Iconic look with next-level comfort
✔️ Lightweight & breathable – perfect for all-day wear
✔️ Pairs with jeans, joggers, or ANY outfit
✔️ Unbeatable price – only Rs. 1999!

💥 Steal the spotlight. Own your vibe. Walk like you mean it. 💥

🛒 Order Now | 🚚 Fast Delivery | 📦 Stylish Packaging
⚠️ Selling Out Fast – Don’t Miss Out!

`,
  "images": [
 myshoes2,
 myshoes3,
 myshoes4,
 myshoes5,
 myshoes6,
 myshoes7,
 myshoes8,
  ],
  "stock": 50,
  "sku": "SHOES-RUN-001",
  "brand": "ActiveFeet",
  "category": "Footwear",
  "tags": ["shoes", "running", "sports", "breathable", "men"],
  "features": [
    "Lightweight and breathable mesh upper",
    "Shock-absorbing cushioned sole",
    "Anti-slip rubber outsole",
    "Comfortable for all-day wear",
    "Stylish design with lace-up closure",
    "Ideal for running, walking, and gym use"
  ],
  "specifications": [
    { "name": "Brand", "value": "ActiveFeet" },
    { "name": "Material", "value": "Mesh and Rubber" },
    { "name": "Closure Type", "value": "Lace-Up" },
    { "name": "Occasion", "value": "Sports / Casual" },
    { "name": "Gender", "value": "Men" },
    { "name": "Sole Material", "value": "Rubber" }
  ],
  "reviews": [
    {
      "id": 1,
      "user": "Ali R.",
      "avatar": "/placeholder.svg?height=40&width=40",
      "rating": 5,
      "date": "1 week ago",
      "title": "Running ke liye best shoes!",
      "comment": "Mein roz jogging karta hun aur ye shoes bohat comfortable hain. Insole soft hai aur grip bhi zabardast hai. Design bhi modern hai. Highly recommend!",
      "helpful": 32,
      "images": []
    },
    {
      "id": 2,
      "user": "Hamza Y.",
      "avatar": "/placeholder.svg?height=40&width=40",
      "rating": 4,
      "date": "3 weeks ago",
      "title": "Design aur fit acha hai",
      "comment": "Shoes ka design stylish hai aur size perfectly fit aaya. Sirf sole thoda hard lagta hai shuru mein, lekin ek haftay baad adjust ho gaya.",
      "helpful": 21,
      "images": []
    },
    {
      "id": 3,
      "user": "Rehan M.",
      "avatar": "/placeholder.svg?height=40&width=40",
      "rating": 5,
      "date": "2 months ago",
      "title": "Value for money!",
      "comment": "Is price range mein best shoes hain. Running aur gym dono ke liye use kar raha hun. Lightweight hain aur feet sweat nahi karte. Fit bhi tight nahi hota.",
      "helpful": 26,
      "images": []
    }
  ]
},

    {
      id: 22,
      name: "Gemstone Rings Fashionable Popular Simple Hundred Matching Size Available Party, Birthday, Holiday Gift",
      price: 799,
      originalPrice: 610,
      rating: 5.0,
      image:
        "https://img.kwcdn.com/product/fancy/b6fa2418-0b76-4b26-a306-b19570df568e.jpg?imageView2/2/w/800/q/70/format/webp",
      hoverImage:
        "https://img.kwcdn.com/product/fancy/43907d81-c3ce-4cd9-a8d2-eb673e9ef22a.jpg?imageView2/2/w/800/q/70/format/webp",
      description:
        "Sport Type: Climbing Sunglasses Category: Ordinary Decorative Eyeglasses Frame Material: PC Lens Material: TAC",
      images: [
        "https://img.kwcdn.com/product/fancy/b6fa2418-0b76-4b26-a306-b19570df568e.jpg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/fancy/43907d81-c3ce-4cd9-a8d2-eb673e9ef22a.jpg?imageView2/2/w/800/q/70/format/webp",
      ],
      stock: 40,
      sku: "RING-GEMSTONE-001",
      brand: "GemFashion",
      category: "Jewelry",
      tags: ["ring", "gemstone", "fashion", "gift", "party"],
      features: [
        "Fashionable gemstone ring",
        "Simple yet elegant design",
        "Multiple sizes available",
        "Perfect for parties and special occasions",
        "Ideal gift for birthdays and holidays",
      ],
      specifications: [
        { name: "Brand", value: "GemFashion" },
        { name: "Type", value: "Gemstone Ring" },
        { name: "Style", value: "Fashionable Simple" },
        { name: "Occasion", value: "Party, Birthday, Holiday" },
        { name: "Gift", value: "Yes" },
        { name: "Sizes Available", value: "Multiple" },
      ],
      reviews: [
        {
          id: 1,
          user: "Amina S.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2 weeks ago",
          title: "Engagement ke liye perfect gift!",
          comment:
            "Mein ne apni engagement ke liye ye ring li aur sab ne bohat tareef ki. Gemstone ki quality achi hai aur design bhi elegant hai. Size perfect fit hai aur comfortable pehenne mein. Is price mein itni achi quality unexpected thi. Highly recommend karungi.",
          helpful: 29,
          images: [],
        },
        {
          id: 2,
          user: "Farah T.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "1 month ago",
          title: "Achi ring hai lekin gemstone thora chota hai",
          comment:
            "Ring ki quality achi hai aur design bhi elegant hai. Lekin gemstone thora chota hai pictures mein jo dikhaya gaya hai us se. Baki sab kuch acha hai, especially price jo ke reasonable hai. Overall achi ring hai special occasions ke liye.",
          helpful: 17,
          images: [],
        },
        {
          id: 3,
          user: "Sadia M.",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "3 months ago",
          title: "Birthday gift ke liye zabardast option!",
          comment:
            "Mein ne apni behn ko birthday gift ke tor pe di aur use bohat pasand ayi. Packaging bhi achi thi aur ring ki quality premium feel deti hai. Gemstone ki chamak wakai impressive hai. Definitely recommend karungi agar aap kisi ko gift dena chahte hain.",
          helpful: 23,
          images: [],
        },
      ],
    },
  ];

  const product = products.find((p) => p.id === Number.parseInt(id));
  return product || null;
}

// Function to get related products
async function getRelatedProducts(category, currentId) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Sample related products data
  const allProducts = [
    {
      id: 13,
      name: "Pack of 2 perfumes black car and black market best for gift 100 ml each",
      price: 1999,
      originalPrice: 2365,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/9cab0addfff3ffd0065dbf210d85a919.jpg_720x720q80.jpg_.webp",
    },
    {
      id: 14,
      name: "Florse | Our Best Floral Fragrance | Pocket Perfume | 5ml",
      price: 750,
      originalPrice: 799,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/cc39782c733f04410bc22cabf70f06ad.jpg_720x720q80.jpg_.webp",
    },
    {
      id: 15,
      name: "Afnan 9pm EDP 100ml For Men - Best designer perfumes",
      price: 6199,
      originalPrice: 6999,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/e50bdf271c6c095f35d9c54fba007ed0.jpg_720x720q80.jpg_.webp",
    },
    {
      id: 16,
      name: "Top 5 Spray Samples Set | For Men | Pocket Perfume | 5ml",
      price: 1199,
      originalPrice: 1399,
      rating: 5.0,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/f56a56534f99ec01ce4e09aca29985fd.jpg_720x720q80.jpg_.webp",
    },
  ];

  // Filter out the current product and return products in the same category
  return allProducts.filter((p) => p.id !== currentId);
}

// Function to get reviews for a product
async function getProductReviews(productId) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      user: "Ahmed K.",
      avatar:
        "https://img.freepik.com/free-photo/group-pakistani-man-wearing-traditional-clothes-salwar-kameez-kurta-with-pakistan-flags_627829-4790.jpg?semt=ais_hybrid",
      rating: 5,
      date: "2 months ago",
      title: "Excellent fragrance, long-lasting",
      comment:
        "I've been using this attar for a month now and I'm very impressed with the quality. The scent lasts all day and I've received many compliments. Will definitely buy again!",
      helpful: 24,
      images: [
        "https://img.drz.lazcdn.com/static/pk/p/727e1bfad2d99871c26695cf700b8a4c.jpg_720x720q80.jpg_.webp",
      ],
    },
    {
      id: 2,
      user: "Saad M.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "1 month ago",
      title: "Amazing product, great value",
      comment:
        "This is my second purchase of this attar. The fragrance is amazing and lasts for hours. The packaging is also very premium. Highly recommended!",
      helpful: 18,
    },
    {
      id: 3,
      user: "Fatima R.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "3 months ago",
      title: "Good but could be better",
      comment:
        "The fragrance is good but I expected it to last longer. Still, it's a good product for the price and I would recommend it to others.",
      helpful: 7,
    },
  ];

  return reviews;
}
export default async function ProductPage({ params }) {
  const product = await getProductById(params.id);

  // If product not found, show 404 page
  if (!product) {
    notFound();
  }

  // Fetch related products
  const relatedProductsPromise = getRelatedProducts(
    product.category,
    product.id
  );

  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductDetail
        product={product}
        relatedProductsPromise={relatedProductsPromise}
        reviewsPromise={getProductReviews(product.id)}
      />
    </Suspense>
  );
}
