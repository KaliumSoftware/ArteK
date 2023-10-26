import { User } from '../../models/user';

const postUser = async (newUser) => {
  try {
    const emailRepeated = await User.findOne({
      email: newUser.email
    });
    if (emailRepeated) {
      throw new Error('Ya existe ese email');
    } else {
      await User.create(newUser);
    }
    return {
      message: 'Usuario creado'
    };
  } catch (error) {
    return error.message;
  }
};
module.exports = postUser;
