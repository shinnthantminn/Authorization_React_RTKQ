const DB = require("../model/user.model");
const { fMsg } = require("terry-helper");
const { compare, encode, token, verify } = require("../ulti/helper");

const register = async (req, res, next) => {
  try {
    req.body.password = encode(req.body.password);
    const newUser = await new DB(req.body).save();
    const user = newUser.toObject();
    delete user.password;
    fMsg(res, true, 201, "register complete", user);
  } catch (e) {
    next(new Error(e));
  }
};

const login = async (req, res, next) => {
  try {
    const finder = await DB.findOne({ email: req.body.email });
    if (finder) {
      if (compare(req.body.password, finder.password)) {
        const tokenization = token({ id: finder._id });
        const user = finder.toObject();
        delete user.password;
        user.token = tokenization;
        fMsg(res, true, 200, "login complete", user);
      } else {
        fMsg(res, false, 404, "email or password credential error");
      }
    } else {
      fMsg(res, false, 404, "email or password credential error");
    }
  } catch (e) {
    next(new Error(e.message));
  }
};

const selfGet = async (req, res, next) => {
  try {
    const finder = await DB.findById(req.user._id);
    if (finder) {
      const user = finder.toObject();
      delete user.password;
      fMsg(res, true, 200, "User found", user);
    } else {
      fMsg(res, false, 404, "user not found");
    }
  } catch (e) {
    next(new Error(e.message));
  }
};

module.exports = {
  register,
  login,
  selfGet,
};
