/// <reference types ="cypress"/>
const produto = require("../fixtures/product.json");

describe("Produto", () => {
  it("Adicionar produto no carrinho com sucesso", () => {
    cy.addProduto(
      produto.size,
      produto.color,
      produto.quantity,
      produto.add_cart,
      produto.product_id,
      produto.variation_id
    );
    cy.get(".page-title").should("be.visible");
  });
});
