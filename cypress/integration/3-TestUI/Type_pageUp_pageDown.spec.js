/// <reference types="cypress" />

describe("Funciones para Type II", () => {
    it("Type PageUp", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        
        cy.get("#userName")
        .type("{pageup}")

    })

    it("Type PageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        
        cy.get("#userName")
        .type("{pagedown}")
        
    })
})