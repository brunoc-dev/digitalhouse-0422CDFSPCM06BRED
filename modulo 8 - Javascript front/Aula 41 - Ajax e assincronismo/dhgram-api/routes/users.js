var express = require('express');
var router = express.Router();

const apiUserController = require("../controllers/userController");

router.get("/", apiUserController.index);

router.post("/", apiUserController.store);

module.exports = router;
