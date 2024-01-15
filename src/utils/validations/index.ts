import Joi from "joi"

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),

  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({ "any.only": "confirm password does not match with password" })
}

export type FieldErros = {
  [key: string]: string
}

function getFieldErrors(objectError: Joi.ValidationResult) {
  const errors: FieldErros = {}

  if (objectError.error) {
    objectError.error.details.forEach((err) => {
      errors[err.path.join(".")] = err.message
    })
  }

  return errors
}

type signUpValues = {
  username: string
} & signInValues

export function signUpValidate(values: signUpValues) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type signInValues = {
  email: string
  password: string
}

export function signInValidate(values: signInValues) {
  const { email, password } = fieldsValidations

  const schema = Joi.object({ email, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type forgotValidateParams = {
  email: string
}
export function forgotValidate(values: forgotValidateParams) {
  const { email } = fieldsValidations
  const schema = Joi.object({ email })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type resetValidateParams = {
  password: string
  confirm_password: string
}
export function resetValidate(values: resetValidateParams) {
  const { password, confirm_password } = fieldsValidations
  const schema = Joi.object({ password, confirm_password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
