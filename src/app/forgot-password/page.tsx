import { Auth as SigninContent } from "../../templates/Auth"

import FormForgotPassword from "../../components/FormForgetPassword"

export default function ForgotPassword() {
  return (
    <SigninContent title="Request new password">
      <FormForgotPassword />
    </SigninContent>
  )
}
