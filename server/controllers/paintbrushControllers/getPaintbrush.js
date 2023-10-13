import { Paintbrush } from '../../models/paintbrush';

const getPaintbrush = async () => {
  try {
    const paintbrush = await Paintbrush.find({ isActive: true });
    if (paintbrush.length === 0) {
      throw new Error('No hay cepillos');
    } else {
      return paintbrush;
    }
  } catch (error) {
    return error;
  }
};

module.exports = getPaintbrush;
