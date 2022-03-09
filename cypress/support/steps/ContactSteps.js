/* global Given, And, Then */
import ContactPage from "../pageObjects/ContactPage";
const contactPage = new ContactPage
Given("que eu estou no site Woman Store", ()=>{
    contactPage.acessarSite()
})
And("eu clico no botao Contact Us", ()=>{
    contactPage.ClicarNoBtnContact()
})
And("preencho os formularios necessarios", ()=>{
    contactPage.PreencherFormulario()
})
And("preencho os formulario mas nao insiro o email", ()=>{
    contactPage.FormularioSemDados()
})
Then("envio a mensagem e aparece um alerta e confirmacao", ()=>{
    contactPage.EnviarMenssagem()
})
Then("envio a mensagem e aparece um alerta de erro", ()=>{
    contactPage.EnviarMenssagem()
})