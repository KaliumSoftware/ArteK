import { Paint } from '../../models/paint';

const postPaint = async (price, model, color, size, description, image) => {
  try {
    const modelLower = model.toLowerCase();
    const colorLower = color.toLowerCase();
    const sizeLower = size.toLowerCase();

    let existingPaint = await Paint.findOne({
      modelLower,
      colorLower,
      sizeLower
    });

    if (existingPaint) {
      if (existingPaint.isActive) {
        throw new Error('Pintura repetida');
      } else {
        existingPaint.isActive = true;
        await existingService.save();
        return 'La pintura fue agregada';
      }
    } else {
      await Service.create({
        price,
        model,
        color,
        size,
        description,
        image
      });
      return {
        message: 'La pintura fue agregada'
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = postPaint;
