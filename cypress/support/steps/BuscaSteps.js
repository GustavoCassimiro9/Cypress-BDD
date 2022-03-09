/* global Given, And, Then */
import BuscaPage from "../pageObjects/BuscaPage";
const buscaPage = new BuscaPage 
Given("eu esteja no site", ()=>{
    buscaPage.acessarSite()

})
And("eu insiro o que desejo procurar na barra de pesquisa", ()=>{
    buscaPage.UsarBarraDePesquisa()

})
And("eu insiro um produto invalido na barra de pesquisa", ()=>{
    buscaPage.UsarBarraDePesquisaResultadoInvalido()
})
Then("devo consegui observar o resultado do que procurei", ()=>{
    buscaPage.ValidarResultado()
})
Then("aparece uma mensagem de aviso", ()=>{
    buscaPage.AlertNotResultAndValueResult()
})
