"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ProductDetail } from "../../components/data/products";

type Props = {
  product: ProductDetail;
};

export default function ProductDetailClient({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState<string>(product.mainImage);
  const router = useRouter();

  return (
    <div className="grid gap-8 lg:grid-cols-2 items-start">
      {/* LEFT - Image Gallery */}
      <div className="space-y-6">
        {/* Main Image */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={selectedImage}
              alt={product.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Product Images</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.galleryImages.map((img, index) => (
              <button
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`relative min-w-16 h-16 rounded-lg border-2 bg-gray-50 overflow-hidden shrink-0 transition-all ${
                  selectedImage === img 
                    ? "border-indigo-500 ring-2 ring-indigo-200" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
                aria-label={`View product image ${index + 1}`}
              >
                <Image 
                  src={img} 
                  alt={`${product.title} - view ${index + 1}`} 
                  width={64} 
                  height={64} 
                  className="object-contain p-1" 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Interest section removed per request (Contact Sales Team) */}
      </div>

      {/* RIGHT - Product Information */}
      <div className="space-y-6">
        {/* Product Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h2>
          
          {/* Pricing */}
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-gray-900">{product.price}</span>
            <span className="text-lg text-gray-600">/Piece</span>
          </div>
          
          <p className="text-sm text-gray-700 mb-4">
            Minimum Order Quantity:{" "}
            <span className="font-semibold text-gray-900">{product.minOrderQty}</span>
          </p>

          {/* Key Features */}
          {/* <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
            <ul className="space-y-1">
              {product.bullets.slice(0, 3).map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
          <div className="space-y-3">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span className="font-medium text-gray-700">{spec.label}</span>
                <span className="text-gray-900">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Features */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Features</h3>
          <ul className="space-y-3">
            {product.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 shrink-0"></div>
                <span className="text-gray-700 leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="sticky bottom-6 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <button
            type="button"
            onClick={() => router.push('/contact')}
            aria-label="Go to contact page"
            className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Yes, I am interested!
          </button>
        </div>
      </div>
    </div>
  );
}