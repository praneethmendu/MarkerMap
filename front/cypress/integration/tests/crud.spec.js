/// <reference types="cypress" />

const imglink = 'https://https://avatars.githubusercontent.com/u/21146348?v=4'

describe('markermap app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should add a marker', () => {
        cy.intercept('POST', 'http://localhost:3000/api/place').as('addPlace')
        cy.intercept('GET', 'http://localhost:3000/api/places').as('allPlaces')
        cy.get('.leaflet-marker-pane')
        cy.get('.full-size').click(150, 150)
        cy.wait(['@addPlace', '@allPlaces'])
        cy.get('.leaflet-marker-pane').find('.leaflet-marker-icon').should('have.length', 1)

    })

    it('should edit a marker', () => {
        cy.intercept('PUT', 'http://localhost:3000/api/place*').as('editPlace')
        cy.intercept('GET', 'http://localhost:3000/api/places').as('allPlaces')

        cy.get('.leaflet-marker-pane').find('.leaflet-marker-icon').last().click()
        cy.get('[aria-label="edit"] > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
        cy.get('#name').clear().type('edited')
        cy.get('#image').clear().type(imglink)
        cy.get('.MuiButton-containedPrimary').click({ force: true })

        cy.wait(['@editPlace', '@allPlaces'])

    })

    it('should save edits', () => {
        cy.get('.leaflet-marker-pane').find('.leaflet-marker-icon').last().click()
        cy.get('.popup-name').contains('edited')
        cy.get('a.MuiButtonBase-root')
            .invoke('attr', 'href')
            .should('eq', imglink)
    })

    it('should deletes edits', () => {
        cy.get('.leaflet-marker-pane').find('.leaflet-marker-icon').last().click()
        cy.get('[aria-label="delete"] > .MuiIconButton-label > .MuiSvgIcon-root > path').click()

        cy.get('.leaflet-marker-pane').find('.leaflet-marker-icon').should('not.exist')
    })
})
