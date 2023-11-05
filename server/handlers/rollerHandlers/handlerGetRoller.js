import { getRoller } from '../../controllers/rollerControllers/getRoller';

const handlerGetRoller = async (req, res) => {
  try {
    const allRoller = await getRoller();
    if (allRoller.message === 'No hay rodillos') {
      throw new Error('No se encontraron rodillos');
    }
    res.status(200).json(allRoller);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetRoller;
