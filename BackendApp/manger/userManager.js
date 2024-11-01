const mysql = require("mysql2");
const dal = require("../dal");
const argon2 = require("argon2");
const { validateEmail } = require("../services/userServices");

const upsertUser = async (body) => {
  try {
    if (body.id) {
      delete body.password;
    } else {
      const hashedPassword = await argon2.hash(body.password);
      body.password = hashedPassword;
    }
    const validEmail = await validateEmail(body.email, id);
    const savedUser = await dal.upsertUsers(body);
    delete savedUser.id;
    delete savedUser.password;
    delete savedUser.jobDoingId;
    return savedUser;
  } catch (err) {
    throw err;
  }
};

const loginUser = async function (user) {
  try {
    const email = user.email;
    const password = user.password;
    const savedUser = await dal.getExistingUsersWithEmail(email);
    if (!savedUser) {
      throw new Error("000404: User Not Found");
    }
    if (savedUser.length > 1) {
      throw new Error("000904: Access Denied. Account Compromised");
    } else {
      const firstUser = savedUser[0];
      const hashedIncomingPassword = await argon2.hash(password);
      if (hashedIncomingPassword != firstUser.password) {
        throw new Error("000403: Access Denied");
      } else {
        delete firstUser.id;
        delete firstUser.jobDoingId;
        delete firstUser.password;
        //We dont want to give this object we generally return a jwt token that can be used for login
        return firstUser;
      }
    }
  } catch (e) {
    throw e;
  }
};

module.exports = {
  upsertUser,
  loginUser,
};
