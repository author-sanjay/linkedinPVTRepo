const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mysql = require("mysql2");

const userRoutes = require("./controller/userController");
const { connectToDB } = require("./dal");
const { PrismaClient } = require("@prisma/client");
app.use(express.json());
const prisma = new PrismaClient();
app.use("/user", userRoutes);
app.post("/prismaUser", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post("/post", async (req, res) => {
  const { userId, content } = req.body;

  try {
    const post = await prisma.post.create({
      data: {
        content,
        author: userId, 
      },
    });

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  if (connectToDB()) {
    console.log("Connection Established");
  } else {
    console.log("Error: Connection Failed");
  }
  console.log(`Backend UP on Port ${port}`);
});
