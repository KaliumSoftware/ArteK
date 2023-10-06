import { Schema, model } from 'mongoose';

const paintSchema = new Schema({
  price: { type: Number },
  model: { type: String },
  color: { type: String },
  amount: { type: Number },
  description: { type: String },
  image: { publicId: String, url: String },
  reviews: { type: Array },
  averageRating: { type: Number },
  active: { type: Boolean }
});

paintSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Paint = model('Paint', paintSchema);

export default Paint;
