"use client"
import * as S from "./style"

import { Container } from "../../components/Container"
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"

type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>

    <S.Content>{children}</S.Content>

    <S.FooterBg>
      <Container>
        <Footer />
      </Container>
    </S.FooterBg>
  </S.Wrapper>
)

export default Base
