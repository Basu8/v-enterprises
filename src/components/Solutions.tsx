import Image from "next/image";
import Link from 'next/link'

export default function Solutions() {
  const products = [
    { name: "Industrial Tools", image: "/welding.jpg" },
    { name: "Heavy Equipment Parts", image: "/cutter.jpg" },
    { name: "Safety Gear", image: "/worker.jpg" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Our Product Range
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <Link
              key={p.name}
              href="/products"
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all block"
              aria-label={`View ${p.name} products`}
            >
              <div className="relative">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-60"
                />

                {/* translucent black overlay to improve text contrast */}
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />

                {/* caption positioned at bottom of the image */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-semibold drop-shadow">
                    {p.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
