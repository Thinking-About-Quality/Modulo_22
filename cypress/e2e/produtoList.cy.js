/// <reference types ="cypress"/>

const { produtoDetalhesPage } = require("../support/pages/detalheProduto.page");
const {  productsPage } = require("../support/pages/produto.page");

describe('Produto List', () => {
    beforeEach(() => {
        cy.visit('/produtos')
    });
    it('Validar detalhes do produto', () => {
        productsPage.productList.each(product=>{
            let productDetailsLink =product.attr('href')
            let productTitle =product.attr('title')

            cy.visit(productDetailsLink).then(()=>{
                produtoDetalhesPage.breadcrumbProduct.should('include.text', productTitle)
                produtoDetalhesPage.productTitle.invoke('text').then(text=>{
                    expect(text).to.be.equal(productTitle)
                })
                produtoDetalhesPage.variations.find('[for]').should('have.length',2).and('be.visible')
            })
        })
    });
    
});
