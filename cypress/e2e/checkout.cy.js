/// <reference types ="cypress"/>
/// <reference types ="cypress"/>
const usuario = require("../fixtures/data.json");
const produto = require("../fixtures/product.json");
const checkoutPage = require("../support/pages/checkout.page");
const checkout =require ('../support/pages/checkout.page')

describe("Login", () => {
  it("Logar com sucesso", () => {
    cy.login(usuario.email, usuario.password)
    cy.addProduto(produto.size, produto.color, produto.quantity, produto.add_cart,
      produto.product_id, produto.variation_id)
      cy.get('.page-title').should('be.visible')
      checkoutPage.checkout()
      cy.get('.woocommerce-notice').should('have.text','Obrigado. Seu pedido foi recebido.')
       
  });
});
