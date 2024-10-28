const { executeCreateTableCommand } = require("../dal");
const mysql = require("mysql2");

const upsertUser = async (body) => {
  const columns = Object.keys(body).join(", ");
  const values = Object.values(body)
    .map((value) => mysql.escape(value))
    .join(", ");

  const updates = Object.keys(body)
    .map((key) => `${key} = VALUES(${key})`)
    .join(", ");

  const query = `
    INSERT INTO users (${columns}) 
    VALUES (${values}) 
    ON DUPLICATE KEY UPDATE ${updates};
  `;

  executeCreateTableCommand(query)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  upsertUser,
};
