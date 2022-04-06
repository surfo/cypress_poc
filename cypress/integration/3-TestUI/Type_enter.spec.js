/// <reference types="cypress" />

describe("Funciones para Type ", () => {
    it("Typre ENTER", () => {
        cy.visit("https://www.google.com/")
        cy.title().should('eq','Google')
        cy.wait(1500)

        cy.get("[name='q']")
        .type("cypress io{enter}")
    })
})