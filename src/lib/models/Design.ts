import mongoose from 'mongoose';

const DesignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this design.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this design.'],
    maxlength: [200, 'Description cannot be more than 200 characters'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category for this design.'],
    enum: ['dresses', 'ready-to-wear', 'accessories', 'other'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL for this design.'],
  },
  price: {
    type: Number,
    required: false,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Design || mongoose.model('Design', DesignSchema);
