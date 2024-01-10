import { BannersAttributes } from "../graphql/gqltypes/queryHomeBannersType"
import { GameAttributes } from "../graphql/gqltypes/queryGameType"
import { HighlightProps } from "../graphql/gqltypes/queryHighlightType"

export const bannerMapper = (banners: BannersAttributes[]) => {
  return banners.map(({ attributes }) => ({
    img: `http://localhost:1337${attributes.image.data.attributes.url}`,
    title: attributes.title,
    subtitle: attributes.subtitle,
    buttonLabel: attributes.button.label,
    buttonLink: attributes.button.link,
    ribbon: attributes.ribbon?.text || null,
    ribbonSize: attributes.ribbon?.size,
    ribbonColor: attributes.ribbon?.color
  }))
}

export const gamesMapper = (games: GameAttributes[]) => {
  return games.map(({ attributes }) => ({
    slug: attributes.slug,
    image: `http://localhost:1337${attributes.cover.data.attributes.url}`,
    title: attributes.name,
    developer: attributes.developers.data[0].attributes.name,
    price: attributes.price
  }))
}

export const highlightsMapper = (highlight: HighlightProps) => {
  return {
    title: highlight.title,
    subtitle: highlight.subtitle,
    backgroundImage: `http://localhost:1337${highlight.background.data.attributes.url}`,
    floatImage: `http://localhost:1337${highlight.floatImage.data.attributes.url}`,
    buttonLabel: highlight.buttonLabel,
    buttonLink: highlight.buttonLink,
    alignment: highlight.alignment
  }
}
