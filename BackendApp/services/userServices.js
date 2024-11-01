const dal = require("../dal");
const validateEmail = async (email, id) => {
  const existingUsers = await dal.getExistingUsersWithEmail(email);
  if (existingUsers.length > 0 && !id) {
    throw new Error("000504: Email already exists");
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new Error("000503: Invalid email address");
    }
  }
};

module.exports = {
  validateEmail,
};
