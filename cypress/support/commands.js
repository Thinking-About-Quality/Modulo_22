/// <reference types='cypress' />

Cypress.Commands.add("login", (usuario, senha) => {
  
    cy.visit(".minha-conta");
    cy.get("#username").type(usuario);
    cy.get("#password").type(senha, { log: true });
    cy.get(".woocommerce-form > .button").click();
    cy.get('.breadcrumb > .active').should('be.visible')
    cy.get("#primary-menu > .menu-item-629 > a").click();
    //cy.clearCookies()
    
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

// Cypress.Commands.add("placeOrder", (email, senha) => {
//   cy.get(".checkout-button").click();
//   cy.get(".showlogin").click();
//   cy.get("#username").type(email);
//   cy.get("#password").type(senha);
//   cy.get(".woocommerce-button").click();
//   cy.get("#terms").click();
//   cy.wait(5000);
//   cy.get("#place_order").click();
// });

// Cypress.Commands.add("login", (login, password) => {
//   const fd = new FormData();
//   fd.append("username", login);
//   fd.append("password", password);
//   fd.append("woocommerce-login-nonce", "9242104621");
//   fd.append("_wp_http_referer", `minha-conta/`);
//   fd.append("login", "Login");
//   cy.request({
//     url: "minha-conta/",
//     method: "POST",
//     body: fd,
//   }).then((resp) => {
//     resp.headers["set-cookie"].forEach((cookie) => {
//       const firstPart = cookie.split(";")[0];
//       const divisor = firstPart.indexOf("=");
//       const key = firstPart.substring(0, divisor);
//       const value = firstPart.substring(divisor + 1);
//       cy.setCookie(key, value);
//     });
//   });
//   cy.visit("wp-admin/");
// });
