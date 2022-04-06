/// <reference types="cypress" />

describe("Test de Cypress ", () => {
    
    it("Primer Test Hola Mundo", () => {
        cy.log("hola mundo")
    })

    it("Segundo test -> campo name", () => {
        cy.visit("https://demoqa.com/text-box")

        cy.get("#userName").type("Diego")
    })

})