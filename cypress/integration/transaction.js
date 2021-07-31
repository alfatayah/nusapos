/// <reference types="cypress" />

it('add transaction' , function () {
    cy.visit('http://localhost:3001/admin/signin')
    cy.get(':nth-child(1) > .form-control').type("admin")
    cy.get('#exampleInputPassword').type("rahasia")
    cy.get('.btn').click()
    cy.get('.input-group > .form-control').type("BR12345{enter}")
    cy.get('.input-group > .form-control').type("BR23463{enter}")
    cy.get('.container > .row > :nth-child(1) > .form-group > .form-control').select('5e96cbe292b97300fc903315')
    cy.get(':nth-child(2) > .form-group > .form-control').select('KTP')
    cy.get('#fdate').type("01-Aug-21");
    cy.get('#tdate').type("02-Aug-21");
    cy.get('#discountValue1').select("2000^1e96cbe292b97300fc321242^Discount_Percent")
    cy.get(':nth-child(4) > .card-body > [type="text"]').type("order aja")
    cy.get('#discountValue2').select("2000^1e96cbe292b97300fc321242^Discount_Percent")
    cy.get(':nth-child(7) > .card-body > [type="text"]').type("sip oke")
})