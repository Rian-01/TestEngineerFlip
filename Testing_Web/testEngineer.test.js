/// <reference types="cypress" />

describe('STest Engineering at Flip', () => {

    beforeEach(() => {
        // mengatur tampilan layar
        cy.viewport(1280, 720)
        // situs yang ingin dikunjungi
        cy.visit('https://flip.id/landing')

    })

    //Task 1
    it('On the landing page, click "Biaya" and make sure there is a keyword "Big Flip"', () => {
        cy.contains('Biaya').click()
        cy.contains('Big Flip').should('exist')
    })

    //Task 2
    it('Then click register/login and change language', () => {
        cy.contains('Masuk').click()
        cy.wait(5000)
        cy.get('.navbar-nav > .nav-item > .sc-hZSUBg > .sc-bAeIUo > .sc-cMhqgX').click()
        cy.get('[value="en"]').click()
        cy.wait(3000)
        cy.get('.navbar-nav > .nav-item > .sc-hZSUBg > .sc-bAeIUo > .sc-cMhqgX').click()
        cy.get('[value="id"]').click()
    })

    //Task 3
    it('Go to the help section located in the lower right corner, search for “e-Wallet”',() => {
        cy.get(':nth-child(5) > .sc-gZMcBi').click()
        cy.get('search').type('e-Wallet').click()  
        cy.contains('Tutorial: Send Money to E-Wallet (OVO, DANA, GoPay, ShopeePay and LinkAja)').should('exist')      
    })


})