const express = require("express");
const protect = require("../generateToken");

const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
  removeUser,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/all", protect.protect, getAllUsers);
router.get("/user/details/:cardid", protect.protect, getUser);
router.delete("/user/remove/:cardid", protect.protect, removeUser);
module.exports = router;
