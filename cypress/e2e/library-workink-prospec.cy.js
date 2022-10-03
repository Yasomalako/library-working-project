describe('empty spec', () => {
  before("go to my url",()=>{
    cy.visit("/")
  })
  it('chack booksscreen hedline', () => {
    cy.get('[data-testid="headLine_h1"]')
    .contains("Books-screen")
    .should('have.class','h1_BooksScreen')
  })
})
describe("",()=>{
  it("cheack book screen ",()=>{
    cy.get('[data-testid="bookCard"]')
    .contains("Book-Card")
    .should('have.class','h1_BooksCard')
  })
})