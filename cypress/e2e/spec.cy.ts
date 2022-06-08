describe('General', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Facebook')
  })
})
