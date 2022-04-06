/// <reference types="cypress" />

describe("Alta usr facebook API ", () => {
    it("Alta de Usuario ", () => {
        
    })
})


describe("Login facebook front-end ", () => {
    it("Login Erroneo ", () => {
        cy.visit("https://www.facebook.com/")
        cy.get('.uiHeaderTitle').should("be.visible").contains("Tu solicitud no se pudo procesar")
        cy.wait(3000)
        
        cy.get("#email").should("be.visible").should("be.enabled").type("alan@gmail.com")

        //cy.get('#email').should("be.visible").should("be.enabled").type("alan@gmail.com")
        cy.wait(3000)

        cy.get('[data-testid="royal_pass"]').should("be.visible").should("be.enabled").type("123456")
        cy.wait(3000)

        cy.get('[data-testid="royal_login_button"]')
        .should("be.visible")
        .should("be.enabled")
        .click()

    })
})