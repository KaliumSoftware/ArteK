import { getUser } from '../../controllers/userControllers/getUser';

const handlerGetUser = async (req, res) => {
  try {
    const user = await getUser();

    if (user.message === 'No hay usuarios')
      throw new Error('No se encontraron usuarios');

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetUser;
