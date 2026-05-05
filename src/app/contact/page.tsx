"use client";

import { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import { productGroups } from "../../components/data/products";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.company || !formData.phone || !formData.product) {
        setError("Please fill in all required fields");
        setLoading(false);
        return;
      }

      // Save to Firestore
      await addDoc(collection(db, "bulkOrders"), {
        ...formData,
        status: "new",
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });

      setSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        product: "",
        quantity: "",
        message: "",
      });
      setSelectedCategory("");

    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit inquiry. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  // Get all products from your existing data
  const allProducts = productGroups.flatMap(group => 
    group.items.map(item => ({
      id: item.id,
      name: item.name,
      category: group.title
    }))
  );

  // Get unique categories
  const productCategories = [...new Set(productGroups.map(group => group.title))];

  // Filter products by selected category
  const filteredProducts = selectedCategory 
    ? allProducts.filter(product => product.category === selectedCategory)
    : allProducts;

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto py-24 px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Bulk Orders & Inquiries
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Partner with V Enterprises for high-quality industrial tools in bulk.  
            Fill out the form and our sales team will get back to you within 24 hours.
          </p>
          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400 text-xl" />
              <p className="text-gray-200">+91 83083 06420</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400 text-xl" />
              <p className="text-gray-200">v.enterprises994@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400 text-xl" />
              <p className="text-gray-200">Sinnar, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input 
                  name="name" 
                  placeholder="Your Name *" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none" 
                  required 
                />
              </div>
              <div>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Your Email *" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none" 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input 
                  name="company" 
                  placeholder="Company Name *" 
                  value={formData.company} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none" 
                  required 
                />
              </div>
              <div>
                <input 
                  name="phone" 
                  placeholder="Phone Number *" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none" 
                  required 
                />
              </div>
            </div>

            {/* Product Selection */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                  >
                    <option value="">All Categories</option>
                    {productCategories.map(category => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Product Dropdown */}
                <div className="relative">
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                    required
                  >
                    <option value="">Select Product *</option>
                    {filteredProducts.map(product => (
                      <option key={product.id} value={product.name} className="bg-gray-800">
                        {product.name}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Show selected product info */}
              {formData.product && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <p className="text-sm text-blue-300">
                    Selected: <span className="font-semibold">{formData.product}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Quantity and Message */}
            <input 
              name="quantity" 
              placeholder="Order Quantity (e.g., 500 units, 100 pieces)" 
              value={formData.quantity} 
              onChange={handleChange} 
              className="p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none" 
            />
            
            <textarea 
              name="message" 
              placeholder="Additional Details, Specifications, or Special Requirements" 
              value={formData.message} 
              onChange={handleChange} 
              className="p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 h-32 resize-none focus:ring-2 focus:ring-blue-500 outline-none" 
            />

            {/* Optional: File upload instructions */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-yellow-300 text-sm">
                Need to share files? Please email your RFQ, technical drawings, or product list directly to{" "}
                <a href="mailto:v.enterprises994@gmail.com" className="underline hover:text-yellow-200">
                  v.enterprises994@gmail.com
                </a>
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending Inquiry...
                </span>
              ) : (
                "Submit Bulk Order Inquiry"
              )}
            </button>
          </form>

          {/* Success Message */}
          {success && (
            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-green-400 flex items-center gap-2">
                <span className="text-lg">✅</span>
                Inquiry sent successfully! Our sales team will contact you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}