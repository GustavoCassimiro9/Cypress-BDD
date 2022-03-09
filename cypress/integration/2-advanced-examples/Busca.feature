Feature: Busca

    Feature Description
    Scenario: Realizar busca 
        Given eu esteja no site 
        And eu insiro o que desejo procurar na barra de pesquisa
        Then devo consegui observar o resultado do que procurei 
    Scenario: Busca Invalida
        Given eu esteja no site
        And eu insiro um produto invalido na barra de pesquisa
        Then aparece uma mensagem de aviso