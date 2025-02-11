"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-bg text-secondary px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/icons/pihof.svg"
            alt="Logo"
            className="h-20 w-auto"
            width={40}
            height={40}
          />
          <span className="navbar">Pihof Digital</span>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-secondary cursor-pointer"
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

        {/* Mobile Navigation Menu (Dropdown) */}
        <div
          className={`absolute left-0 top-24 w-full bg-bg transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" className="navbar hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="navbar hover:text-primary transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="navbar hover:text-primary transition"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Navigation Menu (Shown by Default on `md:` and Above) */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="navbar hover:text-primary transition">
            Home
          </Link>
          <Link
            href="/services"
            className="navbar hover:text-primary transition"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="navbar hover:text-primary transition"
          >
            Portfolio
          </Link>
        </div>

        {/* Contact Us Button (Hidden on Mobile, Shown on `md:` and Above) */}

        <div className="hidden md:flex">
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
