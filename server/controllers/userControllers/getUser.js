import { User } from '../../models/user';

const getUser = async (newUser) => {
  try {
    const consumer = await Consumer.findOne(
      { userUid: userUid },
      {
        password: 0,
        usernameLower: 0
      }
    );
    return consumer ? consumer : false;
  } catch (error) {
    return false;
  }
};

module.exports = getUser;
