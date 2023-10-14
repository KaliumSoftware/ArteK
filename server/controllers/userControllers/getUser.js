import { User } from '../../models/user';

const getUser = async (newUser) => {
  try {
    const a = 1;
  } catch (error) {
    return error.message;
  }
};

module.exports = getUser;
