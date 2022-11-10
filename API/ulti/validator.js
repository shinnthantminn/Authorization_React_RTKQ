const { fMsg } = require("terry-helper");
const userDB = require("../model/user.model");
const { verify } = require("../ulti/helper");

module.exports = {
  validateBody: (schema) => {
    return async (req, res, next) => {
      console.log(req.body);
      const result = await schema.validate(req.body);
      if (result.error) {
        fMsg(res, false, 422, result.error.details[0].message);
      } else next();
    };
  },
  validateUnique: (db, ...name) => {
    return async (req, res, next) => {
      const num = [];
      for (const x of name) {
        const obj = {};
        obj[name] = req.body[name];
        const finder = await db.findOne(obj);
        num.push(name);
        if (finder) {
          fMsg(res, false, 422, `this ${name} was existing in our server`);
        } else {
          next();
        }
      }
    };
  },
  validateToken: () => {
    return async (req, res, next) => {
      if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
          try {
            const decode = verify(token);
            const finder = await userDB.findById(decode.id);
            if (finder) {
              const user = finder.toObject();
              delete user.password;
              req.user = user;
              next();
            } else {
              fMsg(res, false, 498, "Tokenization Error");
            }
          } catch (e) {
            fMsg(res, false, 401, e.message);
          }
        }
      } else {
        fMsg(res, false, 498, "Tokenization Error");
      }
    };
  },
};
