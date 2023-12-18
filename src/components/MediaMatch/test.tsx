import { render, screen } from "@testing-library/react"
import "jest-styled-components"

import MediaMatch from "."

describe("<MediaMatch />", () => {
  let headingDesktop: Element
  let headingMobile: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Destkop</h1>
        </MediaMatch>

        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    headingDesktop = screen.getByTestId("desktop")
    headingMobile = screen.getByTestId("mobile")
  })

  it("should be hidden if no media query is passed", () => {
    expect(headingDesktop.parentElement).toHaveStyleRule("display", "none")
    expect(headingMobile.parentElement).toHaveStyleRule("display", "none")
  })

  it("should show or hide based on the media passed", () => {
    expect(headingDesktop.parentElement).toHaveStyleRule("display", "block", {
      media: "(min-width:  768px)"
    })
    expect(headingMobile.parentElement).toHaveStyleRule("display", "block", {
      media: "(max-width:  768px)"
    })
  })
})
