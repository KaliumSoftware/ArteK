import { getPaint } from '../../controllers/paintControllers/getPaint';

const handlerGetPaint = async () => {
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

module.exports = handlerGetPaint;
