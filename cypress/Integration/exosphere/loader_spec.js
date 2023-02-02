
describe('Verify Loader component',function (){
    it('Css properties',function (){
        cy.visit('https://exosphere.sandbox.boomi.com/iframe.html?id=components-loader--default&viewMode=docs');
        cy.get('#story--components-loader--default > div > ex-loader').shadow().find('.loader--container.loader--inline').as('loader');
        cy.get('@loader').should('have.css','color').and('eq','rgb(38, 38, 38)');
        cy.get('@loader').should('have.css','font-family').and('eq','"Open Sans", serif');
    })

    it('special properties',function (){
        cy.visit('https://exosphere.sandbox.boomi.com/iframe.html?id=components-loader--default&viewMode=docs');
        cy.get('#control-backdrop').click();
        cy.get('#story--components-loader--default > div > ex-loader').shadow().find('.loader--container.loader--backdrop.loader--inline').as('loader');
        cy.get('@loader').should('have.css','background-color').and('eq','rgba(38, 38, 38, 0.6)');
        cy.get('@loader').should('have.css','font-family').and('eq','"Open Sans", serif');

        cy.get('@loader').should('have.css','width','135.8046875px').and('have.css','height','120px');
        cy.get('#control-size').select('LARGE');
        cy.wait(2000);
        //negative scenario it would fail
        cy.get('@loader').should('have.css','width','135.8046875px').and('have.css','height','160px');

    })

    it('progress bar', function (){
        cy.visit('https://exosphere.sandbox.boomi.com/iframe.html?id=components-loader--default&viewMode=docs');
        //cy.get('#pbi_instance').shadow().find('div[role="progressbar"] >div >.pb--value--section').as('pBar');
        cy.get('#pbi_instance').shadow().find('div[role="progressbar"]').as('pBar')
        cy.get('@pBar').should('have.attr','aria-valuenow','0');
        //cy.get('.pbi_btns >ex-button').shadow().find('button[role="button"]').click();
        cy.get('.pbi_btns >ex-button:nth-child(1)').click();
        cy.wait(2000);
        cy.get('@pBar').should('contain.text','0%');
        cy.get('.pbi_cont >.pbi_btns >ex-button[id="btn-30"]').click();
        cy.get('@pBar').should('contain.text','30%');
        cy.get('@pBar').should('have.attr','aria-valuenow','30');


    })
})