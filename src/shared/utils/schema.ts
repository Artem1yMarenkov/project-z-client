// schema.js

import * as yup from "yup";

const regSchema = yup.object().shape({
  email: yup.string().required().email(),
  login: yup.string().required(),
});

const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export { regSchema, loginSchema };
