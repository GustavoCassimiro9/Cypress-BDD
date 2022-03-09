Feature: Cadastro 

    Background: 
        Given que eu acesse o site Woman store
    Scenario: Cadastrar-se no site Woman      
        And eu clico no botao de cadastro 
        And insiro o email
        And clico no botão create account
        And insiro minhas credenciais
        Then eu me registro
    Scenario: Não colocar os dados no formulario 
        And eu clico no botao de cadastro 
        And insiro o email de teste
        And clico no botão create account
        And insiro minhas credenciais mas esqueço uma
        Then deve aparecer um alerta
    Scenario: Colocar o email invalido 
        And eu clico no botao de cadastro
        And insiro o email errado
        And clico no botão create account
        Then deve aparecer um alerta

