/// <reference types="cypress" />

describe("Login Click ", () => {
    it("Login GitHub ", () => {
        cy.visit("https://github.com/login")
        cy.get('h1').should("be.visible")
        cy.wait(1000)

        cy.get('#login_field').should("be.visible").should("be.enabled").type("gaston")
        cy.wait(1000)
        cy.get('#password').should("be.visible").should("be.enabled").type("12345")
        cy.wait(1000)
        cy.get('.btn').should("be.visible").should("be.enabled").click()
        cy.wait(1000)
        cy.get('#js-flash-container > .flash').should("be.visible")

        cy.get('.px-2 > .flash-close > .octicon > path').should("be.visible").click
    })
})