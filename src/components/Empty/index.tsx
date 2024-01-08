"use client"
import * as S from "./styles"

import Link from "next/link"
import Button from "../Button"

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image src="/img/empty.svg" alt="a gamer in a couch playing" />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    {hasLink && (
      <Link href="/">
        <Button>Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
