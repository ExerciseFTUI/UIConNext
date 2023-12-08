const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./src/config/db");
const cd = require("./src/config/cloudinary.config");
const authRoutes = require("./src/routes/Auth.routes");
const postsRoutes = require("./src/routes/Posts.routes");

const app = express();
dotenv.config();
db.connectDB();
cd.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CORS_ORIGINS.split(", "),
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Routes used in the app
app.use("/auth", authRoutes);
app.use( "/posts", postsRoutes);

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});
