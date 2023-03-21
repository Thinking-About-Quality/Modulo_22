/// <reference types ="cypress"/>
import { faker } from "@faker-js/faker";
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

const url = "http://lojaebac.ebaconline.art.br/minha-conta/";
const conta = {
  email: `${faker.internet.email()}`,
  password: `${faker.internet.password()}`,
};

Given("estou na funcionalidade minha conta", () => {
  cy.visit(url);
});
// When("fill in the email field", () => {
//   cy.get("#reg_email").type(conta.email);
// });
// When("fill in the password field", () => {
//   cy.get("#reg_password").type(conta.password);
// });
// When("click on the register button", () => {
//   cy.get(':nth-child(4) > .button').click({ force: true });
// });
// Then("must create account successfully", () => {
//   //cy.get(".page-title").should("be.visible");
//   cy.get(".woocommerce-MyAccount-content > :nth-child(3)").should("be.visible");
// });
