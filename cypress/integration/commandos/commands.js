/// <reference types="cypress" />

describe("Test usando Commands ", () => {

    beforeEach(function(){
        cy.visit("https://www.saucedemo.com/")
        cy.typeLogin('standard_user','secret_sauce')
    })

    it("Cammnds logout ", function(){
        cy.log('Test')
    })

    afterEach(function(){
        cy.LogoutSite()
    })
})