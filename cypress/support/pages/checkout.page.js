// /// <reference types="cypress" />
class CheckoutPage{
get #buttonConcluir (){return cy.get('.checkout-button')}
get #pagEntrega (){return cy.get('#payment_method_cod')}
get #terms(){return  cy.get('#terms')}
get #buttonFina() {return cy.get('#place_order')}

checkout (){
    this.#buttonConcluir.click()
    this.#pagEntrega.click()
    this.#terms.click()
    this.#buttonFina.click()
}
}

module.exports = new CheckoutPage()