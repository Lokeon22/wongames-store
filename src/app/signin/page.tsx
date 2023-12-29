import { Auth as SigninContent } from "../../templates/Auth"

import FormSignin from "../../components/FormSignIn"

export default function Signin() {
  return (
    <SigninContent title="Sign In">
      <FormSignin />
    </SigninContent>
  )
}
