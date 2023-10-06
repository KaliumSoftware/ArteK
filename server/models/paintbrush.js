import { Schema, model } from 'mongoose';

const paintbrushSchema = new Schema({
  price: { type: Number },
  color: { type: String },
  model: { type: String },
  size: { type: String },
  description: { type: String },
  image: { publicId: String, url: String },
  reviews: { type: Array },
  averageRating: { type: Number },
  active: { type: Boolean }
});

paintbrushSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Paintbrush = model('Paintbrush', paintbrushSchema);

export default Paintbrush;
