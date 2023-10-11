import { Paint } from '../../models/paint';

const deletePaintbrush = async (id) => {
  try {
    const existingPaintbrush = await Paint.findOne({ _id: id });

    if (!existingPaintbrush || existingPaintbrush.isActive === false) {
      throw new Error('No se encontró la pintura');
    } else {
      existingPaintbrush.isActive = false;
      await existingPaintbrush.save();
      return {
        message: 'Eliminaste la pintura'
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = deletePaintbrush;
