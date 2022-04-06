/// <reference types="cypress" />

describe("Test API Rest", () => {

    it("GET ", () => {
        let responseJson
        
        responseJson = cy.request("https://api.publicapis.org/entries")

        responseJson.its("status").should("eq",200)

    })

    it("Test api Rest GET ", () => {
        cy.request({
            method : 'GET',
            url : "https://gorest.co.in/public/v2/users",
            headers : {
                'Authorization' : "Bearer 54564654456456456456564564545656456456"
            }
        }).then((resp) =>{
            expect(resp.status).to.eq(200);
            expect(resp.body[0].id).to.eq(3307)
        })
    })
})