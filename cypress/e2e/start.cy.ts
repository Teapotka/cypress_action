describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200')
    cy.get('button')
    .should('contain.text', '0')
    .click()
    .should('contain.text', '1')
  })
})