import { InputHTMLAttributes, useState } from "react"

import * as S from "./styles"

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  labelFor?: string
  labelColors?: "white" | "black"
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor,
  labelColors = "white",
  initialValue = "",
  onInputChange,
  icon,
  iconPosition = "left",
  disabled = false,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={error}>
      {label && (
        <S.Label labelColors={labelColors} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
      <S.InputWrapper iconPosition={iconPosition}>
        {!!icon && icon}
        <S.Input
          type="text"
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <span>{error}</span>}
    </S.Wrapper>
  )
}

export default TextField
