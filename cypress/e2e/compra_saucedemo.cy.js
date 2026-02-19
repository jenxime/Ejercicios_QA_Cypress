//Prueba de automatizaciòn para el flujo de compra 

describe('Automatizaciòn de Compra - Saucedemo', () => {
    it('Realizar el flujo de compra de dos productos', () => {
        //Abrir la pagina
        cy.visit(`https://www.saucedemo.com/`);

        //Iniciar sesion (standard_user) / (secret_sauce)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        //Agregar productos al carrito
        cy.get('[name="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[name="add-to-cart-sauce-labs-bike-light"]').click()

        //Revisar carrito
        cy.get('.shopping_cart_link').click()

        //Revisar Checkout
        cy.get('#checkout').click()

        //Llenar datos 
        cy.get('#first-name').type('Jeniffer')
        cy.get('#last-name').type('G')
        cy.get('#postal-code').type('170101')
        cy.get('#continue').click()

        //Finalizar la compra
        cy.get('#finish').click()

        //Mensaje final
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
    })
})

