/// <reference types="Cypress" />

import LoginGeralElements from '../elements/LoginGeralElements'
const loginGeralElements = new LoginGeralElements
const url = Cypress.config("baseUrl")

class LoginGeralPage{
    fazerLogin(){
        cy.visit(url)
        cy.get(loginGeralElements.botaoCadastro()).click()
        cy.get(loginGeralElements.email()).type("testeteste@teste.teste")
        cy.get(loginGeralElements.password()).type("123teste")
        cy.get(loginGeralElements.submitLogin()).click()
    }

}
export default LoginGeralPage