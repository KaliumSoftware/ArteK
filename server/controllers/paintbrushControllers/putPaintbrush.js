import { Paint } from '../../models/paint';

const putPaint = async (id, price, model, color, size, description, image) => {
  try {
    const modelLower = model.toLowerCase();
    const colorLower = color.toLowerCase();
    const sizeLower = size.toLowerCase();
    const existingPaint = await Paint.findOne({ _id: id });

    if (!existingPaint || existingPaint.isActive === false) {
      throw new Error('El cepillo no existe');
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
      if (size) {
        existingService.size = sizeLower;
      }
      if (description) {
        existingService.description = description;
      }
      if (image) {
        existingService.image = image;
      }
      await existingPaint.save();
      return {
        message: 'El cepillo fue actualizado'
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = putPaint;
