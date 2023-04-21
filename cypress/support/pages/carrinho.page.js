// /// <reference types="cypress" />

class carrinhoPage{
    get #remove (){return cy.get('.remove > .fa')}
    get #message (){ return cy.get('.woocommerce-message')}
    get #vazio(){ return cy.get('.cart-empty')}

    carrinhoVazio(){
        this.#remove.click()
        this.#message.should('be.visible')
        this.#vazio.should('not.have.text','Seu carrinho está vazio.')
    }

}

module.exports = new carrinhoPage()