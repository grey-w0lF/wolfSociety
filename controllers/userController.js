const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//@desc Register A New User
//@route POST /api/users/register
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, dob, admin, gender, phoneNo, cardId } =
    req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Fields Are Required");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already Exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    dob,
    admin,
    gender,
    password: hashedPassword,
    phoneNo,
    cardId,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

//@desc Login A User
//@route POST /api/users/login
//@access Private

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

//@desc Get Users
//@route Get /api/users/all
//@access Public

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  if (users) {
    res.json(users);
  }
});

//@desc Get User
//@route POST /api/users/me
//@access Private

const getMe = asyncHandler((req, res) => {
  res.json({ message: "Done" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
};
