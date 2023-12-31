import { Roller } from '../../models/roller';

const putRoller = async (id, price, model, color, size, description, image) => {
  try {
    const modelLower = model.toLowerCase();
    const colorLower = color.toLowerCase();
    const sizeLower = size.toLowerCase();
    const existingRoller = await Roller.findOne({ _id: id });

    if (!existingRoller || existingRoller.isActive === false) {
      throw new Error('El rodillo no existe');
    } else {
      if (price) {
        existingRoller.price = price;
      }
      if (model) {
        existingRoller.model = modelLower;
      }
      if (color) {
        existingRoller.color = colorLower;
      }
      if (size) {
        existingRoller.size = sizeLower;
      }
      if (description) {
        existingRoller.description = description;
      }
      if (image) {
        existingRoller.image = image;
      }
      await existingRoller.save();
      return {
        message: 'El rodillo fue actualizado'
      };
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = putRoller;
