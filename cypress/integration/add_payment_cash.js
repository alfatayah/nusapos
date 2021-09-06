/// <reference types="cypress" />

it('goto_detail_transaction' , function () {
    cy.visit('http://localhost:3001/admin/signin')
    cy.get(':nth-child(1) > .form-control').type("admin")
    cy.get('#exampleInputPassword').type("rahasia")
    cy.get('.btn').click()
    cy.get(':nth-child(8) > .nav-link').click()
    cy.get('[href="/admin/transaction/detail/61224697b8b77423e013c4e5 "]').click()
})