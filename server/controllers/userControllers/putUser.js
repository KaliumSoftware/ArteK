import { User } from '../../models/user';

const putUser = async (newUser) => {
  try {
    const user = await User.findById(id);

    if (!consumerUser) return false;

    consumerUser.isActive = true;

    await consumerUser.save();

    return {
      message: 'Usuario eliminado'
    };
  } catch (error) {
    return error.message;
  }
};

module.exports = putUser;
