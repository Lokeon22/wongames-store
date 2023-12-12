import * as S from "./styles"

export const Main = ({
  title = "React Avançado",
  description = "Typescript, ReactJS, NextJS e Styled Components"
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)
