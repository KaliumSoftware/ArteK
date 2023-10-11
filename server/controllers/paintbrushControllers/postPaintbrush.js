import { Paint } from '../../models/paint';

const postPaintbrush = async (
  price,
  model,
  color,
  size,
  description,
  image
) => {
  try {
    let existingPaintbrush = await Paint.findOne({
      model,
      color,
      size
    });

    if (existingPaintbrush) {
      if (existingPaintbrush.isActive) {
        throw new Error('El cepillo ya existe');
      } else {
        existingPaintbrush.isActive = true;
        await existingService.save();
        return 'El cepillo fue agregado';
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
        message: 'El cepillo fue agregado'
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = postPaintbrush;
