"use client"
import { useSession } from "next-auth/react"
import * as S from "./styles"

import Heading from "../Heading"
import TextField from "../TextField"
import Button from "../Button"
import { FormEvent } from "react"

const FormProfile = () => {
  const { data: session } = useSession()

  const handleSub = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <S.Wrapper>
      <Heading lineLeft color="black" size="small">
        My profile
      </Heading>

      <S.Form onSubmit={handleSub}>
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

        <Button type="button" size="large">
          Save
        </Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default FormProfile
