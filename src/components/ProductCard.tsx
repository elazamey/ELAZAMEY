import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  color?: string;
  size?: string;
  stock: number;
  featured: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xl font-bold text-pink-600">${product.price}</span>
          <span className="text-sm text-gray-500">{product.category}</span>
        </div>
        {product.color && (
          <p className="text-sm text-gray-500">Color: {product.color}</p>
        )}
        {product.size && (
          <p className="text-sm text-gray-500">Size: {product.size}</p>
        )}
        <div className="mt-4 flex justify-between items-center">
          <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </span>
          <Link
            href={`/products/${product._id}`}
            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
