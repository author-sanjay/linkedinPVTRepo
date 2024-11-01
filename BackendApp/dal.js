const { PrismaClient } = require("@prisma/client");
const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "testdb",
// });
const prisma = new PrismaClient();
// const connectToDB = () => {
//   connection.connect((err) => {
//     if (err) {
//       console.log(err);
//       return false;
//     }
//     console.log("Connection established");
//     return true;
//   });
//   createTables();
// };

// const createTables = () => {
//   const createUsersTableQuery = `
//    CREATE TABLE IF NOT EXISTS users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) UNIQUE NOT NULL,
//   password VARCHAR(500) NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// );

//   `;

//   const createPostsTableQuery = `
//     CREATE TABLE IF NOT EXISTS posts (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       user_id INT NOT NULL,
//       title VARCHAR(255) NOT NULL,
//       body TEXT NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
//       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//     )
//   `;

//   const tables = [createUsersTableQuery, createPostsTableQuery];
//   tables.map((table) => {
//     executeCreateTableCommand(table);
//   });
// };

// const executeCreateTableCommand = (query) => {
//  return new Promise((resolve, reject) => {
//    connection.query(query, (err, results) => {
//      if (err) {
//        console.error("Error creating posts table: " + err.stack);
//        reject(err);
//      } else {
//        resolve(results);
//      }
//    });
//  });
// };

const upsertUsers = async (user) => {
  try {
    const upsertedUser = await prisma.user.upsert({
      where: { email: user.email },
      update: {
        name: user.name,
        password: user.password,
        country: user.country || null,
        city: user.city || null,
        address: user.address || null,
      },
      create: {
        name: user.name,
        email: user.email,
        password: user.password,
        country: user.country || null,
        city: user.city || null,
        address: user.address || null,
      },
    });
    return upsertedUser;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

const getExistingUsersWithEmail = async (email)=>{
  try {
    const users= await prisma.user.findMany({where: {email: email}})
    return users;
  }catch(err) {throw new Error(err.message);}
}

module.exports = {
  // connectToDB,
  // executeCreateTableCommand
  upsertUsers,
  getExistingUsersWithEmail,
};
