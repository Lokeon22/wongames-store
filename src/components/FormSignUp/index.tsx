"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useMutation } from "@apollo/client"
import { MUTATION_REGISTER } from "../../graphql/mutations/register"
import {
  AccountCircle,
  Email,
  Lock,
  ErrorOutline
} from "@styled-icons/material-outlined"

import { signUpValidate } from "../../utils/validations"
import { FieldErros } from "../../utils/validations"

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
  const [formError, setFormError] = useState("")
  const [fieldError, setFieldError] = useState<FieldErros>({})

  const [values, setValues] = useState<UserPermissions>({
    username: "",
    email: "",
    password: ""
  })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) => {
      if (err?.graphQLErrors)
        return setFormError("Email is alredy taken or password incorrect")
    },
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
    setFormError("")

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

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
      {!!formError && (
        <Sign.FormError>
          <ErrorOutline />
          {formError}
        </Sign.FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          error={fieldError?.username}
          onInputChange={(v) => handleInput("username", v)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput("email", v)}
          icon={<Email />}
        />
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
