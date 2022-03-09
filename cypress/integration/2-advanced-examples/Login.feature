Feature: Login

    Background: 
        Given eu esteja no site Woman Store
    Scenario: Efetuar o login corretamente
        And eu clique no botao Sign in  
        And coloco o meu email
        And coloco minha senha 
        Then clico no botao Sign in
    
    Scenario: Efetuar o login com os dados incorretos 
        And eu clique no botao Sign in
        And eu coloco os dados errados
        And clico no botao Sign in do formulario de login
        Then aparece o alerta

    Scenario: Não colocar os dados no login 
        And eu clique no botao Sign in
        And clico no botao Sign in do formulario de login
        Then aparece o alerta