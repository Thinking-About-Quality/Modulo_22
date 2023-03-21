
Feature: Account new

  Scenario: create Account Sucess
    Given I am and windows create account
    And   fill in the email field
    And   fill in the password field
    And   click on the register button
    Then  must create account successfully
