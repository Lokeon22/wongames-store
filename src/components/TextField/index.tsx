import { InputHTMLAttributes, useState } from "react"

import * as S from "./styles"

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  labelColors?: "white" | "black"
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor,
  labelColors = "white",
  initialValue = "",
  onInput,
  icon,

  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      {label && (
        <S.Label labelColors={labelColors} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
      <S.InputWrapper>
        {!!icon && icon}
        <S.Input type="text" value={value} onChange={onChange} {...props} />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
