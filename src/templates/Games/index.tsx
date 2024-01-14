"use client"
import { useState } from "react"
import { useQueryGames } from "../../graphql/queries/games"

import * as S from "./styles"
import { ChevronRight } from "@styled-icons/material-outlined"
import { Container } from "../../components/Container"
import { Values } from "../../components/ExploreSidebar"

import Base from "../Base"
import ExploreSidebar, { ItemProps } from "../../components/ExploreSidebar"
import GameCard from "../../components/GameCard"
import Empty from "../../components/Empty"

import { categoryArrayFilter, where_categories } from "../../utils/formatfilter"

export type GamesTemplateProps = {
  apolloInitialState?: string
  filterItems: ItemProps[]
}

function GamesTemplate({ filterItems }: GamesTemplateProps) {
  const [gameLenght, setGameLenght] = useState<number>(15)

  const { data, fetchMore } = useQueryGames({
    variables: {
      limit: gameLenght,
      where_name: "",
      where_price: 99,
      where_category: where_categories,
      sort: "price:desc"
    }
  })

  const onFilter = (values: Values) => {
    if (values.where_price || values.sort) {
      const categoriasArray = categoryArrayFilter(values)

      fetchMore({
        variables: {
          where_price: values?.where_price ? values?.where_price : 99,
          sort: values.sort ? values.sort : "price:asc",
          where_category:
            categoriasArray.length <= 0 ? where_categories : categoriasArray
        }
      })
      return
    }
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: gameLenght,
        start: data.games.data.length
      }
    }).then(() => {
      setGameLenght((prevLimit) =>
        prevLimit <= data.games.data.length ? prevLimit + 15 : 15
      )
    })
  }

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <ExploreSidebar
            initialValues={{ windows: true }}
            items={filterItems}
            onFilter={onFilter}
          />

          <section>
            <S.GameContainer>
              {data && data.games.data.length > 0 ? (
                data.games.data.map(({ attributes, id }) => {
                  return (
                    <GameCard
                      key={attributes.slug}
                      id={id}
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
              <S.Showmore role="button" onClick={handleShowMore}>
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
