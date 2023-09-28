import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  products: {
    type: Array,
    required: true
  },
  finalPrice: {
    type: Number,
    min: 0
  },
  doDate: {
    type: Date,
    default: Date.now()
  },
  deliveryDate: {
    type: Date
  }
});

orderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Order = model('Order', orderSchema);

export default Order;
