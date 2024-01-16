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
  })
})
