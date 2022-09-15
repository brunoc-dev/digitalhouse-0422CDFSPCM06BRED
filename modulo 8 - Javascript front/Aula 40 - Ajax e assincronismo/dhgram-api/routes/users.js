var express = require('express');
var router = express.Router();

const apiUserController = require("../controllers/userController");

router.get("/", (req, res) => {
  return res.status(200).json({
    status: "Api em funcionamento"
  });
});
router.post("/", apiUserController.store);

module.exports = router;
