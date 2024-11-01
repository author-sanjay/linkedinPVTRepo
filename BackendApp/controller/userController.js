const express = require("express");
const userManager = require("../manger/userManager");

const router = express.Router();

router.post("/addUser", async (req, res) => {
  try {
    const userBody = req.body;
    const saveUser = await userManager.upsertUser(userBody);
    res.status(200).json(saveUser);
  } catch (err) {
    res.status(500).json({ "Error Processing Data ": err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const userBody = req.body;
    const saveUser = await userManager.loginUser(userBody);
    res.status(200).json(saveUser);
  } catch (err) {
    res.status(500).json({ "Error Processing Data ": err.message });
  }
});

module.exports = router;
