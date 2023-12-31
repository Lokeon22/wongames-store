import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import * as S from "./styles"

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  minimal?: boolean
  icon?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = "medium",
  fullWidth = false,
  minimal = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    minimal={minimal}
    hasIcon={!!icon}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
