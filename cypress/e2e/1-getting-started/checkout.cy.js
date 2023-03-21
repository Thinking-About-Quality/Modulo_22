/// <reference types="cypress" />
const login = require('../../../fixtures/perfil.json')

describe('Chekcout', () => {
    it('tela de checkout com sucesso', () => {
        cy.visit('/')
    });
});