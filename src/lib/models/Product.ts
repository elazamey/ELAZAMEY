import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, enum: ['Kids', 'Teens', 'Girls', 'Men', 'Women', 'Accessories'] },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  color: { type: String },
  size: { type: String },
  stock: { type: Number, default: 0 },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
