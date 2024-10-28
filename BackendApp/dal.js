const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "testdb",
});

const connectToDB = () => {
  connection.connect((err) => {
    if (err) {
      console.log(err);
      return false;
    }
    console.log("Connection established");
    return true;
  });
  createTables();
};

const createTables = () => {
  const createUsersTableQuery = `
   CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(500) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

  `;

  const createPostsTableQuery = `
    CREATE TABLE IF NOT EXISTS posts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      title VARCHAR(255) NOT NULL,
      body TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;

  const tables = [createUsersTableQuery, createPostsTableQuery];
  tables.map((table) => {
    executeCreateTableCommand(table);
  });
};

const executeCreateTableCommand = (query) => {
 return new Promise((resolve, reject) => {
   connection.query(query, (err, results) => {
     if (err) {
       console.error("Error creating posts table: " + err.stack);
       reject(err);
     } else {
       resolve(results);
     }
   });
 });
};








module.exports = {
  connectToDB,
  executeCreateTableCommand
};
