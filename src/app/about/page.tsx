"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
  <section className="relative py-24 text-center bg-linear-to-r from-gray-900 via-blue-900 to-gray-800 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            About <span className="text-blue-400">V Enterprises</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-gray-300"
          >
            We’re a forward-thinking industrial solutions company — blending innovation, precision,
            and performance to create sustainable growth for our clients.
          </motion.p>
        </section>

        {/* Company Overview */}
        <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="/kamgar.jpg"
            alt="About V Enterprises"
            className="w-full rounded-2xl shadow-lg object-cover"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Established in 2013 in Nashik, Maharashtra, V Enterprises is a trusted proprietorship firm specializing in wholesale and trading. We offer a wide range of high-quality safety products, including safety goggles and hand gloves. Committed to customer satisfaction, we ensure reliable supply and competitive service. Our focus is on delivering durable and effective safety solutions to meet diverse industrial needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From design to deployment, we ensure every product and service reflects our
              commitment to quality and innovation.
            </p>
          </motion.div>
        </section>

        {/* Core Values Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Innovation",
                  desc: "We constantly explore new ways to improve performance and efficiency.",
                  icon: "💡",
                },
                {
                  title: "Reliability",
                  desc: "We deliver consistent quality and long-term support our clients can trust.",
                  icon: "⚙️",
                },
                {
                  title: "Sustainability",
                  desc: "We focus on building eco-friendly and sustainable industrial solutions.",
                  icon: "🌱",
                },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  className="p-8 border rounded-2xl shadow-sm hover:shadow-xl transition-shadow bg-gray-50"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
  <section className="py-20 bg-linear-to-r from-blue-800 to-blue-600 text-center text-white">
          <h2 className="text-3xl font-semibold mb-4">Let’s Build the Future Together</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-200">
            Partner with VIV to transform your industrial operations into efficient, tech-driven systems.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-medium px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-all"
          >
            Get in Touch
          </a>
        </section>
      </div>
  );
}

