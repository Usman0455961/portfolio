"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/icons/pihof.svg"
            alt="Logo"
            className="h-10"
            width={40} // Set the width of the image
            height={40} // Set the height of the image
          />

          <span className="font-bold text-lg">Pihof Digital</span>
        </div>

        {/* Mobile Hamburger Icon */}
        <div
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex space-x-8 ${
            menuOpen ? "flex" : "hidden"
          } `}
        >
          <Link href="/" className="text-green-500 hover:text-white transition">
            Home
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-green-500 transition"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-white hover:text-green-500 transition"
          >
            Portfolio
          </Link>
        </div>

        {/* Contact Us Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
