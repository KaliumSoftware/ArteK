import { getUser } from '../../controllers/userControllers/getUser';

const handlerGetUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetUser;
