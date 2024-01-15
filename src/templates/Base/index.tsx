"use client"
import { useSession } from "next-auth/react"
import * as S from "./style"

import { Container } from "../../components/Container"
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"

type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const { data: session } = useSession()

  return (
    <S.Wrapper>
      <Container>
        <Menu username={session?.user.username} />
      </Container>

      <S.Content>{children}</S.Content>

      <S.FooterBg>
        <Container>
          <Footer />
        </Container>
      </S.FooterBg>
    </S.Wrapper>
  )
}

export default Base
