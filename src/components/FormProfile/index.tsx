"use client"
import { useSession } from "next-auth/react"
import * as S from "./styles"

import Heading from "../Heading"
import TextField from "../TextField"
import Button from "../Button"

const FormProfile = () => {
  const { data: session } = useSession()

  return (
    <S.Wrapper>
      <Heading lineLeft color="black" size="small">
        My profile
      </Heading>

      <S.Form>
        <TextField
          name="name"
          placeholder="Name"
          label="Name"
          initialValue={session?.user.username}
        />

        <TextField
          name="email"
          type="email"
          placeholder={session?.user.email}
          label="E-mail"
          disabled
        />

        <TextField
          name="password"
          type="password"
          placeholder="Type your password"
          label="Password"
          disabled
        />

        <TextField
          name="new-password"
          type="password"
          placeholder="New password"
          label="New password"
          initialValue="jhondoe@gmail.com"
          disabled
        />

        <Button size="large">Save</Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default FormProfile
