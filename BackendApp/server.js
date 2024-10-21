const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const userRoutes = require("./controller/userController");
app.use(express.json());
app.use("/user", userRoutes);


app.listen(port, () => {
  console.log(`Backend UP on Port ${port}`);
});
