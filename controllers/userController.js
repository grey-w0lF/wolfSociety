const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const genToken = require("../generateToken");
const bcrypt = require("bcryptjs");

//@desc Register A New User
//@route POST /api/users/register
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, dob, admin, gender, phoneNo, cardId } =
    req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "These Are required Fields" });
  }

  const userExists = await User.findOne({ $or: [{ email }, { cardId }] });
  if (userExists) {
    res.status(400).json({ message: "User Already Exist" });
  } else {
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
      res.status(400).json({ message: "Invalid data" });
    }
  }
});

//@desc Login A User
//@route POST /api/users/login
//@access Private

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    if (user.admin) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: genToken.genToken(user.id),
      });
    } else {
      res.status(400).json({ message: "Only Admins Can Sign in" });
    }
  } else {
    res.status(400).json({ message: "Invalid Credentials" });
  }
});

//@desc Get Users
//@route Get /api/users/all
//@access Public

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  if (users) {
    res.json(users);
  } else {
    res.status(400).json({ message: "Something went Wrong" });
  }
});

//@desc Get User
//@route POST /api/users/user/details/cardid
//@access Private

const getUser = asyncHandler(async (req, res) => {
  const cardId = req.params.cardid;

  const user = await User.findOne({ cardId });
  if (user && user.email == req.body.email) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
});

//@desc Remove User
//@route Delete /api/user/remove
//@acess private

const removeUser = asyncHandler(async (req, res) => {
  const cardId = req.params.cardid;
  const email = req.body.email;

  const user = await User.findOne({ cardId });
  if (user && user.email == req.body.email) {
    await User.findOneAndRemove({ cardId });
    res.json({ message: "User Removed Successfully" });
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
});

module.exports = {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
  removeUser,
};
