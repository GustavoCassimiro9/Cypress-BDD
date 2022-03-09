/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")
class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
    botaoSignin(){
        cy.get(loginElements.botaoCadastro()).click()
    }
    ColocarEmail(){
        cy.get(loginElements.email()).type("testeteste@teste.teste")
    }
    ColocarSenha(){
        cy.get(loginElements.password()).type("123teste")
    }
    SubmitLogin(){
        cy.get(loginElements.submitLogin()).click()
    }
    DadosErrado(){
        cy.get(loginElements.email()).type("testeteste@teste.teste")
        cy.get(loginElements.password()).type("1234teste")
    }
    alert(){
        cy.get(loginElements.alert()).should("be.visible")
    }
}   
export default LoginPage;