import { Paint } from '../../models/paint';

const deletePaint = async (id) => {
  try {
    const existingPaint = await Paint.findOne({ _id: id });

    if (!existingPaint || existingPaint.isActive === false) {
      throw new Error('No se encontró la pintura');
    } else {
      existingPaint.isActive = false;
      await existingPaint.save();
      return {
        message: 'Eliminaste la pintura'
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = deletePaint;
