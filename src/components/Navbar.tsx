'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Detect when user scrolls past the hero section height (around 600px)
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolledPastHero ? "bg-black/80 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className={`flex justify-between items-center px-6 sm:px-10 max-w-7xl mx-auto text-white`}>
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`rounded-full overflow-hidden border-2 shadow-md transition-all duration-300 ${
              scrolledPastHero ? 'w-10 h-10 border-white' : 'w-14 h-14 border-white'
            }`}
          >
            <Image
              src="/logos.png"
              alt="V Enterprises Logo"
              width={56}
              height={56}
              className="object-cover"
              priority
            />
          </div>
          {/* <span
            className={`font-bold tracking-wide transition-all duration-300 ${
              scrolledPastHero ? "text-lg" : "text-2xl"
            }`}
          >
            V ENTERPRISES
          </span> */}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-semibold uppercase transition-all duration-300">
          <Link href="/" className="hover:text-red-400 transition" onClick={handleNavClick}>
            Home
          </Link>
          <Link href="/about" className="hover:text-red-400 transition" onClick={handleNavClick}>
            About
          </Link>
          <Link href="/products" onClick={handleNavClick} className="block hover:text-red-400 transition">
            Products
          </Link>
          <Link href="/contact" className="hover:text-red-400 transition" onClick={handleNavClick}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden flex items-center text-white`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md absolute w-full left-0 mt-3 shadow-lg py-6 px-8 space-y-6 text-center uppercase text-white font-semibold text-lg animate-slideDown">
          <Link href="/" onClick={handleNavClick} className="block hover:text-red-400 transition">
            Home
          </Link>
          <Link href="/about" onClick={handleNavClick} className="block hover:text-red-400 transition">
            About
          </Link>
          <Link href="/contact" onClick={handleNavClick} className="block hover:text-red-400 transition">
            Contact
          </Link>
          <Link href="/products" onClick={handleNavClick} className="block hover:text-red-400 transition">
            Products
          </Link>
        </div>
      )}
    </nav>
  );
}
