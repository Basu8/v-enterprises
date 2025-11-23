import { FaTools, FaProjectDiagram, FaSmileBeam } from "react-icons/fa";

export default function Stats() {
  const stats = [
    { number: "10+", label: "Years Experience", icon: <FaTools size={36} /> },
    { number: "500+", label: "Equipment Supplied", icon: <FaProjectDiagram size={36} /> },
    { number: "100%", label: "Client Satisfaction", icon: <FaSmileBeam size={36} /> },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 px-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="
              backdrop-blur-xl bg-white/30 border border-white/40
              shadow-xl rounded-2xl p-10 flex flex-col items-center
              transition-all duration-300 hover:scale-105 hover:shadow-2xl
              hover:border-blue-300 hover:bg-white/40
            "
          >
            <div className="text-blue-600 mb-4">{item.icon}</div>

            <h3 className="text-5xl font-extrabold text-gray-900 drop-shadow-sm">
              {item.number}
            </h3>

            <p className="text-gray-700 mt-3 text-lg font-semibold tracking-wide text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
