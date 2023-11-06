import { putUser } from '../../controllers/userControllers/putUser';

const handlerPutUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutUser;
