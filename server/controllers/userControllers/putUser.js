import { User } from '../../models/user';

const putUser = async (id) => {
  try {
    const user = await User.findOne({ _id: id });

    if (user || user.isActive === true) {
      throw new Error('El usuario ya existe');
    } else {
      user.isActive = false;
      await consumerUser.save();
      return {
        message: 'Usuario restablecido'
      };
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = putUser;
