/// <reference types='cypress' />

Cypress.Commands.add("login", (usuario, senha) => {
  
    cy.visit(".minha-conta");
    cy.get("#username").type(usuario);
    cy.get("#password").type(senha, { log: true });
    cy.get(".woocommerce-form > .button").click();
    cy.get('.breadcrumb > .active').should('be.visible')
    cy.get("#primary-menu > .menu-item-629 > a").click();

    
  });

Cypress.Commands.add("addProduto",(size, color, quantity, add_cart, product_id, variation_id) => {
    const fd = new FormData();
    fd.append("attribute_size", size);
    fd.append("attribute_color", color);
    fd.append("quantity", quantity);
    fd.append("add-to-cart", add_cart);
    fd.append("product_id", product_id);
    fd.append("variation_id", variation_id);

    cy.request({
      url: "product/abominable-hoodie/",
      method: "POST",
      body: fd,
    }).then((resp) => {
      resp.headers["set-cookie"].forEach((cookie) => {
        const firstPart = cookie.split(";")[0];
        const divisor = firstPart.indexOf("=");
        const key = firstPart.substring(0, divisor);
        const value = firstPart.substring(divisor + 1);
        cy.setCookie(key, value);
      });
      cy.visit("http://lojaebac.ebaconline.art.br/carrinho/");
    });
    
  }
  
);

