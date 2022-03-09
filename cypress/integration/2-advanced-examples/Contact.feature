Feature: Contate-nos

    Scenario: Contatar os administradores do site
        Given que eu estou no site Woman Store
        And eu clico no botao Contact Us
        And preencho os formularios necessarios
        Then envio a mensagem e aparece um alerta e confirmacao
    Scenario: Formulario de contato sem um dado
        Given que eu estou no site Woman Store
        And eu clico no botao Contact Us
        And preencho os formulario mas nao insiro o email
        Then envio a mensagem e aparece um alerta de erro