import { deleteRoller } from '../../controllers/rollerControllers/deleteRoller';

const handlerDeleteRoller = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRoller = await deleteRoller(id);
    if (deletedRoller.message === 'No se encontró el rodillo') {
      throw new Error('No existe un rodillo con este nombre');
    } else {
      res.status(200).json({
        message: 'Rodillo eliminado correctamente'
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerDeleteRoller;
