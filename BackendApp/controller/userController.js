const express = require("express");

const router = express.Router();

router.get("/singleUser", (req, res) => {
  //Call manager to get user Details
  res.status(200).send("hi");
});

router.get("/singleUserById/:id", (req, res) => {
  const id = req.params.id;
  console.log(id, "params");
  res.status(200).send(id);
});

router.get("/singleUserByIdinQuery", (req, res) => {
  const id = req.query.id;
  console.log(id);
  res.status(200).send(id);
});
router.post("/addUser", (req, res) => {
  //Call manager to add user Details in Database
  res.status(200).json({});
});


module.exports = router;