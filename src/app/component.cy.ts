describe('template spec', () => {
    it('passes', () => {
        let a = 0;
        cy.wrap(a).should('eq', 0)
        a++;
        cy.wrap(a).should('eq', 1)
    })
  })