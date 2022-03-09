/// <reference types="Cypress" />

import ComprasElements from '../elements/ComprasElements'
const comprasElements = new ComprasElements
const url = Cypress.config("baseUrl")

class ComprasPage{
   ComprarRoupas(){
       cy.get(comprasElements.btnDresses()).click()
       cy.get(comprasElements.btnAddCar()).click()
   }
   ProcedimentodeCheckout(){
        cy.get(comprasElements.btnProceedCheckout()).click()
        cy.get(comprasElements.btnProceed1()).click()
        cy.get(comprasElements.btnProceed1()).click()
        cy.get(comprasElements.btnCheckbox()).click()
        cy.get(comprasElements.btnProceed1()).click()   
        
   }
   confirmarCompra(){
        cy.get(comprasElements.PBankwire()).click()
        cy.get(comprasElements.btnConfirm()).click()

   }
   confirmarCompraCheck(){
    cy.get(comprasElements.PCheck()).click()
    cy.get(comprasElements.btnConfirm()).click()
   }
   VizualiarConfirmacao(){
       cy.get(comprasElements.boxConfirm()).should('be.visible')
   }
   continuarCompra(){
       cy.get(comprasElements.continueCompra()).click()
   }
   ComprarOutraRoupa(){
       cy.get(comprasElements.btnAddCar2()).click()
   }
   ProcedimentodeCheckout2(){
    cy.get(comprasElements.btnProceedCheckout()).click()
    cy.get(comprasElements.btnProceed1()).click()
    cy.get(comprasElements.btnProceed1()).click()
    cy.get(comprasElements.btnCheckbox()).click()
    cy.get(comprasElements.btnProceed1()).click()   
    cy.get(comprasElements.idRoupas()).should("be.visible")
    cy.get(comprasElements.idRoupas2()).should("be.visible")
    
}

}
export default ComprasPage