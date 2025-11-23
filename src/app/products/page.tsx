// import Link from "next/link";
// import Image from "next/image";
// import { productGroups } from "../../components/data/products";

// export default function ProductsPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20 md:pt-24 py-8 text-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header / Hero */}
//         <div className="mb-12">
//           <div className="bg-gray-900 rounded-2xl py-10 px-6 shadow-md">
//             <div className="text-center">
//               <h1 className="text-4xl font-bold text-white mb-4">Products & Services</h1>
//               <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//                 Discover our comprehensive range of high-quality industrial products and solutions
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Product Groups */}
//         <div className="space-y-8">
//           {productGroups.map((group) => (
//             <section 
//               key={group.id} 
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//             >
//               {/* Group Header */}
//               <div className="p-8 border-b border-gray-100">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-3">{group.title}</h2>
//                 <p className="text-gray-600 leading-relaxed">{group.description}</p>
//               </div>

//               {/* Product Grid */}
//               <div className="p-8">
//                 <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
//                   {group.items.map((item) => (
//                     <Link
//                       href={`/products/${item.id}`}
//                       key={item.id}
//                       className="group bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-md border border-gray-200 transition-all duration-300"
//                     >
//                       <div className="relative w-full aspect-[4/3] mb-4">
//                         <Image
//                           src={item.image}
//                           alt={item.name}
//                           fill
//                           className="object-contain transition-transform group-hover:scale-105"
//                         />
//                       </div>
//                       <div className="text-center">
//                         <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors line-clamp-2">
//                           {item.name}
//                         </h3>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>

//                 {/* View More Details Button - Improved */}
//                 {group.items.length > 0 && (
//                   <div className="mt-8 text-center">
//                     <Link
//                       href={`/products/${group.items[0].id}`}
//                       className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
//                     >
//                       <span>View Product Details</span>
//                       <span>→</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </section>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// import Link from "next/link";
// import Image from "next/image";
// import { productGroups } from "../../components/data/products";

// export default function ProductsPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20 md:pt-24 py-8 text-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header / Hero */}
//         <div className="mb-12">
//           <div className="bg-gray-800 rounded-2xl py-10 px-6 shadow-md">
//             <div className="text-center">
//               <h1 className="text-4xl font-bold text-white mb-4">Products & Services</h1>
//               <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//                 Discover our comprehensive range of high-quality industrial products and solutions
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Product Groups */}
//         <div className="space-y-8">
//           {productGroups.map((group) => (
//             <section 
//               key={group.id} 
//               className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700"
//             >
//               {/* Group Header */}
//               <div className="p-8 border-b border-gray-700">
//                 <h2 className="text-2xl font-bold text-white mb-3">{group.title}</h2>
//                 <p className="text-gray-300 leading-relaxed">{group.description}</p>
//               </div>

//               {/* Product Grid */}
//               <div className="p-8">
//                 <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
//                   {group.items.slice(0, 5).map((item) => (
//                     <Link
//                       href={`/products/${item.id}`}
//                       key={item.id}
//                       className="group bg-gray-700 rounded-xl p-4 hover:bg-gray-600 hover:shadow-md border border-gray-600 transition-all duration-300"
//                     >
//                       <div className="relative w-full aspect-[4/3] mb-4">
//                         <Image
//                           src={item.image}
//                           alt={item.name}
//                           fill
//                           className="object-contain transition-transform group-hover:scale-105"
//                         />
//                       </div>
//                       <div className="text-center">
//                         <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
//                           {item.name}
//                         </h3>
//                       </div>
//                     </Link>
//                   ))}
                  
//                   {/* Show "View More" card if there are more than 5 items */}
//                   {group.items.length > 5 && (
//                     <Link
//                       href={`/products/category/${group.id}`}
//                       className="group bg-gray-700 rounded-xl p-4 hover:bg-gray-600 hover:shadow-md border-2 border-dashed border-gray-600 hover:border-indigo-500 transition-all duration-300 flex items-center justify-center"
//                     >
//                       <div className="text-center">
//                         <div className="text-2xl mb-2">+{group.items.length - 5}</div>
//                         <h3 className="font-semibold text-gray-300 group-hover:text-indigo-300 transition-colors">
//                           View More
//                         </h3>
//                       </div>
//                     </Link>
//                   )}
//                 </div>

//                 {/* View Product Details Button - Now links to category page */}
//                 {group.items.length > 0 && (
//                   <div className="mt-8 text-center">
//                     <Link
//                       href={`/products/category/${group.id}`}
//                       className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
//                     >
//                       <span>View All {group.title}</span>
//                       <span>→</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </section>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { productGroups } from "../../components/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20 md:pt-24 py-8 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header / Hero */}
        <div className="mb-12">
          <div className="bg-gray-800 rounded-2xl py-10 px-6 shadow-md">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Products & Services</h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Discover our comprehensive range of high-quality industrial products and solutions
              </p>
            </div>
          </div>
        </div>

        {/* Product Groups */}
        <div className="space-y-8">
          {productGroups.map((group) => (
            <section 
              key={group.id} 
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              {/* Group Header */}
              <div className="p-8 border-b border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-3">{group.title}</h2>
                <p className="text-gray-300 leading-relaxed">{group.description}</p>
              </div>

              {/* Product Grid */}
              <div className="p-8">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                  {group.items.map((item) => (
                    <Link
                      href={`/products/${item.id}`}
                      key={item.id}
                      className="group bg-gray-700 rounded-xl p-4 hover:bg-gray-600 hover:shadow-md border border-gray-600 transition-all duration-300"
                    >
                      <div className="relative w-full aspect-[4/3] mb-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                          {item.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Dynamic Button based on category type */}
                {group.items.length > 0 && (
                  <div className="mt-8 text-center">
                    {group.hasCategoryPage ? (
                      // For categories with multiple products (Hand Gloves, Forklift Parts)
                      <Link
                        href={`/products/category/${group.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                      >
                        <span>View All Products</span>
                        <span>→</span>
                      </Link>
                    ) : (
                      // For individual products (Heat Gun)
                      <Link
                        href={`/products/${group.items[0].id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                      >
                        <span>View Product Details</span>
                        <span>→</span>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}