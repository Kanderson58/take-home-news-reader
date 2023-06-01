describe('template spec', () => {
  beforeEach('', () => {
    cy.intercept('https://newsapi.org/v2/everything?domains=theonion.com&language=en&from=2023-05-15&apiKey=ff8bdb29da8e4d0cb221453f878971aa', {
      fixture: 'sampleData'
    });

    cy.visit('http://localhost:3000/');
  });


  it('should show a homepage with three article previews', () => {
    cy.get('.article-preview').should('have.length', 3)
      .get('.articles > :nth-child(1)').contains('Russia-Ukraine')
      .get('.articles > :nth-child(2)').contains('Memorial Day')
      .get('.articles > :nth-child(3)').contains('Senate impeachment')
  });
})