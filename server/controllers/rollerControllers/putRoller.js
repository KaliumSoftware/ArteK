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
        existingService.price = price;
      }
      if (model) {
        existingService.model = modelLower;
      }
      if (color) {
        existingService.color = colorLower;
      }
      if (amount) {
        existingService.amount = amountLower;
      }
      if (description) {
        existingService.description = description;
      }
      if (image) {
        existingService.image = image;
      }
      await existingPaint.save();
      return {
        message: 'La pintura fue actualizado'
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = putPaint;
