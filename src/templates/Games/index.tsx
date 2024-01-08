"use client"
import { ArrowDown } from "@styled-icons/remix-fill"
import * as S from "./styles"

import { GameCardProps } from "../../components/GameCard"
import { Container } from "../../components/Container"

import Base from "../Base"
import ExploreSidebar, { ItemProps } from "../../components/ExploreSidebar"
import GameCard from "../../components/GameCard"
import Empty from "../../components/Empty"

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

function GamesTemplate({ games = [], filterItems }: GamesTemplateProps) {
  const onFilter = () => {}

  //const handleShowMore = () => {}

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <ExploreSidebar items={filterItems} onFilter={onFilter} />

          <section>
            <S.GameContainer>
              {games.length > 0 ? (
                games.map((game) => {
                  return <GameCard key={game.title} {...game} />
                })
              ) : (
                <Empty
                  title="Nothing to see here"
                  description="clear the filters"
                />
              )}
            </S.GameContainer>

            {games.length > 0 && (
              <S.Showmore role="button" onClick={() => {}}>
                <p>Show more</p>
                <ArrowDown size={32} />
              </S.Showmore>
            )}
          </section>
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default GamesTemplate
