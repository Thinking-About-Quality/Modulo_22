/// <reference types ="cypress"/>
const searchData = require('../fixtures/searchData.json');
const { productSearchPage } = require('../support/pages/produdoPesquisa.page');
const { producPage } = require('../support/pages/produto.page');
const { homePage } = require('../support/pages/home.page');
describe('Lista de Produtos', () => {
    before(() => {
        cy.intercept(
          {
            method: "GET",
            url: "/wp-admin/admin-ajax*",
            query: {
              term: "EBAC",
            },
          },
          (req) => {
            req.reply({
              statusCode: 200,
              body: `${req.query.callback}(
                                ${JSON.stringify(searchData.autocompleteSearchData)}
                            )`,
            });
          }
        );
       
      });
      beforeEach(() => {
        cy.visit("/")
    });
    searchData.autocompleteSearchData.forEach(item=>{
        it(`Product ${item.label}should be return correcty`, () => {
            homePage.searchMagnifier()
            productSearchPage.search(item.label)
            productSearchPage.productList.should('have.attr','title',item.label)
            productSearchPage.productList.each(el=>{
                expect(el.attr('title')).eq(item.label)
            })
          
            
        });

    })
    
});