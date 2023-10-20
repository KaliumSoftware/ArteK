import { User } from '../../models/user';

const getUser = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    if (user.length === 0) {
      throw new Error('No hay usuarios');
    } else {
      return user;
    }
  } catch (error) {
    return false;
  }
};

module.exports = getUser;
