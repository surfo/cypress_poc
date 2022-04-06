/// <reference types="cypress" />

describe("Evento Click", () => {
    it("Click Login", () => {
        cy.visit("https://github.com/login")
        //cy.title().should('eq','ToolsQA')
        cy.get(".auth-form-body").should("be.visible")

        cy.get('#login_field').should("be.visible").should("be.enabled").type("juanperez@gmail.com")

        cy.get('#password').should("be.visible").should("be.enabled").type("1234567")
        
        cy.get('.btn').should("be.visible").should("be.enabled").click()

        cy.get('.flash > .px-2').should("be.visible")
        
        //cy.get('#firstName').should("be.visible").type("Juan")
        //cy.get('#lastName').should("be.visible").type("Perez")
        //cy.get('#userEmail').should("be.visible").should("be.enabled").type("perezjuan@gmail.com")

    })

    
})