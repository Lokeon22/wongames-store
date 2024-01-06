import * as S from "./styles"

import Heading from "../Heading"
import TextField from "../TextField"
import Button from "../Button"

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineLeft color="black">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="Jhon Doe"
      />

      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
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

export default FormProfile
