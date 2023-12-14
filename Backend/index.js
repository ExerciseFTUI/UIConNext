const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./src/config/db");
const authRoutes = require("./src/routes/Auth.routes");
const postRoutes = require("./src/routes/Posts.routes");

const app = express();
dotenv.config();
db.connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CORS_ORIGINS,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Routes used in the app
app.use("/auth", authRoutes);
app.use("/post", postRoutes);

const tweets = [
  {
    id: "t0",
    user: {
      id: "u1",
      username: "VadimNotJustDev",
      name: "Vadim",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content: "Can you please check if the Subscribe button on Youtube works?",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/thumbnail.png",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
    category: "found",
  },
  {
    id: "111111111",
    createdAt: "2023-04-28T08:30:00.000Z",
    user: {
      id: "123456789",
      name: "Jeff B",
      username: "bezos",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg",
    },
    content:
      "Just had a great workout at the gym! 💪 #fitness #healthylifestyle",
    category: "lost",
  },
  {
    id: "222222222",
    createdAt: "2023-04-27T19:45:00.000Z",
    user: {
      id: "987654321",
      name: "Zuck",
      username: "zuck",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
    },
    content: "Had an amazing surf session this morning",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/8.jpg",
    numberOfComments: 10,
    numberOfRetweets: 20,
    numberOfLikes: 100,
    impressions: 1000,
    category: "parking",
  },
  {
    id: "333333333",
    createdAt: "2023-04-26T12:00:00.000Z",
    user: {
      id: "123456789",
      name: "Jane Smith",
      username: "janesmith",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png",
    },
    content:
      "Excited to announce that I will be speaking at the upcoming tech conference in San Francisco! 🎉 #womenintech",
    numberOfComments: 5,
    numberOfRetweets: 10,
    numberOfLikes: 50,
    impressions: 1000,
    category: "tweet",
  },
  {
    id: "t1",
    user: {
      id: "u1",
      username: "VadimNotJustDev",
      name: "Vadim",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
    category: "parking",
  },
  {
    id: "t2",
    user: {
      id: "u1",
      username: "VadimNotJustDev",
      name: "Vadim",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
    category: "found",
  },
  {
    id: "t3",
    user: {
      id: "u1",
      username: "VadimNotJustDev",
      name: "Vadim",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content: "Hello World",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
    category: "lost",
  },
  {
    id: "t4",
    user: {
      id: "u1",
      username: "VadimNotJustDev",
      name: "Vadim",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
    category: "tweet",
  },
];

app.get("/test", (req, res) => {
  res.json(tweets);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
