/* eslint-disable react/prop-types */

export default function ProductCard({ product }) {
  return (
    <div className="card bg-gray-800 shadow-xl rounded-lg border border-gray-200 overflow-hidden">
      <figure className="relative h-48">
        <img
          src={product?.photo}
          alt="food"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="p-6">
        <div className="badge bg-blue-500 text-white pr-10 py-1 rounded-full text-xs">
          {product?.category}
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {product?.title}
        </h2>
        <p className="text-gray-400 text-sm mb-4">{product?.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 font-semibold">
            ${product?.price.toFixed(2)}
          </span>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="text-blue-500 hover:text-blue-700 font-semibold">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
