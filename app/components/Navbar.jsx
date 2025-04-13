"use client";
import { useState, useEffect } from "react";
import { Sun, Moon, X, Menu } from "lucide-react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const location = usePathname();
  
  return (
    <>
      {location === "/sigin" || location === "/youtubezawwar12" ? (
        ""
      ) : (
        <nav className="bg-transparent px-5 dark:bg-gray-900 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                Shop Online
              </div>

              {/* Nav Links */}
              <div className="hidden md:flex space-x-6">
                <Link
                  className="nav-link relative text-gray-700 hover:text-rose-500 transition-all duration-300 after:block after:w-0 after:h-0.5 after:bg-rose-500 after:transition-all after:duration-300 after:absolute after:left-1/2 after:-bottom-1 hover:after:w-full hover:after:left-0 hover:scale-105"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="nav-link relative text-gray-700 hover:text-rose-500 transition-all duration-300 after:block after:w-0 after:h-0.5 after:bg-rose-500 after:transition-all after:duration-300 after:absolute after:left-1/2 after:-bottom-1 hover:after:w-full hover:after:left-0 hover:scale-105"
                  href="/collections"
                >
                  collections
                </Link>
                <Link
                  className="nav-link relative text-gray-700 hover:text-rose-500 transition-all duration-300 after:block after:w-0 after:h-0.5 after:bg-rose-500 after:transition-all after:duration-300 after:absolute after:left-1/2 after:-bottom-1 hover:after:w-full hover:after:left-0 hover:scale-105"
                  href="/Products"
                >
                  Products
                </Link>
                <Link
                  className="nav-link relative text-gray-700 hover:text-rose-500 transition-all duration-300 after:block after:w-0 after:h-0.5 after:bg-rose-500 after:transition-all after:duration-300 after:absolute after:left-1/2 after:-bottom-1 hover:after:w-full hover:after:left-0 hover:scale-105"
                  href="/Products"
                >
                  Catagory
                </Link>
                <Link
                  className="nav-link relative text-gray-700 hover:text-rose-500 transition-all duration-300 after:block after:w-0 after:h-0.5 after:bg-rose-500 after:transition-all after:duration-300 after:absolute after:left-1/2 after:-bottom-1 hover:after:w-full hover:after:left-0 hover:scale-105"
                  href="/contact"
                >
                  Contact us
                </Link>
                {/* Add Email Link */}
                
              
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4 hidden md:flex">
                {/* Sign In Button */}
                <SignedOut>
                  <SignInButton mode="model" forceRedirectUrl={"/"}>
                    <button className="px-8 py-[9.7px] cursor-pointer  bg-rose-600  text-white rounded-lg hover:bg-rose-700 ">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/sigin" />
                </SignedIn>
                <SignedIn>
                  <button className="px-4 py-2 cursor-pointer bg-black text-white rounded-lg hover:bg-black">
                    <SignOutButton redirectUrl="/sigin" />
                  </button>
                </SignedIn>
              </div>
              <button className="md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu (Hidden by default) */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="flex flex-col space-y-2 p-4">
                <Link className="mobile-link" href="/">
                  Home
                </Link>
                <Link className="mobile-link" href="/about">
                  About
                </Link>
                <Link className="mobile-link" href="/contact">
                  Contact
                </Link>
                <Link className="mobile-link" href="/products">
                  Products
                </Link>
                <Link className="mobile-link" href="/categories">
                  Categories
                </Link>
                {/* Add Email Link in Mobile Menu */}
                <Link
                  className="mobile-link"
                  href="mailto:shopingonlines.pk@gmail.com"
                >
                  Email Us
                </Link>
                <SignedOut>
                  <SignInButton mode="model" forceRedirectUrl={"/"}>
                    <button className="px-8 py-[9.7px] cursor-pointer  bg-rose-600  text-white rounded-lg hover:bg-rose-700 ">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/sigin" />
                </SignedIn>
                <SignedIn>
                  <button className="px-4 py-2 cursor-pointer bg-black text-white rounded-lg hover:bg-black">
                    <SignOutButton redirectUrl="/sigin" />
                  </button>
                </SignedIn>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
}
