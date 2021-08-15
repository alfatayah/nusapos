/// <reference types="cypress" />

it('add transaction' , function () {
    cy.visit('http://localhost:3001/admin/signin')
    cy.get(':nth-child(1) > .form-control').type("admin")
    cy.get('#exampleInputPassword').type("rahasia")
    cy.get('.btn').click()
    cy.get('.input-group > .form-control').type("BR12345{enter}")
    cy.get('.input-group > .form-control').type("BR12346{enter}")
    cy.get('.input-group > .form-control').type("BR12347{enter}")
    cy.get('.input-group > .form-control').type("BR12348{enter}")
    cy.get('#select2-select2-container').type("fadhil{enter}")
    cy.get('.container > :nth-child(1) > :nth-child(2) > .form-control').clear()
    cy.get('.container > :nth-child(1) > :nth-child(2) > .form-control').type("08/24/2021 - 08/27/2021");
    cy.get('.applyBtn').click()
    cy.get('.container > :nth-child(2) > :nth-child(1)')
    cy.get('#discountValue').select("1e96cbe292b97300fc321242^2000")
    cy.get(':nth-child(2) > .form-group > .form-control').select('KTP')
    cy.get(':nth-child(2) > :nth-child(3) > .form-control').type("transaksi pertama")
    cy.get('[style="margin-bottom: 1rem;"] > .btn').click()

})