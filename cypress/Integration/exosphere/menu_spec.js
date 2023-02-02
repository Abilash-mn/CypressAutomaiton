
describe('Verify menu component',()=>{
    before(function (){
        cy.fixture('example').then(function (data){
            this.data=data
        })
    })


    it('Css properties',()=>{
        cy.visit('https://exosphere.sandbox.boomi.com/iframe.html?id=components-menu--option-1&viewMode=docs');
        cy.get('#story--components-menu--option-1').as('options');
        cy.get('@options').should('have.css','font-family').and('eq','"Open Sans", serif');
        cy.get('@options').should('have.css','color').and('eq','rgb(38, 38, 38)');
        cy.get('@options').should('have.css','background-color').and('eq','rgba(0, 0, 0, 0)');
        cy.log('hello world')

        cy.get('#story--components-menu--option-1 > div > ex-menu > :nth-child(1)').as('option');
        cy.get('@option').shadow().find('.menu-item').click().as('opt');
        cy.get('@opt').should('have.css','font-size').and('eq','14px');
        cy.get('@opt').should('have.css','text-align').and('eq','left');
        cy.get('@opt').should('have.css','color').and('eq','rgb(38, 38, 38)');
        cy.get('@opt').should('have.css','background-color').and('eq','rgb(255, 255, 255)');


    })

    it('Different width',()=>{
        cy.visit('https://exosphere.sandbox.boomi.com/iframe.html?id=components-menu--option-1&viewMode=docs');
        cy.get('#story--components-menu--option-1').as('option');
        cy.get('@option').should('have.css','width').and('eq','272px');
        cy.get('#control-width').select(2);
        //negative scenario increasing the width to 368px
        cy.get('@option').should('have.css','width').and('eq','272px');
    })

    it('Css properties of option 2', function () {
        cy.visit('https://exosphere.sandbox.boomi.com/iframe.html?id=components-menu--option-1&viewMode=docs');
        cy.get('#story--components-menu--option-2').as('options');
        cy.get('@options').should('have.css','font-family').and('eq','"Open Sans", serif');
        cy.get('@options').should('have.css','color').and('eq','rgb(38, 38, 38)');
        cy.get('@options').should('have.css','background-color').and('eq','rgba(0, 0, 0, 0)');

        cy.get('#story--components-menu--option-2 > div > ex-menu > :nth-child(1)').as('option');
        cy.get('@option').shadow().find('.menu-item').click().as('opt');
        cy.get('@opt').should('have.css','font-size').and('eq','14px');
        cy.get('@opt').should('have.css','text-align').and('eq','left');
        cy.get('@opt').should('have.css','color').and('eq','rgb(38, 38, 38)');
        cy.get('@opt').should('have.css','background-color').and('eq','rgb(255, 255, 255)');


    });

})