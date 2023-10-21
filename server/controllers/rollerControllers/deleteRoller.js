import { Roller } from '../../models/roller';

const deleteRoller = async (id) => {
  try {
    const existingRoller = await Roller.findOne({ _id: id });

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
    return error.message;
  }
};

module.exports = deleteRoller;
