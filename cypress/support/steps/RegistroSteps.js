/* global Given, And, Then */

import RegistroPage from '../pageObjects/RegistroPage'
const registroPage = new RegistroPage

Given("que eu acesse o site Woman store", () => {
    registroPage.acessarSite()
})
And("eu clico no botao de cadastro",() =>{
    registroPage.botaoCadastro()

})
And("insiro o email", ()=>{
    registroPage.emailCreate()


})
And("clico no botão create account", ()=>{
    registroPage.clicarCreateCount()

})
And("insiro minhas credenciais", ()=>{
    registroPage.colocarCredenciais()


})
And("insiro minhas credenciais mas esqueço uma", ()=>{
    registroPage.colocarCredenciaisErr()

})
And("insiro o email errado", ()=>{
    registroPage.emailErrado()


})
And("insiro o email de teste", ()=>{
    registroPage.emailCredenciaisErradas()
})
Then("eu me registro", ()=>{
    registroPage.registrarSe()
})
Then("deve aparecer um alerta",()=>{
    registroPage.alertDanger()

})

