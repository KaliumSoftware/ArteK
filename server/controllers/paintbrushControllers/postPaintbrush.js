import { Paintbrush } from '../../models/paintbrush';

const postPaintbrush = async (
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

    let existingPaintbrush = await Paintbrush.findOne({
      modelLower,
      colorLower,
      sizeLower
    });

    if (existingPaintbrush) {
      if (existingPaintbrush.isActive) {
        throw new Error('El cepillo ya existe');
      } else {
        existingPaintbrush.isActive = true;
        await existingPaintbrush.save();
        return 'El cepillo fue agregado';
      }
    } else {
      await Paintbrush.create({
        price,
        model,
        color,
        size,
        description,
        image
      });
      return {
        message: 'El cepillo fue agregado'
      };
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = postPaintbrush;
