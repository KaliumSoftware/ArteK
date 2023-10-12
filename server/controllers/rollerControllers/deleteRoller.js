import { Paint } from '../../models/paint';

const deleteRoller = async (id) => {
  try {
    const existingRoller = await Paint.findOne({ _id: id });

    if (!existingRoller || existingRoller.isActive === false) {
      throw new Error('No se encontró el rodillo');
    } else {
      existingRoller.isActive = false;
      await existingRoller.save();
      return {
        message: 'Eliminaste el rodillo'
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = deleteRoller;
