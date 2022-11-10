const router = require("express").Router();
const controller = require("../controller/user.controller");
const {
  validateBody,
  validateUnique,
  validateToken,
} = require("../ulti/validator");
const { user } = require("../ulti/joiValidator");
const userDB = require("../model/user.model");

router.post(
  "/register",
  validateBody(user.body.register),
  validateUnique(userDB, "email"),
  controller.register
);

router.post("/login", validateBody(user.body.login), controller.login);

router.get("/me", validateToken(), controller.selfGet);

module.exports = router;
