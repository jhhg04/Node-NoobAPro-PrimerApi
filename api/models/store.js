import mongoose from 'mongoose';

const stroreSchema = mongoose.Schema({
  firstName: String,
  phone: Number,
  address: String,
});

export default mongoose.model('store', stroreSchema);
