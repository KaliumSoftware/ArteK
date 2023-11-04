import { getRoller } from '../../controllers/rollerControllers/getRoller';

const handlerGetRoller = async () => {
  try {
    const allPaint = await getPaint();
    if (allPaint.message === 'No hay pinturas') {
      throw new Error('No se encontraron pinturas');
    }
    res.status(200).json(allPaint);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetRoller;
