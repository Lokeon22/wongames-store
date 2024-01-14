import { bannerMapper, gamesMapper, highlightsMapper } from "./"

describe("bannerMapper", () => {
  it("should return the right format when mapped", () => {
    const banners = {
      attributes: {
        image: {
          data: {
            attributes: {
              url: "/image.jpg"
            }
          }
        },
        title: "BunnerTitle",
        subtitle: "BunnerSubtitle",
        button: {
          label: "buttonLabel",
          link: "buttonLink"
        }
      }
    }

    expect(bannerMapper([banners])).toStrictEqual([
      {
        img: "http://localhost:1337/image.jpg",
        title: "BunnerTitle",
        subtitle: "BunnerSubtitle",
        buttonLabel: "buttonLabel",
        buttonLink: "buttonLink",
        ribbon: null,
        ribbonColor: undefined,
        ribbonSize: undefined
      }
    ])
  })
})

describe("gammesMapper", () => {
  it("should return the right format when mapped", () => {
    const games = {
      id: "1",
      attributes: {
        name: "gameTitle",
        slug: "game-slug",
        developers: {
          data: [
            {
              attributes: {
                name: "gameDeveloper"
              }
            }
          ]
        },
        cover: {
          data: {
            attributes: {
              url: "/image.jpg"
            }
          }
        },
        price: 10
      }
    }

    expect(gamesMapper([games])).toStrictEqual([
      {
        id: "1",
        slug: "game-slug",
        image: "http://localhost:1337/image.jpg",
        title: "gameTitle",
        developer: "gameDeveloper",
        price: 10
      }
    ])
  })
})

describe("highlightsMapper", () => {
  it("should return the right format when mapped", () => {
    const highlight = {
      title: "highlightTitle",
      subtitle: "highlightSubtitle",
      background: {
        data: {
          attributes: {
            url: "/image.jpg"
          }
        }
      },
      floatImage: {
        data: {
          attributes: {
            url: "/float_image.jpg"
          }
        }
      },
      buttonLabel: "highlightLabel",
      buttonLink: "highlightLink",
      alignment: "right" as "right" | "left"
    }

    expect(highlightsMapper(highlight)).toStrictEqual({
      title: "highlightTitle",
      subtitle: "highlightSubtitle",
      backgroundImage: "http://localhost:1337/image.jpg",
      floatImage: "http://localhost:1337/float_image.jpg",
      buttonLabel: "highlightLabel",
      buttonLink: "highlightLink",
      alignment: "right"
    })
  })
})
