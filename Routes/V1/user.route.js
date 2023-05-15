//this is user route
const express = require("express");
const userController = require("../../Controllers/user.controller");

const router = express.Router();

router.post("/", userController.signup);

router
  .route("/:email")
  .get(userController.getUser)
  .put(userController.updateUser);

module.exports = router;
