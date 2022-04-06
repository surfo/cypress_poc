/// <reference types="cypress" />

describe("Intro a los assert", () => {
    it("Assert", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')

        
        cy.get('#firstName').should("be.visible").type("Juan")
        cy.get('#lastName').should("be.visible").type("Perez")
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("perezjuan@gmail.com")

    })

    
})