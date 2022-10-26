const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/all", getAllUsers);
router.get("/user/:cardId", getUser);
module.exports = router;
