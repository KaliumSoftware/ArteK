import { Roller } from '../../models/roller';

const getRoller = async () => {
  try {
    const rollers = await Roller.find({ isActive: true });
    if (rollers.length === 0) {
      throw new Error('No hay rodillos');
    } else {
      return rollers;
    }
  } catch (error) {
    return error;
  }
};

module.exports = getRoller;
