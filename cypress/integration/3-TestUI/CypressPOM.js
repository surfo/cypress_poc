/// <reference types="cypress" />

describe("Registro de usuario POM ", () => {

    before(function(){
        cy.fixture('my_accounts').then(function(data)
        {
            //this.data=data ;
            globalThis.data=data
        })
    })



    it("Alta de usuario POM ", () => {
        cy.visit("https://shop.demoqa.com/my-account/")
        //cy.get('#reg_username').type(this.data.usr)
        cy.get('#reg_username').type(data.usr)
    })
})