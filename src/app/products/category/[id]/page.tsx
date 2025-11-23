import Link from "next/link";
import Image from "next/image";
import { getProductGroup, getProductsByCategory, productGroups } from "../../../../components/data/products";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return productGroups.map((group) => ({ id: group.id }));
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const category = getProductGroup(id);
  const products = getProductsByCategory(id);

  if (!category) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20 md:pt-24 py-8 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <p className="text-red-400 font-semibold text-lg mb-4">Category not found.</p>
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
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
        {/* Back to Products Button */}
        <div className="mb-6">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 hover:border-indigo-500 hover:bg-gray-700 transition-all shadow-sm hover:shadow-md"
          >
            <span>←</span>
            Back to Products
          </Link>
        </div>

        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">{category.title}</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            {category.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="group bg-gray-700 rounded-xl p-6 hover:bg-gray-600 hover:shadow-lg border border-gray-600 transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/3] mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* If no products found */}
          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}