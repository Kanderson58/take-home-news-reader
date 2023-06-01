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
      .url().should('equal', 'http://localhost:3000/')
  });

  it('should allow users to click the read more and show a detailed article view', () => {
    cy.get(':nth-child(2) > :nth-child(3) > .published > a > .read-more').click()
      .url().should('equal', 'http://localhost:3000/article')
      .get('.article-details').should('exist')
      .get('.title').should('have.text', '9 Hospitalized After Memorial Day Shooting at Hollywood Beach Broadwalk - NBC 6 South Florida')
  });

  it('should allow the user to navigate back to the main page', () => {
    cy.url().should('equal', 'http://localhost:3000/')
      .get(':nth-child(2) > :nth-child(3) > .published > a > .read-more').click()
      .url().should('equal', 'http://localhost:3000/article')
      .get('.header').click()
      .url().should('equal', 'http://localhost:3000/')
  });

  it('should allow the user to search for an article by keyword', () => {
    cy.get('input').type('Senate')
      .get('.article-preview').should('have.length', 1)
      .get('.articles > :nth-child(1)').contains('Senate impeachment')
  });

  it('should navigate back to homepage when the searchbar is empty', () => {
    cy.get('input').type('Senate')
      .get('.article-preview').should('have.length', 1)
      .get('input').clear()
      .get('.article-preview').should('have.length', 3)
  });

  it('should show the user an error message if there is no search results', () => {
    cy.get('input').type('nonsense')
      .get('p').should('have.text', 'No results for that search term.')
      .get('.article-preview').should('not.exist')
  });

  it('should hide the search bar when not on the homepage', () => {
    cy.get('input').should('exist')
      .get(':nth-child(2) > :nth-child(3) > .published > a > .read-more').click()
      .url().should('equal', 'http://localhost:3000/article')
      .get('.olaf').should('exist')
      .get('input').should('not.exist')
  });
})