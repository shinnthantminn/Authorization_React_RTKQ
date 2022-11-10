const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  encode: (payload) => bcrypt.hashSync(payload, 10),
  compare: (plane, payload) => bcrypt.compareSync(plane, payload),
  token: (payload) =>
    jwt.sign(payload, process.env.JWT_SKEY, {
      expiresIn: "1h",
    }),
  verify: (payload) =>
    jwt.verify(payload, process.env.JWT_SKEY, (err, result) => {
      if (err) {
        throw new Error(err.message);
      } else {
        return result;
      }
    }),
};
