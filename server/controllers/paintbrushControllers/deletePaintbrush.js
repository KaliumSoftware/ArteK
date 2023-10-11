import { Paint } from '../../models/paint';

const deletePaintbrush = async (id) => {
  try {
    const existingPaintbrush = await Paint.findOne({ _id: id });

    if (!existingPaintbrush || existingPaintbrush.isActive === false) {
      throw new Error('No se encontró el cepillo');
    } else {
      existingPaintbrush.isActive = false;
      await existingPaintbrush.save();
      return {
        message: 'Eliminaste el cepillo'
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = deletePaintbrush;
