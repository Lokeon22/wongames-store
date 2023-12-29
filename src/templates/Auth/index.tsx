"use client"
import * as S from "./style"

import Logo from "../../components/Logo"
import Heading from "../../components/Heading"

type AuthProps = {
  title: string
  children: React.ReactNode
}

export function Auth({ title, children }: AuthProps) {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <Logo id="banner" size="normal" />

        <div className="content">
          <Heading size="huge">
            All your favorite games <br /> in one place
          </Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete <br /> gaming
            plataform.
          </S.Subtitle>
        </div>

        <S.Footer>Won Games 2023 © Todos os Direitos Reservados</S.Footer>
      </S.BannerBlock>

      <S.FormContainer>
        <S.FormWrapper>
          <Logo id="form" size="large" color="black" />
          <Heading lineLeft lineColor="secondary" size="medium" color="black">
            {title}
          </Heading>

          {children}
        </S.FormWrapper>
      </S.FormContainer>
    </S.Wrapper>
  )
}
