import { User } from '../../models/user';

const deleteUser = async (id) => {
  try {
    const user = await User.findOne({ _id: id });

    if (!user || user.isActive === false) {
      throw new Error('No se encontró usuario');
    } else {
      user.isActive = false;
      await consumerUser.save();
      return {
        message: 'Usuario eliminado'
      };
    }
  } catch (error) {
    return false;
  }
};

module.exports = deleteUser;
