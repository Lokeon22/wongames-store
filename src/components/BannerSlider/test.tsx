import { render, screen } from "../../utils/test-utils"
import "../../../.jest/match-media-mock"
import BannerSlider from "."

const items = [
  {
    img: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death 1",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season</p>",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
    ribbon: "Bestselling"
  },
  {
    img: "https://source.unsplash.com/user/willianjusten/1042x581",
    title: "Defy death 2",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season</p>",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death"
  }
]

describe("<BannerSlider />", () => {
  it("should render vertical slider", () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelector(".slick-vertical")).toBeInTheDocument()
  })

  it("should render with 1 active item", () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelectorAll(".slick-slide")).toHaveLength(2)
    expect(container.querySelectorAll("li.slick-active")).toHaveLength(1)

    expect(
      screen.getByRole("heading", { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it("should render with the dots", () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelector(".slick-dots")).toBeInTheDocument()
  })
})
