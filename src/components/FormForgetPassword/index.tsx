"use client"
import { useState } from "react"
import { Email, ErrorOutline } from "@styled-icons/material-outlined"

import Button from "../Button"
import TextField from "../TextField"

import * as S from "./style"
import * as Sign from "../FormSignIn/styles"

import { FieldErros, forgotValidate } from "../../utils/validations"

const FormForgotPassword = () => {
  const [formError, setFormError] = useState("")
  const [fieldError, setFieldError] = useState<FieldErros>({})
  const [values, setValues] = useState({ email: "" })
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const response = await fetch(
      //here gmail http error 505cms
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      }
    )

    const data = await response.json()
    setLoading(false)

    if (data.error) {
      console.log("Error ", data)
      setFormError("Change your password in your account/profile")
    } else {
      console.log("Now change your password in your account/profile")
    }
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
          name="email"
          placeholder="Email"
          type="text"
          error={fieldError?.email}
          onInputChange={(v) => handleInput("email", v)}
          icon={<Email />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <Sign.FormLoading /> : <span>Send email</span>}
        </Button>
      </form>
    </S.Wrapper>
  )
}

export default FormForgotPassword
