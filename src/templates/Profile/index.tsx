"use client"
import { usePathname } from "next/navigation"
import * as S from "./styles"

import Base from "../Base"
import Heading from "../../components/Heading"
import ProfileMenu from "../../components/ProfileMenu"

import { Container } from "../../components/Container"

export type ProfileTemplateProps = {
  children: React.ReactNode
}

export const Profile = ({ children }: ProfileTemplateProps) => {
  const pathname = usePathname()

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <Heading lineLeft lineColor="secondary">
            My profile
          </Heading>
        </S.Wrapper>

        <S.Main>
          <ProfileMenu activeLink={pathname} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}
