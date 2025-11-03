interface Design {
  _id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  price?: number;
}

interface DesignCardProps {
  design: Design;
}

const DesignCard = ({ design }: DesignCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={design.imageUrl} alt={design.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{design.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{design.category}</p>
        <p className="text-gray-700">{design.description}</p>
        {design.price && (
          <p className="text-lg font-bold text-gray-800 mt-2">${design.price}</p>
        )}
      </div>
    </div>
  );
};

export default DesignCard;
