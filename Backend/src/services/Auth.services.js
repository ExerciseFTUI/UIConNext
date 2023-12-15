const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User.models");

// let refreshTokens = [];

// function generateAccessToken(user) {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: process.env.ACCESS_TOKEN_LIFE,
//   });
// }

// exports.refreshTokens = async function (body) {
//   const { refresh_token } = body;

//   if (!refreshTokens.includes(refresh_token)) {
//     return { message: "No refresh token found" };
//   }

//   let accessToken = "";
//   let error = false;
//   jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//     if (err) error = true;
//     accessToken = generateAccessToken({ username: user });
//   });
//   if (error) {
//     return { message: "Invalid refresh token" };
//   }
//   return { accessToken: accessToken };
// };

exports.getUser = async function (body) {
  const {} = body;
  const result = await User.findById(clerk_id);
  if (!result) {
    return { message: "User not found", result: null };
  }
  return { message: "User found", result };
};

exports.register = async function (body) {
  const { ...user } = body;
  if (!user.clerk_id || !user.name || !user.username || !user.email) {
    throw new Error(
      "Please fill all the fields: clerk_id, name, username, email"
    );
  }
  const unique_username = await User.findOne({ username: user.username });
  if (unique_username) {
    throw new Error("Username already exists");
  }
  const unique_email = await User.findOne({ email: user.email });
  if (unique_email) {
    throw new Error("Email already exists");
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
    throw new Error("User not found");
  }

  const passwordCheck = await bcrypt.compare(password, user.password);
  if (!passwordCheck) {
    throw new Error("Password is not correct");
  }

  return { message: "Login successful", result: user };
};

// exports.logout = async function (body) {
//   const { refresh_token } = body;
//   if (!refreshTokens.includes(refresh_token)) {
//     return { message: "No refresh token found" };
//   }
//   refreshTokens = refreshTokens.filter((token) => token !== refresh_token);
//   return { message: "Logout successful" };
// };
