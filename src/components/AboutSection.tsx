import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <Image
          src="/screwall.jpg"
          alt="Factory"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-4 text-gray-100">
          About V Enterprises
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          V Enterprises has been a trusted name in industrial hardware and tools for
          over two decades. Our mission is to provide premium quality products that
          enhance efficiency and safety in every project we serve.
        </p>
        <p className="text-gray-300">
          From small-scale workshops to large manufacturing plants, we’ve earned the
          trust of businesses nationwide by maintaining the highest standards of
          quality, reliability, and innovation.
        </p>
      </div>
    </section>
  );
}
