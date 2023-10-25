import { Paint } from '../../models/paint';

const putPaint = async (
  id,
  price,
  model,
  color,
  amount,
  description,
  image
) => {
  try {
    const modelLower = model.toLowerCase();
    const colorLower = color.toLowerCase();
    const amountLower = amount.toLowerCase();
    const existingPaint = await Paint.findOne({ _id: id });

    if (!existingPaint || existingPaint.isActive === false) {
      throw new Error('La pintura no existe');
    } else {
      if (price) {
        existingPaint.price = price;
      }
      if (model) {
        existingPaint.model = modelLower;
      }
      if (color) {
        existingPaint.color = colorLower;
      }
      if (amount) {
        existingPaint.amount = amountLower;
      }
      if (description) {
        existingPaint.description = description;
      }
      if (image) {
        existingPaint.image = image;
      }
      await existingPaint.save();
      return {
        message: 'La pintura fue actualizado'
      };
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = putPaint;
