const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require("../models/User.models");

let refreshTokens = [];

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_LIFE,
  });
}

exports.refreshTokens = async function (body) {
  const { refresh_token } = body;

  if (!refreshTokens.includes(refresh_token)) {
    return { message: "No refresh token found" };
  }

  let accessToken = "";
  let error = false;
  jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) error = true;
    accessToken = generateAccessToken({ username: user });
  });
  if (error) {
    return { message: "Invalid refresh token" };
  }
  return { accessToken: accessToken };
};

exports.getUser = async function (body) {
  const { _id } = body;
  const result = await User.findById(_id);
  if (!result) {
    return { message: "User not found", result: null };
  }
  return { message: "User found", result };
};

exports.register = async function (body) {
  const { ...user } = body;
  if (!user.name || !user.username || !user.email) {
    return new Error("Please fill all the fields");
  }
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  const result = new User({
    ...user,
  });
  await result.save();
  return { message: "User created", result };
};

exports.login = async function (body) {
  const { email, password } = body;
  const user = await User.findOne({ email });
  if (!user) {
    return new Error("User not found");
  }

  const passwordCheck = await bcrypt.compare(password, user.password);
  if (!passwordCheck) {
    return new Error("Password is not correct");
  }

  return { message: "Login successful", result: user };
};

exports.logout = async function (body) {
  const { refresh_token } = body;
  if (!refreshTokens.includes(refresh_token)) {
    return { message: "No refresh token found" };
  }
  refreshTokens = refreshTokens.filter((token) => token !== refresh_token);
  return { message: "Logout successful" };
};
