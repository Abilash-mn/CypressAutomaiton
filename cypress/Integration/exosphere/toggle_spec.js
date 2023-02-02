/// <reference types="Cypress" />
import togglePom from '../POM/togglePom'

describe('Verify toggle component',function(){

    before(function (){
        cy.fixture('testData').then(function (data){
            this.data=data
        })
    })

    it('for color',function (){
        cy.visit("https://exosphere.sandbox.boomi.com/iframe.html?id=components-toggle--default&viewMode=docs");
        cy.get('#story--components-toggle--default > div > :nth-child(1)').as('toggle');
        cy.get('@toggle').should('have.attr','label').and('eq','toggle')
       // togglePom.getToggle().should('have.attr','label').and('eq','toggle')

        cy.get("ex-toggle[label='toggle']").shadow().find(".toggle.toggle--container.large >div").as('tog');
        //cy.get('@tog').should('have.attr','aria-checked').and('eq','false');
        cy.get('@tog').should('have.css','color').and('eq','rgb(255, 255, 255)');
        cy.get('@tog').should('have.css','background-color').and('eq','rgb(112, 112, 112)');

        cy.wait(this.data.waitTime);
        cy.get('#story--components-toggle--default > div > :nth-child(1)').click();
        cy.get("ex-toggle[label='toggle']").shadow().find(".toggle.toggle--container.large >div").as('togn');
        //cy.get('@togn').should('have.attr','aria-checked').and('eq','true');
        cy.get('@togn').should('have.css','color').and('eq','rgb(255, 255, 255)');
        cy.get('@togn').should('have.css','background-color').and('eq','rgb(18, 123, 135)');

        cy.get("ex-toggle[label='toggle']").shadow().find(".toggle.toggle--container.large >div").as('togn');
        cy.get('@togn').should('have.css','font-family').and('eq','"Open Sans", serif')
        cy.get('@togn').should('have.css','font-size').and('eq','16px')
        cy.get('@togn').should('have.css','height').and('eq','24px')
        cy.get('@togn').should('have.css','align-items').and('eq','center')

    })

    it('disabling and enabling',function (){
        const togpom = new togglePom();
        cy.visit("https://exosphere.sandbox.boomi.com/iframe.html?id=components-toggle--default&viewMode=docs");
        cy.get('#story--components-toggle--default > div > :nth-child(1)').as('toggle');
        cy.get('@toggle').should('have.attr','lefticon').and('eq','direction-arrow-down');
        cy.get('@toggle').should('have.attr','disabled').and('eq','disabled');

        togpom.controlDisable().click();
        cy.get('#story--components-toggle--default > div > :nth-child(1)').as('toggle');
        cy.get('@toggle').should('have.attr','lefticon').and('eq','direction-arrow-down');
        cy.get('@toggle').should('have.attr','disabled').and('eq','disabled');

        //const label = 'toggle123';
        cy.get('#control-label').clear().type(this.data.tname);
        cy.get('#story--components-toggle--default > div > :nth-child(1)').as('toggle')
        cy.get('@toggle').should('have.attr','label').and('eq', this.data.tname);
        //cy.get('#story--components-toggle--default > div > :nth-child(1)').then(function (name){
          //  const text = name.text();
            //expect(label).equal(text);
        //})

    })

    it('toggle state',()=>{
        cy.visit("https://exosphere.sandbox.boomi.com/iframe.html?id=components-toggle--default&viewMode=docs");
        cy.get("ex-toggle[label='toggle']").shadow().find(".toggle.toggle--container.large >input").as('tog');
        cy.get('@tog').should('have.attr','aria-checked').and('eq','false');
        cy.get('#control-on').click();
        cy.wait(2000)

        cy.get('@tog').should('have.attr','aria-checked').and('eq','true');
    })

    it('size large|small',()=>{
        cy.visit("https://exosphere.sandbox.boomi.com/iframe.html?id=components-toggle--default&viewMode=docs");
        cy.get("ex-toggle[label='toggle']").as('toggle');
        cy.get('@toggle').should('have.attr','size').and('eq','large');
        cy.get('@toggle').shadow().find('.toggle.toggle--container.large >div').should('have.css','font-size').and('eq','16px')
        cy.get('#control-size').select('small')
        cy.wait(2000)
        cy.get('@toggle').should('have.attr','size').and('eq','small');
        cy.get('@toggle').shadow().find('.toggle.toggle--container.small >div').should('have.css','font-size').and('eq','12px')


    } )

    it('tab index', function (){
       // const newTabindex = '7';
        cy.visit(Cypress.env('url')+'id=components-toggle--default&viewMode=docs');
        //cy.visit("https://exosphere.sandbox.boomi.com/iframe.html?id=components-toggle--default&viewMode=docs");
        cy.get("ex-toggle[label='toggle']:nth-child(1)").as('toggle');
        cy.get('@toggle').should('have.attr','tabindex').and('eq','1');
        cy.get('#control-tabindex').should('have.attr','value').and('eq','1');

        cy.get('#control-tabindex').clear().type(this.data.newTabindex)
        cy.get('@toggle').click().should('have.attr','tabindex').and('eq', this.data.newTabindex);
        cy.wait(this.data.waitTime)
        cy.get('#control-tabindex').should('have.attr','value').and('eq', this.data.newTabindex);

    })
})