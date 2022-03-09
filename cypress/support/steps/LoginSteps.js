/* global Given, And, Then */

import LoginPage from '../pageObjects/LoginPage'
const loginPage = new LoginPage

Given("eu esteja no site Woman Store", ()=>{
    loginPage.acessarSite()
})
And("eu clique no botao Sign in", ()=>{
    loginPage.botaoSignin()

})
And("coloco o meu email", ()=>{
    loginPage.ColocarEmail()

})
And("coloco minha senha", ()=>{
    loginPage.ColocarSenha()

})
And("clico no botao Sign in do formulario de login", ()=>{
    loginPage.SubmitLogin()

})
Then("clico no botao Sign in", ()=>{
    loginPage.SubmitLogin()

})
And("eu coloco os dados errados", ()=>{
    loginPage.DadosErrado()

})
Then("aparece o alerta", ()=>{
    loginPage.alert()
})

