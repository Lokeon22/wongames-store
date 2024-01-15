"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import * as S from "./styles"
import {
  Email as EmailIcon,
  Lock as PasswordIcon
} from "@styled-icons/material-outlined"

import TextField from "../TextField"
import Button from "../Button"
import Link from "next/link"

type UserPermissionsLogin = {
  email: string
  password: string
}

const FormSignIn = () => {
  const router = useRouter()

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

    const result = await signIn("credentials", {
      ...values,
      redirect: false,
      callbackUrl: "/"
    })

    if (result?.url) {
      return router.push(result.url)
    }

    setLoading(false)

    console.error("email ou senha invalida")
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput("email", v)}
          icon={<EmailIcon />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput("password", v)}
          icon={<PasswordIcon />}
        />
        <S.ForgetPassword href="#">Forgot your password?</S.ForgetPassword>
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
