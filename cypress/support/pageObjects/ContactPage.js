/// <reference types="Cypress" />
import ContactElements from "../elements/ContactElements";
const contactElements = new ContactElements
const url = Cypress.config("baseUrl")
class ContactPage{
    acessarSite(){
        cy.visit(url)
    }
    ClicarNoBtnContact(){
        cy.get(contactElements.btnContactUs()).click()
    }
    PreencherFormulario(){
        cy.get(contactElements.idContact()).select("Webmaster")
        cy.get(contactElements.email()).type("testeteste@teste.teste")
        cy.get(contactElements.reference()).type("Erro nas escolhas dos tipos de produtos")
        cy.get(contactElements.message()).type("Quando eu clico em um estilo de produto especifico pela box a pagina não carrega a solicitação")
    }
    FormularioSemDados(){
        cy.get(contactElements.idContact()).select("Webmaster")
        cy.get(contactElements.reference()).type("Erro nas escolhas dos tipos de produtos")
        cy.get(contactElements.message()).type("Quando eu clico em um estilo de produto especifico pela box a pagina não carrega a solicitação")
    }
    EnviarMenssagem(){
        cy.get(contactElements.submitMenssage()).click()
        cy.get(contactElements.alertConfirm()).should("be.visible")

    }
}
export default ContactPage