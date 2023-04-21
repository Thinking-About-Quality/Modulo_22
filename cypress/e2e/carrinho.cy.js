/// <reference types ="cypress"/>
const searchData = require("../fixtures/searchData.json");
const usuario = require("../fixtures/data.json");
const produto = require("../fixtures/product.json");
const carrinho = require("../fixtures/carrinho.json");

describe("Carrinho", () => {
  beforeEach(() => {
    cy.login(usuario.email, usuario.password);
    cy.addProduto(
      produto.size,
      produto.color,
      produto.quantity,
      produto.add_cart,
      produto.product_id,
      produto.variation_id
    );
  });
  before(() => {
    cy.intercept(
      {
        method: "GET",
        url: "carrinho/",
        query: {
          term: "Abominable",
        },
      },
      (req) => {
        req.reply({
          statusCode: 200,
          body: `${req.query}(
                            ${JSON.stringify(carrinho.remover)}
                        )`,
        });
      }
    );
  });
  it("Remover produto no carrinho", () => {
    cy.visit("carrinho/");
    cy.get(".remove > .fa").click();
    cy.get(".woocommerce-message").should("be.visible");
    cy.get(".cart-empty").should("be.visible");
    
  });

});
