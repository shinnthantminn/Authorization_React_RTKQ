const joi = require("joi");

module.exports = {
  user: {
    body: {
      register: joi.object({
        username: joi.string().required().min(3),
        email: joi.string().email().required(),
        password: joi.string().required().min(3),
      }),
      login: joi.object({
        email: joi.string().required().email(),
        password: joi.string().required(),
      }),
    },
  },
};
