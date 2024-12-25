"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav  className="bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div data-aos="fade-right">
              <Link href="/" className="flex items-center gap-3 py-4 px-2">
                <Image src="/DF.png" alt="Logo" width={50} height={80} className="bg-white transition-colors hover:bg-orange-600 rounded-full "/>
                <span className="font-semibold text-white hover:text-orange-600 transition-colors text-xl">
                  Data Fetcher
                </span>
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="py-4 px-2 text-white font-semibold hover:text-orange-600 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-600"
            >
              Home
            </Link>
            <Link
              href="/csr"
              className="py-4 px-2 text-white font-semibold hover:text-orange-600 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-600"
            >
              Client-Side
            </Link>
            <Link
              href="/ssr"
              className="py-4 px-2 text-white font-semibold hover:text-orange-600 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-600"
            >
              Server-Side
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white hover:text-orange-600" />
              ) : (
                <Menu className="h-6 w-6 text-white hover:text-orange-600" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Link
          href="/"
          className="block py-2 px-4 text-sm hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          href="/csr"
          className="block py-2 px-4 text-sm hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out"
        >
          Client-Side
        </Link>
        <Link
          href="/ssr"
          className="block py-2 px-4 text-sm hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out"
        >
          Server-Side
        </Link>
       
      </div>
    </nav>
  );
};

export default Navbar;
