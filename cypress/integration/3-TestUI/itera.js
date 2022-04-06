/// <reference types="cypress" />


describe("Iterar ", () => {
    let variant = ""
   
    before(function(){
        cy.fixture("lote").then(function(data)
        {
            globalThis.data=data
        })
    })
    

    
    it("Itero json ", () => {
        
        for(let i=1;i<10;i++){
            variant = "barra" + i
            cy.log("barra: " + data.variant)
        }

    })
})