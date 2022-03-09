/// <reference types="Cypress" />

import RegistroElements from '../elements/RegistroElements'
const registroElements = new RegistroElements
const url = Cypress.config("baseUrl")
class RegistroPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
    botaoCadastro() {
        cy.get(registroElements.botaoCadastro()).click()
    }
    emailCreate(){
        cy.get(registroElements.emailCreate()).type("testetesteteste7856@teste.teste")

    }
    emailCredenciaisErradas(){
        cy.get(registroElements.emailCreate()).type("testetesteteste1506@teste.teste")
    }
    clicarCreateCount(){
        cy.get(registroElements.btnCreateAccount()).click()

    }
    emailErrado(){
        cy.get(registroElements.emailErrado()).type("abcdse")

    }
    alertDanger(){
        cy.get(registroElements.alertDanger()).should('be.visible')
    }

    
    colocarCredenciais(){
        cy.get(registroElements.checkboxMasculino()).click()
        cy.get(registroElements.customerFirstname()).type("Whindersson")
        cy.get(registroElements.customerLastname()).type("Nunes")
        cy.get(registroElements.password()).type("testetestetesteteste")
        cy.get(registroElements.dataDay()).select(10)
        cy.get(registroElements.dataMonths()).select("April")
        cy.get(registroElements.dataYears()).select("2000")
        cy.get(registroElements.checkbox1()).click()
        cy.get(registroElements.checkbox2()).click()
        cy.get(registroElements.company()).type("testetestetesteteste")
        cy.get(registroElements.address1()).type("testetestetesteteste")
        cy.get(registroElements.address2()).type("testetestetesteteste")
        cy.get(registroElements.city()).type("testetestetesteteste")
        cy.get(registroElements.postcode()).type("08000")
        cy.get(registroElements.state()).select("California")
        cy.get(registroElements.additional()).type("Testando Testando")
        cy.get(registroElements.homePhone()).type("3261304949")
        cy.get(registroElements.mobilePhone()).type("400289222")
       
    }
    registrarSe(){
        cy.get(registroElements.btnRegister()).click()
    }
    colocarCredenciaisErr(){
        cy.get(registroElements.checkboxMasculino()).click()
        cy.get(registroElements.customerFirstname()).type("Whindersson")
        cy.get(registroElements.dataDay()).select(10)
        cy.get(registroElements.dataMonths()).select("April")
        cy.get(registroElements.dataYears()).select("2000")
        cy.get(registroElements.checkbox1()).click()
        cy.get(registroElements.checkbox2()).click()
        cy.get(registroElements.company()).type("testetestetesteteste")
        cy.get(registroElements.address1()).type("testetestetesteteste")
        cy.get(registroElements.address2()).type("testetestetesteteste")
        cy.get(registroElements.city()).type("testetestetesteteste")
        cy.get(registroElements.postcode()).type("08000")
        cy.get(registroElements.state()).select("California")
        cy.get(registroElements.additional()).type("Testando Testando")
        cy.get(registroElements.homePhone()).type("3261304949")
        cy.get(registroElements.mobilePhone()).type("400289222")
        cy.get(registroElements.btnRegister()).click()
    }
}
export default RegistroPage;