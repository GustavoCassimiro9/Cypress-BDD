/* global Given, And, Then */

import ComprasPage from '../pageObjects/ComprasPage'
const comprasPage = new ComprasPage
import LoginGeralPage from '../pageObjects/LoginGeralPage'
const loginGeralPage = new LoginGeralPage

Given("eu esteja logado no site Woman Store", ()=>{
    loginGeralPage.fazerLogin()
})
And("eu compro uma roupa", ()=>{
    comprasPage.ComprarRoupas()

})
And("realizo o processo de checkout", ()=>{
    comprasPage.ProcedimentodeCheckout()

})
And("confirmo minha compra", ()=>{
    comprasPage.confirmarCompra()

})
And("confirmo minha compra com check", ()=>{
    comprasPage.confirmarCompraCheck()

})
And("eu escolho a opção de continuar comprando", ()=>{
    comprasPage.continuarCompra()
})
And("eu realizo outra compra", ()=>{
    comprasPage.ComprarOutraRoupa()
})
And("realizo o checkout", ()=>{
    comprasPage.ProcedimentodeCheckout2()
})
Then("eu devo visualizar a mensagem de compra concluida", ()=>{
    comprasPage.VizualiarConfirmacao()

})