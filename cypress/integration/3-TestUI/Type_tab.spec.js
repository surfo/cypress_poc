/// <reference types="cypress" />

describe("Funciones para Type tab", () => {
    it("Type con tab", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        
        cy.get('#firstName')
        .type("Juan").tab()
        .type("Perez").tab()
        .type("perezjuan@gmail.com")

    })

    
})