/// <reference types="cypress" />

describe('test_name', function() {

  it('loads controllers', function() {
 
     cy.visit('http://localhost:8080/swagger-ui/index.html#')
  
     cy.contains("user-controller")
     cy.contains("test-controller")
     cy.contains("my-fun-little-thing-controller")
     cy.contains("item-controller")
  })

  it('posts a user', function() {
 
    cy.visit('http://localhost:8080/swagger-ui/index.html#')
 
    cy.contains("user-controller")
    cy.contains("POST").click()
    cy.contains("Try it out").click()
    cy.contains("Execute").click()

    cy.contains("Response")
 })
 
 })
 