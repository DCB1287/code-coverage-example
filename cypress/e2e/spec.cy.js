describe('example app', () => {
  it('loads', () => {
      cy.visit('localhost:3000');
      cy.wait(1000);
      cy.contains('Learn React').should('be.visible');
      cy.contains('Express1').should('be.visible');
  })
})