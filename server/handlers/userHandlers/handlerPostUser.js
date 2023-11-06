import { postUser } from '../../controllers/userControllers/postUser';

const handlerPostUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = handlerPostUser;
