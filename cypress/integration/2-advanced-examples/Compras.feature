Feature: Compras

    Feature Description
    Background: 
        Given eu esteja logado no site Woman Store
    Scenario: Compras com sucesso
        And eu compro uma roupa
        And realizo o processo de checkout
        And confirmo minha compra
        Then eu devo visualizar a mensagem de compra concluida 
    Scenario: Confirmar a compra com check 
        And eu compro uma roupa
        And realizo o processo de checkout
        And confirmo minha compra com check
        Then eu devo visualizar a mensagem de compra concluida
    Scenario: Continuar comprando
        And eu compro uma roupa
        And eu escolho a opção de continuar comprando
        And eu realizo outra compra
        And realizo o checkout 
        And confirmo minha compra
        Then eu devo visualizar a mensagem de compra concluida