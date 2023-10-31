import { getPaintbrush } from '../../controllers/paintbrushControllers/getPaintbrush';

const handlerGetPaintbrush = async (req, res) => {
  try {
    const allPaintbrush = await getPaintbrush();
    if (allPaintbrush.message === 'No hay cepillos') {
      throw new Error('No se encontraron cepillos');
    }
    res.status(200).json(allServices);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetPaintbrush;
