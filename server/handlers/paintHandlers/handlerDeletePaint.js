import { deletePaint } from '../../controllers/paintControllers/deletePaint';

const handlerDeletePaint = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPaint = await deletePaint(id);
    if (deletedPaint.message === 'No se encontró la pintura') {
      throw new Error('No existe esa pintura');
    } else {
      res.status(200).json({
        message: 'Pintura eliminado correctamente'
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerDeletePaint;
