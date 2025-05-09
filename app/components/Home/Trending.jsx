"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TrendingProducts() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 8,
      name: "Handbag for girls - Bags for girls - Leather Bag for women mini - Shoulder bags for ladies - casual handbag mini - Phone pouch - Crossbody & Shoulder bag for mini gift - Purse for girls",
      price: 750,
      originalPrice: 999,
      rating: 5.0,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/f56a56534f99ec01ce4e09aca29985fd.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/d301738b58934c8b990b9410491a25b4.jpg_720x720q80.jpg_.webp",
      description:
        "PRODUCT DETAILS Structure: This Stylish Bag having Moderate capacity that can hold your books, purses, and lots of other things comfortably. Occasions: Great for vacation, work, travel, business, school, shopping, and any other daily activities. Perfect to use as birthday gifts, Eid gifts for women, girls, moms, ladies, friends, or colleagues. If you have any problems or don`t like the bag after purchasing, please contact us by email and we will give you a full refund. we just want you happy. Material: High-Quality Faux Leather",
    },
    {
      id: 9,
      name: "Mobile Phone Stand For Phone Retractable Holder Desk Table Clip Bracket Table Cell Phone Support Holder Mount For Live Broadcas",
      price: 620,
      originalPrice: 850,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/03694657ce3560c31c3fc78adb303ada.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/85e2cb8c83d41b809f5d4ae2ef60bcc8.jpg_720x720q80.jpg_.webp",
      description:
        "The multifunctional live broadcast support is a good helper for live broadcast and TV watching. The vertical screen for live broadcast and horizontal screen for TV watching, the support is suitable for mobile phones. Adjustable Length: With adjustable length and rotation to raise and lower, the support is wide applicable to many occasions. Thicker and Heavier: The holder is thicker and heavier that provides stable support without shaking. With High Rebound Spring: Built-in high rebound tension spring, the supports clamps the phone with no drop or rotation. Anti-slip and Anti-scratch: The anti-skid silicone pad can prevent phones sliding and protect the mobile phone from scratches.",
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
        "Product details of Musk Al Mahal - Black And Silver Original Attar For Men - 12ml Pakistan's No.#1 Attar Brand Affordable Pricing Easy 15 days Return & Exchange Policy Revival of Attar Trend Modern Fragrances in Attars Long Lasting Fragrances 12ml Attar 100+ Products Black And Silver | Premium Attars | 12ml | Musk Al Mahal Black And Silver By Al Mushk is a refined and sophisticated French fragrance, this masculine fresh aqueous caters to the contemporary tastes of energetic and spirited young men. Introducing tangy aromas of the summer, Black And Silver by composition offers a refreshing choice for men with a penchant for the great outdoors. A distinguished icy aroma articulately blends top Fresh notes comprised of Bergamot, Lavender and Watermelon with invigorating ingredients like Lotus and Jasmine that form the core of the fragrance. Black And Silver resonates with Sandalwood, Musk and Amber at the base. ",
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
        "Strap Material: PU Leather Watches case material: Alloy Dial Shape: Round Water Resistance Level: Non - Waterproof Style: Business Movement: Quartz Watches Connection Method: None Drive Mode: Electronic Feature: Other Display Type: Pointer Wireless Property: none Wearing Instructions: Regular Cleaning Power Mode: Battery Powered Operating Voltage: ≤36V Battery Properties: Non-rechargeable Battery ",
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
      description: `Plating: No Plating
      Mosaic Material: No Mosaic Material
      Main Material: Copper
      Type: Single Ring
  S   tyle: Fashion`,
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
      description: `Sport Type: Climbing
  Sunglasses Category: Ordinary Decorative Eyeglasses
  Frame Material: PC
  Lens Material: TAC`,
    },
    {
      id: 21,
      name: "Black Stone Ring - Classic Wide Band",
      price: 999,
      originalPrice: 1099,
      rating: 5.0,
      image:
        "https://img.kwcdn.com/product/fancy/17fcb669-a44e-4a9d-b17c-5dd913d8ee1d.jpg?imageView2/2/w/800/q/70/format/webp",
      hoverImage:
        "https://img.kwcdn.com/product/fancy/17fcb669-a44e-4a9d-b17c-5dd913d8ee1d.jpg?imageView2/2/w/800/q/70/format/webp",
      description: `Sport Type: Climbing
  Sunglasses Category: Ordinary Decorative Eyeglasses
  Frame Material: PC
  Lens Material: TAC`,
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
      description: `Sport Type: Climbing
  Sunglasses Category: Ordinary Decorative Eyeglasses
  Frame Material: PC
  Lens Material: TAC`,
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
      description: `Plating: No Plating
  Mosaic Material: Glass
  Main Material: Alloy
  Type: Single Ring
  Style: Glam`,
    },
    {
      id: 11,
      name: "The Legend | Finest Classical - Modern Combo Perfume | Scents N Stories | 50ml",
      price: 1850,
      originalPrice: 2350,
      rating: 5,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/f65408f5ab3da5042e39b6cb570d8e10.png_720x720q80.png_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/f3e1823df660842d398e1f4389a0e329.png_720x720q80.png_.webp",
    },
    {
      id: 12,
      name: "Chukoor Slim Long Mobile Money and Card holder Wallet for Men and Women",
      price: 650,
      originalPrice: 999,
      rating: 5.0,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/811006b7477e95801e732c00ac93d2f8.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/f1e107a3b8164883718c2b3d05a2c882.jpg_720x720q80.jpg_.webp",
        description:"Are you tired of struggling with cluttered, bulky wallets that cramp your style?  Our men's Long Wallet is here to redefine your everyday carry experience. Crafted with precision and designed for the modern gentleman, this wallet is the epitome of spaciousness, style, and functionality Spacious Design: Say goodbye to overcrowded wallets. Our Long Wallet offers ample room to accommodate all your essentials without sacrificing elegance. From credit cards to IDs, business cards, and more, you'll find designated slots and compartments for each item, ensuring everything stays organized Cardholder Convenience: With a dedicated cardholder section, you can effortlessly access your cards whenever you need them. No more fumbling through a stack of cards; our wallet keeps your cards neatly organized and easily accessible Neat Stitching: Crafted with meticulous attention to detail, our wallet features impeccable stitching. Not only does this enhance its durability, but it also adds a touch of sophistication to your everyday style Cash Companion: Our wallet for men doesn't just prioritize cards; it's also designed to accommodate your cash. The cash compartment is spacious enough to hold different currency notes, allowing you to keep your cash neatly organized and accessible Fashion-Forward: Elevate your fashion game with our Fashion Wallet for men. Its sleek and elongated design adds a touch of elegance to your attire, whether you're in a formal or casual setting. It's more than just a wallet; it's a statement piece that complements your personal style Upgrade your wallet game and experience the perfect blend of fashion and functionality. Make a lasting impression wherever you go with our spacious Cardholder Long Wallet. Choose quality, choose style—choose our men's wallet Don't settle for anything less than the best. Upgrade your everyday carry with our meticulously crafted Long Wallet and embrace a new level of convenience."
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
        dsscription:"Product details of Impression of Black Car Perfume For Men 100 ml CAR PERFUME FOR MEN 100ML, 100% Original BEST PERFUME FOR MEN CAR PERFUME FOR MEN 100ML, 100% Original BEST PERFUME FOR MEN Specifications of Impression of Black Car Perfume For Men 100 ml"
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
        description:"Product details of Florse | Our Best Floral Fragrance | Pocket Perfume | 5ml 15 Days Easy Returns Surprise in Every Order 300,000+ Happy Customers"
    },
    {
      id: 15,
      name: "Afnan 9pm EDP 100ml For Men - Best designer perfumes ",
      price: 6199,
      originalPrice: 6999,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/e50bdf271c6c095f35d9c54fba007ed0.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/fe1e9fb7b1aed14167a2279f05fa1775.jpg_720x720q80.jpg_.webp",
        description:"The Title says it all. 9 pm edp can be found for as low as 16€. Doesn't smell synthetic at all. It opens up with a fresh bubble gummy notes.  It is quite sweet, although not as sweet as Ultra male. The sweetness dies down as the frag dries down.  After 4-5 hours it smell more of warm spicy notes.  Its not a screamer like Ultra Male, moderate projection and definetly not in the face kind of fragrance. Lasts a long time.....for me around 9-10 hours on skin and 2 days on clothes.  Projection is good for first 3 hours and then moderate for next few hours. Specifications of Afnan 9pm EDP 100ml For Men - Best designer perfumes",
    },
    {
      id: 16,
      name: "Top 5 Spray Samples Set | For Men | Pocket Perfume | Scents N Stories | 5ml",
      price: 1199,
      originalPrice: 1399,
      rating: 5.0,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/f56a56534f99ec01ce4e09aca29985fd.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/d301738b58934c8b990b9410491a25b4.jpg_720x720q80.jpg_.webp",
        description:" Top 5 Sample | For Men | Pocket Perfume These are our all-time top-rated fragrance samples, curated to provide you with the best experience. Each of these samples has been tried and tested, earning its place on our list of favorites. These top five samples are a perfect starting point to explore our extensive range of fragrances. Order a sample set before you order a full-sized bottle of your favorite fragrance from our range.Catch 22 Cross My Heart The Legend Tipping Point In your Eyes ​"
    },
    {
      id: 1,
      name: "Pack of 2 trousers for men_Trending colors trousers for men_Stylish trousers_sports trousers_summer trouser",
      price: 1033,
      originalPrice: 1350,
      rating: 4.8,
      image:
        "https://img.drz.lazcdn.com/g/kf/Sa586e24372734166baeb97ccb81c7c6bv.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/g/kf/S7c0f2f0e95f44c82af26684d06c6d55dX.jpg_720x720q80.jpg_.webp",
      description:
        "Product details of Pack of 2 trousers for men_Trending colors trousers for men_Stylish trousers_sports trousers_summer trouser pre { white-space: pre-wrap; }• Pack of 2 stylish trousers for men.• Trending colors perfect for summer.• Ideal for casual occasions.• Sports trousers for active men.• Category: Joggers & Sweats.• Age Range: Standard.These pack of 2 trousers for men come in trending colors and are perfect for a casual occasion. The stylish design makes them suitable for sports and summer wear. These joggers & sweats are a must-have for any man's wardrobe. Specifications of Pack of 2 trousers for men_Trending colors trousers for men_Stylish trousers_sports trousers_summer trouser BrandNo BrandSKU456644306_PK-2161999534ApparelCasualAge RangeStandard",
    },
    {
      id: 2,
      name: "Queen Printed Pink Color Lounge Wear Nightwear Sleepwear With Heart Prinred Trouser For Women By Aua Garments",
      price: 1360,
      originalPrice: 1499,
      rating: 4.6,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/65c2b80bf14e5fa429e03ebf80d722ba.jpg_400x400q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/5804ca79b1763226ce0260865e9bb9cd.jpg_720x720q80.jpg_.webp",
      description:
        "Cozy Women's Lounge Wear with Heart-Printed TrousersExperience ultimate comfort with this stylish women’s lounge wear set, featuring soft and breathable fabric that ensures a restful night's sleep. The heart-printed trousers add a cute and charming touch, perfect for those who love a blend of fashion and relaxation. Designed for women of all ages, this versatile sleepwear is ideal for lounging at home, casual nights in, or even lazy weekends. Stay warm, comfortable, and effortlessly chic with this must-have nightwear set!Key Features:✔ Soft & breathable fabric for all-night comfort✔ Stylish heart-printed trousers for a trendy look✔ Perfect for lounging, sleeping, and relaxed occasions✔ Available in multiple sizes for the perfect fit  Cozy Women's Lounge Wear with Heart-Printed Trousers  Experience ultimate comfort with this stylish women’s lounge wear set, featuring soft and breathable fabric that ensures a restful night's sleep. The heart-printed trousers add a cute and charming touch, perfect for those who love a blend of fashion and relaxation. Designed for women of all ages, this versatile sleepwear is ideal for lounging at home, casual nights in, or even lazy weekends. Stay warm, comfortable, and effortlessly chic with this must-have nightwear set!  Key Features  ✔ Soft & breathable fabric for all-night comfor  ✔ Stylish heart-printed trousers for a trendy loo  ✔ Perfect for lounging, sleeping, and relaxed occasion  ✔ Available in multiple sizes for the perfect fit",
    },
    {
      id: 3,
      name: "Premium Laptop Backpack B210 – 16-Inch, Lightweight, Water-Repellent & Spacious for Work & Study",
      price: 1345,
      originalPrice: 1650,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/db38fdcc53b7892dcdb2bd4c74d787f9.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/b669ad9f6eac1fbcb91c1cb5a1d71e2a.jpg_720x720q80.jpg_.webp",
      description:
        "Product details of Premium Laptop Backpack B210 – 16-Inch, Lightweight, Water-Repellent & Spacious for Work & Stu 🌟 Premium Laptop Backpack B210 – 16-Inch, Lightweight & Water-Repellent 🎒🔥 Key Highlights:✅ 💻 Fits up to 16-Inch Laptops & Tablets – Perfect for secure storage of your devices.✅ 💧 Water-Repellent Material – Protects your essentials from splashes and light rain.✅ 🎒 Spacious & Organized Compartments – Multiple pockets for accessories, books & gadgets.✅ 💪 Durable & Lightweight – Designed for comfortable all-day carrying.✅ 🛫 Travel, Business & School Ready – Sleek, professional, and highly functional.✅ 🎒 Ergonomic Shoulder Straps – Ensures maximum comfort & support.🚀 Upgrade your everyday carry with this stylish & functional backpack! 🛒 Order now! Premium Laptop Backpack B210 – 16-Inch, Lightweight & Water-Repellen Product Descriptio The Premium Laptop Backpack B210 is designed for students, professionals, and travelers who need a durable, stylish, and spacious bag. Made with high-quality water-repellent material, this lightweight backpack provides maximum protection for your 16-inch laptop or tablet while offering ample storage space for books, gadgets, and essentials. Its modern design makes it perfect for college, business, and casual travel. Key Features Fits up to 16-Inch Laptops & Tablets – Securely stores your devices Water-Repellent Material – Keeps your belongings safe from splashes & light rain Spacious & Organized Compartments – Multiple pockets for accessories & essential  Durable & Lightweight – Comfortable for all-day carrying Perfect for Travel, Business & School – Sleek, professional, and travel-friendly design Ergonomic Shoulder Straps – Provides maximum comfort & support Package Includes 1 x Premium Laptop Backpack B210 Upgrade your carrying experience with this stylish, durable & functional backpack!  Enjoy a Safe & Secure Shopping Experience – The Sale Will Be Finalized Upon Parcel Delivery!  Specifications of Premium Laptop Backpack B210 – 16-Inch, Lightweight, Water-Repellent & Spacious for Work & Study        ",
    },
    {
      id: 4,
      name: "Waterproof Fanny Pack Waist Belt Bag Purse Outdoor Sport Running Camping Waist pack",
      price: 1350,
      originalPrice: 1450,
      rating: 5.0,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/e550a04eb5e7be012be302910dd3f131.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/c4a5ec30f2158d9cbc8bcf6b61949ac0.jpg_720x720q80.jpg_.webp",
      link: "https://www.daraz.pk/products/-i436357283-s2095359674.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253AFashion%252BMan%252BSmall%252BChest%252BBag%252BPhone%252BPocket%253Bnid%253A436357283%253Bsrc%253ALazadaMainSrp%253Brn%253A0826ef94b5a3939c17ef562c4653ccd6%253Bregion%253Apk%253Bsku%253A436357283_PK%253Bprice%253A999%253Bclient%253Adesktop%253Bsupplier_id%253A6005013093795%253Bbiz_source%253Ah5_external%253Bslot%253A6%253Butlog_bucket_id%253A470687%253Basc_category_id%253A10002022%253Bitem_id%253A436357283%253Bsku_id%253A2095359674%253Bshop_id%253A524278%253BtemplateInfo%253A1104_L%2523-1_A3_C%2523&freeshipping=0&fs_ab=1&fuse_fs=&lang=en&location=Sindh&price=999&priceCompare=skuId%3A2095359674%3Bsource%3Alazada-search-voucher%3Bsn%3A0826ef94b5a3939c17ef562c4653ccd6%3BoriginPrice%3A99900%3BdisplayPrice%3A99900%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1742313513417&ratingscore=4.357142857142857&request_id=0826ef94b5a3939c17ef562c4653ccd6&review=14&sale=97&search=1&source=search&spm=a2a0e.searchList.list.6&stock=1",
      description:
        "Product details of Waterproof Fanny Pack Waist Belt Bag Purse Outdoor Sport Running Camping Waist pack Closure: Zip Occasion: Business, Casual, Formal, Travel, Workwear Size: Large Handle Style: Crossbody Strap Lining Material:Polyester Material: Canvas Fabric Type:Polyester Department: Men And Women Perfect product for umrah Style: Crossbody Features: Adjustable Strap, Cross-Body Strap, Lightweight, Water Resistant High grade PU coated 600D Cordura fabric Water resistant material. Mini outters Reflector logo.  Abrasion and tear resistant fabric. Sturdy design, stitching and lining to ensure durability/ High density premium quality buckles. One Main Zipper Pocket, One front Zipper Pocket, Lining Quilt 75 GSM  One inside pocket   You can easily put mobiles, power bank, passport, much shorter things. Perfect product for umrah  ",
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
        "7-in-1 Smart Watch: Your Ultimate Wearable Companion Experience the Future of Smart Watches Introducing the 7-in-1 Smart Watch, a revolutionary device that combines style, functionality, and cutting-edge technology. This versatile smartwatch is designed to cater to your every need, from health and fitness tracking to smart notifications and entertainment. Unleash the Power of 7 All-in-One Functionality: Enjoy the convenience of 7 essential features in a single device, including heart rate monitoring, blood pressure tracking, sleep quality analysis, GPS navigation, music playback, and customizable watch faces. Personalized Style: Choose from 7 interchangeable straps to match your style or outfit. Whether you prefer a classic look or a trendy statement, there's a strap to suit your taste. Premium Performance: Experience exceptional performance and responsiveness thanks to advanced hardware and software. The 7-in-1 Smart Watch is designed to keep up with your active lifestyle. Stay Connected: Stay informed and connected with essential notifications and alerts. Receive calls, messages, and social media updates directly on your wrist. Health and Fitness Tracking: Monitor your health and fitness goals with ease. Track your heart rate, blood pressure, sleep quality, and more to gain valuable insights into your overall well-being. Advanced Features: Benefit from advanced features like built-in GPS for precise location tracking, music playback for on-the-go entertainment, and customizable watch faces to personalize your experience. The Perfect Gift The 7-in-1 Smart Watch makes an ideal gift for anyone who values style, functionality, and technology. Whether you're looking for a thoughtful present for a loved one or a reward for yourself, this smartwatch is sure to impress.",
    },
    {
      id: 6,
      name: "Water Bottles, Glass/Plastic 400 ML Water bottles, Sports water bottles Double walled Keeps Easy to carry for Walking Hiking, school water bottle, Multicolor (1 Piece)",
      price: 599,
      originalPrice: 850,
      rating: 4.6,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/12fb392c98ac9dd27d7117520f9728ad.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/c0b003fab3f92db611935fce72b01ed2.jpg_720x720q80.jpg_.webp",
      description:
        "Product details of Water Bottles, Glass/Plastic 400 ML Water bottles, Sports water bottles Double walled Keeps Easy to carry for Walking Hiking, school water bottle, Multicolor (1 Piece) Water Bottles, Glass/Plastic 400 ML Water bottles, Sports water bottles Double walled Keeps Easy to carry for Walking Hiking, school water bottle, Multicolor (1 Piece) Water Bottles, Glass/Plastic 400 ML Water bottles, Sports water bottles Double walled Keeps Easy to carry for Walking Hiking, school water bottle, Multicolor (1 Piece) Specifications of Water Bottles, Glass/Plastic 400 ML Water bottles, Sports water bottles Double walled Keeps Easy to carry ",
    },
    {
      id: 7,
      name: "Stylish 400ml Glass Water Bottle for Girls & Boys - Insulated Leakproof Design for Ultimate Freshness - Perfect for School, Gym, and Office Durable Glass/Plastic Hybrid - Stay Hydrated in Style with Fancy Bottles for Water for Girls School ",
      price: 499,
      originalPrice: 650,
      rating: 4.9,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/2f0fab5cf2baabc839fcd4586ca46dd0.jpg_720x720q80.jpg_.webp",
      hoverImage:
        "https://img.drz.lazcdn.com/static/pk/p/f5084d4671793decf71994abcccfc59e.jpg_720x720q80.jpg_.webp",
      description:
        "Product details of Stylish 400ml Glass Water Bottle for Girls & Boys - Insulated Leakproof Design for Ultimate Freshness - Perfect for School, Gym, and Office Durable Glass/Plastic Hybrid - Stay Hydrated in Style with Fancy Bottles for Water for Girls School Stylish 400ml Glass Water Bottle for Girls & Boys - Insulated Leakproof Design for Ultimate Freshness - Perfect for School, Gym, and Office Durable Glass/Plastic Hybrid - Stay Hydrated in Style with Fancy Bottles for Water for Girls School Certainly! Here are five highlights for your product:Double-Walled Insulation: Keeps drinks hot or cold for hours, perfect for maintaining your beverage's ideal temperature all day. Compact 400 ML Size: Ideal for kids and adults, fits easily in school bags, gym gear, or car cup holders. Durable & BPA-Free Plastic: High-quality construction ensures long-lasting use while being safe and non-toxic. Leak-Proof Design: Prevents spills and leaks, making it convenient for on-the-go hydration. Stylish & Easy to Clean: Sleek design available in multiple colors with a smooth surface that’s easy to wipe down and maintain. Specifications of Stylish 400ml Glass Water Bottle for Girls & Boys - Insulated Leakproof Design for Ultimate Freshness",
    },
  ];

  return (
    <section className="py-16 md:px-6 px-3 bg-gray-50">
      <div className="container mx-auto md:px-4 px-1">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trending Now
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our most popular products that everyone's talking about.
            </p>
          </div>
          <Link href={"/Products"}>
          <button className="hidden cursor-pointer md:flex items-center text-gray-900 font-medium hover:text-rose-600 transition-colors">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
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
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
          {products.map((product) => (
            <a href={`/product/${product.id}`}>
            <div
              key={product.id}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative h-64 md:h-70 overflow-hidden">
                <Image
                  src={
                    hoveredProduct === product.id
                      ? product.hoverImage
                      : product.image
                  }
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Sale badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </div>
                )}

                {/* Quick actions */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-3 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center">
                    <button className="text-gray-900 hover:text-rose-600 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <button className="bg-gray-900 hover:bg-rose-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                      Add to Cart
                    </button>
                    <button className="text-gray-900 hover:text-rose-600 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-current"
                            : "stroke-current fill-none"
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.rating})
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900">
                    <span className="text-base">Rs: </span>
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href={"/Products"}>
          <button className="inline-flex cursor-pointer items-center text-gray-900 font-medium hover:text-rose-600 transition-colors">
            View All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
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
          </Link>
        </div>
      </div>
    </section>
  );
}
