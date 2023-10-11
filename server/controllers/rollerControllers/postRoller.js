import { Paint } from '../../models/paint';

const postRoller = async (price, model, color, size, description, image) => {
  try {
    const modelLower = model.toLowerCase();
    const colorLower = color.toLowerCase();
    const sizeLower = size.toLowerCase();

    let existingRoller = await Paint.findOne({
      modelLower,
      colorLower,
      sizeLower
    });

    if (existingRoller) {
      if (existingRoller.isActive) {
        throw new Error('Rodillo repetido');
      } else {
        existingRoller.isActive = true;
        await existingRoller.save();
        return 'El rodillo fue agregada';
      }
    } else {
      await Paint.create({
        price,
        model,
        color,
        size,
        description,
        image
      });
      return {
        message: 'El rodillo fue agregada'
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = postRoller;
