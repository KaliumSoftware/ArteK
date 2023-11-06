import { deleteUser } from '../../controllers/userControllers/deleteUser';

const handlerDeleteUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerDeleteUser;
