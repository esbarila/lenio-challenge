describe('lenio challenge', () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login');
    })

    it('Succesful login to opensource-demo', ()=> {
        cy.get('input[name="username"]').type('Admin'); // Abstracted away as env vars in page-object models.
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();        
        cy.url().should('include', 'web/index.php/dashboard/index');
        cy.contains('Dashboard');
    })    
})
