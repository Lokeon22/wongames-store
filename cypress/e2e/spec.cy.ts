describe("Home Page", () => {
  it("should render home sections and get banners", () => {
    cy.visit("/")

    cy.get(".slick-slider")
      .first()
      .within(() => {
        cy.findByRole("heading", { name: /the witcher 3: wild hunt/i })
        cy.findByRole("link", { name: /buy now/i })

        cy.get(".slick-dots > :nth-child(2) > button").click()
        cy.wait(500)

        cy.get(".slick-dots > :nth-child(3) > button").click()
        cy.wait(500)

        cy.findByRole("heading", { name: /divinity: original sin 2/i })
        cy.findByRole("link", { name: /buy now/i })
      })

    cy.get(".sc-bqyKbq")
      .first()
      .within(() => {
        cy.findByRole("heading", { name: /new games/i })

        cy.findByRole("heading", { name: /most popular games/i })

        cy.findByRole("heading", { name: /upcoming games/i })

        cy.findByRole("heading", { name: /under \$2/i })
      })
  })
})
