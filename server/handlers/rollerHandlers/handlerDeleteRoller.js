import { deleteRoller } from '../../controllers/rollerControllers/deleteRoller';

const handlerDeleteRoller = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPaint = await deletePaint(id);
    if (deletedPaint.message === 'No se encontró la pintura') {
      throw new Error('No existe una pintura con este nombre');
    } else {
      res.status(200).json({
        message: 'Pintura eliminado correctamente'
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerDeleteRoller;
