type RegisterAttributes = {
  jwt: string | null
}

type RegisterData = {
  register: RegisterAttributes
}

export type RegisterResponse = {
  data: RegisterData
}
