describe('Ejercicio API - Usuario en PetStore', () => {
    it('Se debe crear, buscar, actualizar y eliminar un usuario en el sitio PetStore', () => {

        const userData = {
            username: 'JeniG_QA(1)',
            firstName: 'Jeniffer',
            lastName: 'G',
            email: 'jeniffer_test@devsu.com',
            password: 'Pwddf*20405',
            phone: '0923848575',
            userStatus: 1,
        }
            
        //Creación de usuario
        cy.request('POST', 'https://petstore.swagger.io/v2/user', userData).then((res) => {
            expect(res.status).to.eq(200);

            //Buscar usuario
            return cy.request('GET', `https://petstore.swagger.io/v2/user/${userData.username}`);
            }).then((res) => {
                expect(res.body.username).to.eq(userData.username);

           //Actualizar nombre y correo del usuario
            return cy.request('PUT', `https://petstore.swagger.io/v2/user/${userData.username}`,{
                ...userData,
                firstName: 'Jeniffer Ximena',
                lastName: 'G',
                email: 'jeniffer@test.com',
                password: 'Pwddf*20405',
                phone: '0923848575',
                userStatus: 1,
            });        
        }).then((res) => {
            expect(res.status).to.eq(200);

            //Buscar usuario actualizado
            return cy.request('GET', `https://petstore.swagger.io/v2/user/${userData.username}`);
        }).then((res) => {
            expect(res.status).to.eq(200);

            //Eliminar usuario 
            return cy.request('DELETE', `https://petstore.swagger.io/v2/user/${userData.username}`);
        }).then((res) => {
            expect(res.status).to.eq(200);

        })
    });

});