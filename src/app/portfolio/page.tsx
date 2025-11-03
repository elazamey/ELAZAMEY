'use client';

import { useState, useEffect } from 'react';
import DesignCard from '@/components/DesignCard';

interface Design {
  _id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  price?: number;
}

export default function Portfolio() {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [filteredDesigns, setFilteredDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchDesigns();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredDesigns(designs);
    } else {
      setFilteredDesigns(designs.filter(design => design.category === selectedCategory));
    }
  }, [designs, selectedCategory]);

  const fetchDesigns = async () => {
    try {
      const response = await fetch('/api/designs');
      const data = await response.json();
      if (data.success) {
        setDesigns(data.data);
      } else {
        setError('Failed to fetch designs');
      }
    } catch (err) {
      setError('An error occurred while fetching designs');
    }
    setLoading(false);
  };

  const categories = ['all', 'dresses', 'ready-to-wear', 'accessories', 'other'];

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        My Portfolio
      </h1>

      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md capitalize ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition duration-300`}
            >
              {category === 'ready-to-wear' ? 'Ready to Wear' : category}
            </button>
          ))}
        </div>
      </div>

      {filteredDesigns.length === 0 ? (
        <div className="text-center text-gray-600">
          No designs available in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => (
            <DesignCard key={design._id} design={design} />
          ))}
        </div>
      )}
    </div>
  );
}
