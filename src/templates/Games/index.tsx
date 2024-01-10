"use client"
import { initializeApollo } from "../../utils/apolo"
import { useQuery } from "@apollo/client"
import { ApiResponse } from "../../graphql/gqltypes/queryGameType"
import { QUERY_GAMES } from "../../graphql/queries/games"

import * as S from "./styles"
import { ChevronRight } from "@styled-icons/material-outlined"
import { Container } from "../../components/Container"

import Base from "../Base"
import ExploreSidebar, { ItemProps } from "../../components/ExploreSidebar"
import GameCard from "../../components/GameCard"
import Empty from "../../components/Empty"

export type GamesTemplateProps = {
  apolloInitialState?: string
  filterItems: ItemProps[]
}

function GamesTemplate({
  filterItems,
  apolloInitialState
}: GamesTemplateProps) {
  const apolloClient = apolloInitialState
    ? initializeApollo(JSON.parse(apolloInitialState))
    : initializeApollo()

  const { data } = useQuery<ApiResponse>(QUERY_GAMES, {
    client: apolloClient,
    variables: { limit: 15 }
  })

  const onFilter = () => {}

  //const handleShowMore = () => {}

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <ExploreSidebar items={filterItems} onFilter={onFilter} />

          <section>
            <S.GameContainer>
              {data && data.games.data.length > 0 ? (
                data.games.data.map(({ attributes }) => {
                  return (
                    <GameCard
                      key={attributes.slug}
                      slug={attributes.slug}
                      title={attributes.name}
                      image={`http://localhost:1337${attributes.cover.data.attributes.url}`}
                      price={attributes.price}
                      developer={attributes.developers.data[0].attributes.name}
                    />
                  )
                })
              ) : (
                <Empty
                  title="Nothing to see here"
                  description="clear the filters"
                />
              )}
            </S.GameContainer>

            {data && data.games.data.length > 0 && (
              <S.Showmore role="button" onClick={() => {}}>
                <p>Show more</p>
                <ChevronRight
                  style={{ rotate: "90deg", color: "#F231A5" }}
                  size={32}
                />
              </S.Showmore>
            )}
          </section>
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default GamesTemplate
