/// <reference types="cypress" />


function visit () { 
    before(() => {
        cy.visit('/')
    })
 
}

export { visit }