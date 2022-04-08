/// <reference types="cypress" />

describe("Iterar Lote de pruebas ", () => {
    const timeOut = 5000
 
    
     it("Captura de barras ", () => {
         
         cy.fixture("lote").then( loteData => {
             let count = 0
             cy.visit('https://demoqa.com/automation-practice-form')
 
 
             loteData.forEach( data => {
                 cy.log(count)
                 cy.log(data.caso_prueba)
                 //cy.get('#id_InputBarra').should('be.visible').type(data.input_codBarra)
                 cy.log(data.input_codBarra)
                 cy.get('#currentAddress').clear()
                 //cy.wait(5000)
                 cy.get('#currentAddress').type(data.input_codBarra)
                 //cy.get('#button').click()
                 
                 cy.log(data.input_diaNegocio)
                 //cy.get('#id_InputBarra').should('be.visible',{"timeout": timeOut}).eq(data.output_importe)
                 cy.log(data.output_importe)
                 
                 count +=1
             });
         })
 
 
     })
 })