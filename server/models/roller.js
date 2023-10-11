import { Schema, model } from 'mongoose';

const rollerSchema = new Schema({
  price: { type: Number },
  model: { type: String },
  color: { type: String },
  size: { type: String },
  description: { type: String },
  image: { publicId: String, url: String },
  reviews: { type: Array },
  averageRating: { type: Number },
  active: { type: Boolean }
});

rollerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Roller = model('Roller', rollerSchema);

export default Roller;
