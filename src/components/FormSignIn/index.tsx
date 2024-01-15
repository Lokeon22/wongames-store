"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import {
  Email as EmailIcon,
  Lock as PasswordIcon,
  ErrorOutline
} from "@styled-icons/material-outlined"
import { FieldErros, signInValidate } from "../../utils/validations"

import * as S from "./styles"

import TextField from "../TextField"
import Button from "../Button"
import Link from "next/link"

type UserPermissionsLogin = {
  email: string
  password: string
}

const FormSignIn = () => {
  const router = useRouter()

  const [formError, setFormError] = useState("")
  const [fieldError, setFieldError] = useState<FieldErros>({})

  const [values, setValues] = useState<UserPermissionsLogin>({
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    const result = await signIn("credentials", {
      ...values,
      redirect: false,
      callbackUrl: "/"
    })

    if (result?.url) {
      return router.push(result.url)
    }

    setLoading(false)

    setFormError("username or password is invalid")
  }

  return (
    <S.Wrapper>
      {!!formError && (
        <S.FormError>
          <ErrorOutline />
          {formError}
        </S.FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput("email", v)}
          icon={<EmailIcon />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput("password", v)}
          icon={<PasswordIcon />}
        />
        <Link href="/forgot-password">
          <S.ForgetPassword>Forgot your password?</S.ForgetPassword>
        </Link>

        <Button size="large" fullWidth disabled={loading}>
          {loading ? <S.FormLoading /> : <span>Sign in now</span>}
        </Button>
        <S.FormLink>
          Dont have an account? <Link href="/signup">Sign up</Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  )
}

export default FormSignIn
