import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  isActive: {
    type: Boolean,
    required: true,
    default: false
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  birthdate: {
    type: Date,
    immutable: true
  },
  address: {
    type: String
  },
  image: { public_id: String, secure_url: String },
  email: {
    type: String,
    required: true
  },
  registerDate: {
    type: Date,
    default: Date.now,
    immutable: true
  }
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const User = model('User', consumerSchema);

export default User;
