class togglePom
{
    getToggle() { return cy.get('#story--components-toggle--default > div > :nth-child(1)')}
    controlDisable()
    {
        return cy.get('#control-disabled')
    }
}

export default togglePom