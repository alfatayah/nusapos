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
    cy.get(':nth-child(2) > .form-group > .form-control').select('KTP')
    cy.get('#start_date').type("29-Aug-21");
    cy.get('#end_date').type("30-Aug-21");
    cy.get('.container > .row > :nth-child(1) > .form-group > .form-control').select('5e96cbe292b97300fc903315')
    cy.get(':nth-child(1) > :nth-child(1) > .form-group > .form-control')

    
    cy.get('#discountValue1').select("2000^1e96cbe292b97300fc321242^Discount_Percent")
    cy.get(':nth-child(4) > .card-body > [type="text"]').type("order aja")
    cy.get('#discountValue2').select("2000^1e96cbe292b97300fc321242^Discount_Percent")
    cy.get(':nth-child(7) > .card-body > [type="text"]').type("sip oke")
    // cy.get('[style="margin-bottom: 1rem;"] > .btn').click()
})