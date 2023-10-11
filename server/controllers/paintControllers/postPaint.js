import { Paint } from '../../models/paint';

const postPaint = async (price, model, color, amount, description, image) => {
  try {
    const modelLower = model.toLowerCase();
    const colorLower = color.toLowerCase();
    const amountLower = amount.toLowerCase();

    let existingPaint = await Paint.findOne({
      modelLower,
      colorLower,
      amountLower
    });

    if (existingPaint) {
      if (existingPaint.isActive) {
        throw new Error('La pintura ya existe');
      } else {
        existingPaint.isActive = true;
        await existingPaint.save();
        return 'La pintura fue agregada';
      }
    } else {
      await Paint.create({
        price,
        model,
        color,
        amount,
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
