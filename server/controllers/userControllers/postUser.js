import { User } from '../../models/user';

const postUser = async (newUser) => {
  try {
    const usernameRepeated = await User.findOne({
      usernameLower: newUser.usernameLower
    });
    const emailRepeated = await User.findOne({
      email: newUser.email
    });
    if (emailRepeated) throw new Error('emailRepetido');
    if (usernameRepeated) throw new Error('usernameRepetido');

    await User.create(newUser);
    return true;
  } catch (error) {
    return error.message;
  }
};

module.exports = postUser;
