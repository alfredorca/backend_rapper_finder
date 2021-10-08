const bcrypt = require("bcrypt");
const { generateJwt } = require("../middlewares/processJwt");

const User = require("../Models/User");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  try {
    if (users.length === 0) {
      return res.status(400).json(users);
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Could not retrieve users." });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  try {
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Could not retrieve user by ID." });
  }
};

const signUpUser = async (req, res) => {
  const { email } = req.body;
  const testEmail = await User.findOne({ email });
  if (testEmail)
    return res.status(500).json({ message: "Invalid Credentials" });
  const user = new User(req.body);
  try {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(req.body.password, salt);
    user.save();
    const token = await generateJwt(user._id)
    return res.status(201).json({user, token});
  } catch (error) {
    return res.status(500).json({ message: "Could not register the user" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.status(500).json({ message: "Please check credentials" });
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword)
    return res.status(500).json({ message: "Please check credentials" });
  const token = await generateJwt(user._id);
  return res.status(200).json({ user, token });
};

module.exports = {
  getAllUsers,
  getUserById,
  loginUser,
  signUpUser,
};
