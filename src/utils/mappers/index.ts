import { BannersAttributes } from "../../graphql/gqltypes/queryHomeBannersType"
import { GameAttributes } from "../../graphql/gqltypes/queryGameType"
import { HighlightProps } from "../../graphql/gqltypes/queryHighlightType"

import { formatPrice } from "../formatprice"
import { getImageUrl } from "../getImageUrl"

export const bannerMapper = (banners: BannersAttributes[]) => {
  return banners.map(({ attributes }) => ({
    img: `${getImageUrl(attributes.image.data.attributes.url)}`,
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
  return games.map(({ attributes, id }) => ({
    id,
    slug: attributes.slug,
    image: `${getImageUrl(attributes.cover.data.attributes.url)}`,
    title: attributes.name,
    developer: attributes.developers.data[0].attributes.name,
    price: attributes.price
  }))
}

export const highlightsMapper = (highlight: HighlightProps) => {
  return {
    title: highlight.title,
    subtitle: highlight.subtitle,
    backgroundImage: `${getImageUrl(highlight.background.data.attributes.url)}`,
    floatImage: `${getImageUrl(highlight.floatImage.data.attributes.url)}`,
    buttonLabel: highlight.buttonLabel,
    buttonLink: highlight.buttonLink,
    alignment: highlight.alignment
  }
}

export const cartMapper = (cart: GameAttributes[] | undefined) => {
  return cart
    ? cart.map(({ id, attributes }) => ({
        id,
        slug: attributes.slug,
        title: attributes.name,
        price: formatPrice(attributes.price),
        img: `${getImageUrl(attributes.cover.data.attributes.url)}`
      }))
    : []
}
