import Link from "next/link";
import { getProductDetail, productDetails, type ProductDetail } from "../../../components/data/products";
import ProductDetailClient from "../../../components/Products/ProductDetailClient";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return productDetails.map((p) => ({ id: p.id }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductDetail(id);

  if (!product) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <p className="text-red-500 font-semibold text-lg mb-4">Product not found.</p>
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
            >
              <span>←</span> Back to Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20 md:pt-24 py-8 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back to Products Button - Fixed spacing & contrast */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-6 transition-colors group px-2 py-1 rounded"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Products
        </Link>

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">{product.category}</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            Prominent & leading wholesaler, we offer {product.title}.
          </p>
        </div>

        {/* Product Detail Client Component */}
        <ProductDetailClient product={product as ProductDetail} />
      </div>
    </main>
  );
}