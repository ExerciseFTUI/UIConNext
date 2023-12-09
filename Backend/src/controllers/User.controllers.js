const userServices = require("../services/User.services");

exports.uploadImage = async function (req, res) {
    try {
      const result = await userServices.uploadImage(req.files, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ message: err.message, result: null });
    }
}
