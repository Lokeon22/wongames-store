"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useMutation } from "@apollo/client"
import { MUTATION_REGISTER } from "../../graphql/mutations/register"
import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined"
import Link from "next/link"

import TextField from "../TextField"
import Button from "../Button"

import * as S from "./styles"
import * as Sign from "../FormSignIn/styles"

type UserPermissions = {
  username: string
  email: string
  password: string
}

const FormSignUp = () => {
  const [values, setValues] = useState<UserPermissions>({
    username: "",
    email: "",
    password: ""
  })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) => console.log(err),
    onCompleted: () => {
      !error &&
        signIn("credentials", {
          email: values.email,
          password: values.password,
          callbackUrl: "/"
        })
    }
  })

  const handleInput = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          onInputChange={(v) => handleInput("username", v)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput("email", v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput("password", v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          onInputChange={(v) => handleInput("confirm-password", v)}
          icon={<Lock />}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <Sign.FormLoading /> : <span>Sign up now</span>}
        </Button>
        <S.FormLink>
          Already have an account?
          <Link href="/signin"> Sign In</Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  )
}

export default FormSignUp
