"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

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
  const routes = useRouter()

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

    // sign in
    const result = await signIn("credentials", {
      ...values,
      redirect: false,
      callbackUrl: "/"
    })

    if (result?.url) {
      return routes.push(result?.url)
    }

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
          name="email"
          placeholder="Email"
          type="email"
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
