'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Kids', description: 'Fashion for the little ones', image: '/images/kids.jpg' },
  { name: 'Teens', description: 'Trendy styles for teenagers', image: '/images/teens.jpg' },
  { name: 'Girls', description: 'Beautiful dresses and outfits', image: '/images/girls.jpg' },
  { name: 'Men', description: 'Modern menswear collection', image: '/images/men.jpg' },
  { name: 'Women', description: 'Elegant women\'s fashion', image: '/images/women.jpg' },
  { name: 'Accessories', description: 'Complete your look with accessories', image: '/images/accessories.jpg' },
];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shop by Category</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/products?category=${category.name}`}
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">{category.name}</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
