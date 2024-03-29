"use client"
import { useState } from "react"
import { Lock, ErrorOutline } from "@styled-icons/material-outlined"

import Button from "../Button"
import TextField from "../TextField"

import * as S from "./style"
import * as Sign from "../FormSignIn/styles"

import { FieldErros, resetValidate } from "../../utils/validations"

const FormResetPassword = () => {
  const [formError, setFormError] = useState("")
  const [fieldError, setFieldError] = useState<FieldErros>({})
  const [values, setValues] = useState({ password: "", confirm_password: "" })
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = resetValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    setLoading(false)

    setFormError("username or password is invalid")
  }

  return (
    <S.Wrapper>
      {!!formError && (
        <Sign.FormError>
          <ErrorOutline /> {formError}
        </Sign.FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput("password", v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput("confirm_password", v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <Sign.FormLoading /> : <span>Reset password</span>}
        </Button>
      </form>
    </S.Wrapper>
  )
}

export default FormResetPassword
