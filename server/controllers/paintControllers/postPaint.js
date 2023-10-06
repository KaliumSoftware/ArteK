import { Paint } from '../../models/paint';

const postPaint = async (price, model, color, amount, description, image) => {
  try {
    const colorLower = color.toLowerCase();
    const modelLower = model.toLowerCase();
    const amountLower = amount.toLowerCase();

    let existingPaint = await Paint.findOne({
      modelLower,
      colorLower,
      amountLower
    });

    if (existingPaint) {
      if (existingPaint.isActive) {
        throw new Error('Pintura repetida');
      } else {
        existingPaint.isActive = true;
        await existingService.save();
        return 'La Pintura fue agregada';
      }
    } else {
      await Service.create({
        price,
        modelLower,
        colorLower,
        amountLower,
        description,
        image
      });
      return {
        message: 'La Pintura fue agregada'
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = postPaint;
