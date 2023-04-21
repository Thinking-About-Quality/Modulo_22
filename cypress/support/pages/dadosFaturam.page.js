// /// <reference types="cypress" />
export const faturamDetalhesPage ={
    get name(){return cy.get('#billing_first_name')},
    get lastName(){return cy.get('#billing_last_name')},
    get endereco(){return cy.get('#billing_address_1')},
    get cidade(){return cy.get('#billing_city')},
    get cep(){return cy.get('#billing_city')},
    get telefone(){return cy.get('#billing_city')},
    get email(){return cy.get('#billing_email')},
    get checkConta(){return cy.get('#createaccount')},

   dadosFatura(name,lastName,endereco,cidade,cep,telefone,email){
    this.name.type(name)
    this.lastName.type(lastName)
    this.endereco.type(endereco)
    this.cidade.type(cidade)
    this.cep.type(cep)
    this.telefone.type(telefone)
    this.email.type(email)
    this.checkConta.click

   }
  
}