/// <reference types="cypress" />

describe("Test automatizado grabado ", () => {
    it("Test title login record ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#userName').clear();
        cy.get('#userName').type('Diego');
        cy.get('#userEmail').clear();
        cy.get('#userEmail').type('camposdiegod@gmail.com');
        cy.get('#currentAddress').click();
        cy.get('#permanentAddress').click();
        cy.get('#submit').click();
        /* ==== End Cypress Studio ==== */
    })
})