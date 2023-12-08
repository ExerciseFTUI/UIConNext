const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
        cb(null, "uploads/");
      } else {
        cb({ message: "this file is not an image file" }, false);
      }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

exports.uploadFiles = multer({ storage: storage }).array("image", 10);
