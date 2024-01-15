import { Auth as SigninContent } from "../../templates/Auth"

import FormResetPassword from "../../components/FormResetPassword"

export default function ResetPassword() {
  return (
    <SigninContent title="Request new password">
      <FormResetPassword />
    </SigninContent>
  )
}
