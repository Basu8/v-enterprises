export default function WhyChoose() {
  const reasons = [
    {
      title: "Quality Assurance",
      desc: "We source only the most durable and high-performance materials.",
    },
    {
      title: "Expert Support",
      desc: "Our experienced team is always ready to guide you to the right solution.",
    },
    {
      title: "Nationwide Delivery",
      desc: "Fast and reliable logistics for businesses across the country.",
    },
  ];

  return (
    <section className="bg-yellow-50 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Why Choose Us</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="bg-white shadow-md p-8 rounded-xl border hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {r.title}
            </h3>
            <p className="text-gray-600">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
