"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <Image
        src="/warehouse.jpg"
        alt="Industrial background"
        fill
        sizes="100vw"
        className="object-cover brightness-50"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 uppercase tracking-wide">
          Premium Industrial Hardware Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Trusted by leading industries for quality, precision, and performance.
        </p>
        <a
          href="/contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-lg transition-all"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
