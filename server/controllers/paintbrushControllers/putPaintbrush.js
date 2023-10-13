import { Paintbrush } from '../../models/paintbrush';

const putPaintbrush = async (
  id,
  price,
  model,
  color,
  size,
  description,
  image
) => {
  try {
    const modelLower = model.toLowerCase();
    const colorLower = color.toLowerCase();
    const sizeLower = size.toLowerCase();
    const existingPaintbrush = await Paintbrush.findOne({ _id: id });

    if (!existingPaintbrush || existingPaintbrush.isActive === false) {
      throw new Error('El cepillo no existe');
    } else {
      if (price) {
        existingPaintbrush.price = price;
      }
      if (model) {
        existingPaintbrush.model = modelLower;
      }
      if (color) {
        existingPaintbrush.color = colorLower;
      }
      if (size) {
        existingPaintbrush.size = sizeLower;
      }
      if (description) {
        existingPaintbrush.description = description;
      }
      if (image) {
        existingPaintbrush.image = image;
      }
      await existingPaintbrush.save();
      return {
        message: 'El cepillo fue actualizado'
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = putPaintbrush;
