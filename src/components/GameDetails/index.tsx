import { Linux, Windows, Apple } from "@styled-icons/fa-brands"
import * as S from "./styles"

import Heading from "../Heading"
import MediaMatch from "../MediaMatch"

type Plataform = "linux" | "windows" | "mac"
type Rating = "BR0" | "BR10" | "BR12" | "BR14" | "BR16" | "BR18"

export type GameDetailsProps = {
  heading: string
  company: string
  releaseDate: string
  plataforms: Plataform[]
  publisher: string
  ratings: Rating
  genre: string[]
}

const GameDetails = ({
  heading,
  company,
  releaseDate,
  plataforms,
  publisher,
  ratings,
  genre
}: GameDetailsProps) => {
  const plataformsIcons = {
    linux: <Linux title="Linux" size={22} />,
    windows: <Windows title="Windows" size={22} />,
    mac: <Apple title="Mac" size={22} />
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          {heading}
        </Heading>
      </MediaMatch>

      <S.GameContainer>
        <div>
          <S.Title>Company</S.Title>
          <S.SubTitle>{company}</S.SubTitle>
        </div>

        <div>
          <S.Title>Release date</S.Title>
          <S.SubTitle>
            {new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric"
            }).format(new Date(releaseDate))}
          </S.SubTitle>
        </div>

        <div>
          <S.Title>Plataforms</S.Title>
          <S.IconWrapper>
            {plataforms.map((icon) => (
              <S.Icon key={icon}>{plataformsIcons[icon]}</S.Icon>
            ))}
          </S.IconWrapper>
        </div>

        <div>
          <S.Title>Publisher</S.Title>
          <S.SubTitle>{publisher}</S.SubTitle>
        </div>

        <div>
          <S.Title>Rating</S.Title>
          <S.SubTitle>
            {ratings === "BR0" ? "FREE" : `${ratings.replace("BR", "")}+`}
          </S.SubTitle>
        </div>

        <div>
          <S.Title>Genre</S.Title>
          {!!genre &&
            genre.map((item, index) => (
              <S.SubTitle key={index}>{item}</S.SubTitle>
            ))}
        </div>
      </S.GameContainer>
    </S.Wrapper>
  )
}

export default GameDetails
