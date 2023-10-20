import { User } from '../../models/user';

const getUser = async (newUser) => {
  try {
    const user = await User.findOne(
      { userUid: userUid },
      {
        password: 0,
        usernameLower: 0
      }
    );
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
