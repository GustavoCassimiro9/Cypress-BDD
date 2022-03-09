/// <reference types="Cypress" />
import BuscaElements from "../elements/BuscaElements";
const buscaElements = new BuscaElements 
const url = Cypress.config("baseUrl")

class BuscaPage{
    acessarSite(){
        cy.visit(url)

    }
    UsarBarraDePesquisa(){
        cy.get(buscaElements.barraDePesquisa()).type("Dresses")
        cy.get(buscaElements.btnPesquisa()).click()
    }
    ValidarResultado(){
        cy.get(buscaElements.ResultadoDaPesquisa()).should("contain.text","Dresses")
    }
    UsarBarraDePesquisaResultadoInvalido(){
        cy.get(buscaElements.barraDePesquisa()).type("Carro")
        cy.get(buscaElements.btnPesquisa()).click()
    }
    AlertNotResultAndValueResult(){
        cy.get(buscaElements.ResultadoDaPesquisa()).should("contain.text","")
        cy.get(buscaElements.Alert()).should("be.visible")
    }
}

export default BuscaPage