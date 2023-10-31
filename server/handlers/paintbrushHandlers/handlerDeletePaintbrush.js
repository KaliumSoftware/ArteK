import { deletePaintbrush } from '../../controllers/paintbrushControllers/deletePaintbrush';

const handlerDeletePaintbrush = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPaintbrush = await deletePaintbrush(id);
    if (deletedPaintbrush.message === 'No se encontró el cepillo') {
      throw new Error('No existe un cepillo con este nombre');
    } else {
      res.status(200).json({
        message: 'Cepillo eliminado correctamente'
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerDeletePaintbrush;
