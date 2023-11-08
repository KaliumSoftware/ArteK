import { deleteUser } from '../../controllers/userControllers/deleteUser';

const handlerDeleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await deleteUser(id);
    if (deletedUser.message === 'No se encontró usuarioo') {
      throw new Error('No existe es usuario');
    } else {
      res.status(200).json({
        message: 'Usuario eliminado correctamente'
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerDeleteUser;
