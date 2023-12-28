import React, { InputHTMLAttributes } from "react"
import * as S from "./styles"

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void
  label?: string
  labelFor?: string
  labelColors?: "white" | "black"
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  label,
  onCheck,
  labelFor,
  labelColors = "white",
  value,
  ...props
}: RadioProps) => {
  function onChange() {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Radio
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {label && (
        <S.Label labelColors={labelColors} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
