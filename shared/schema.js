const joi = require("joi");

const schema = {
  mentorSchema: joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    course: joi.string().required(),
  }),
  studentSchema: joi.object({
    name: joi.string().required(),
  }),
};
module.exports = schema;