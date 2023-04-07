
Feature: Criar nova conta

  Scenario: Criar uma nova conta com sucesso
    Given estou na tela minha conta
    When preencho o campo email
    And  preencho o campo senha
    And  clico no botão register
    Then deve criar uma nova conta com sucesso
