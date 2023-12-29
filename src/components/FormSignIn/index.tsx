"use client"
import * as S from "./styles"
import {
  Email as EmailIcon,
  Lock as PasswordIcon
} from "@styled-icons/material-outlined"

import TextField from "../TextField"
import Button from "../Button"
import Link from "next/link"

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<EmailIcon />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<PasswordIcon />}
      />
      <S.ForgetPassword href="#">Forgot your password?</S.ForgetPassword>
      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <S.FormLink>
        Dont have an account? <Link href="/signup">Sign up</Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
