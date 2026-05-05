import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 sm:px-10 mt-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        {/* Logo + Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white mb-3">
            <Image
              src="/logos.png"
              alt="V Enterprises Logo"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-white tracking-wide">V ENTERPRISES</h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xs">
            Industrial Hardware Solutions • Precision • Performance • Reliability
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <Link href="/" className="hover:text-red-400 transition">Home</Link><br />
            <Link href="/about" className="hover:text-red-400 transition">About</Link><br />
            <Link href="/blog" className="hover:text-red-400 transition">Blog</Link><br />
            <Link href="/products" className="hover:text-red-400 transition">Products</Link><br />
            <Link href="/contact" className="hover:text-red-400 transition">Contact</Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-5">
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition">
              <Facebook size={24} />
            </Link>
            <Link href="https://www.instagram.com/v.enterprises994?igsh=bnF5dWZranpxczM5" target="_blank" className="hover:text-pink-500 transition">
              <Instagram size={24} />
            </Link>
            {/* <Link href="https://youtube.com" target="_blank" className="hover:text-red-500 transition">
              <Youtube size={24} />
            </Link> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} V Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
