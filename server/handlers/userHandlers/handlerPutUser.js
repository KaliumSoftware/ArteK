import { putUser } from '../../controllers/userControllers/putUser';

const handlerPutUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await putUser(id);

    if (updatedUser.message === 'El usuario ya existe') {
      throw new Error('El usuario ingresado ya existe');
    } else {
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutUser;
