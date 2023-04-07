/// <reference types ="cypress"/>
import { faker } from "@faker-js/faker";
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

const url = "minha-conta/";
const conta = {
  email: `${faker.internet.email()}`,
  password: `${faker.internet.password()}`,
};

Given("estou na tela minha conta", () => {
  cy.visit(url);
});
When("preencho o campo email", () => {
  cy.get("#reg_email").type(conta.email);
});
When("preencho o campo senha", () => {
  cy.get("#reg_password").type(conta.password,{log: false });
});
When("clico no botão register", () => {
  cy.get(':nth-child(4) > .button').click({ force: true });
});
Then("deve criar uma nova conta com sucesso", () => {
  cy.get(".woocommerce-MyAccount-content > :nth-child(3)").should("be.visible");
});
