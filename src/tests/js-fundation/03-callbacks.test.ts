import { getUserById } from '../../js-fundation/03-callbacks';

describe('js-foundation/03-callbacks.ts', () => { 

    test('getUserById should return an error if user does not exist', (done) => { 

        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id: ${id}`);
            expect(user).toBeUndefined();

            done(); // util cuando se testean funciones o metodos que realizan llamados http o codigo asincrono
        });

    });

    test('getUserById should return John Doe', (done) => { 

        const id = 1;
        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual({
                id: 1,
                name: 'John Doe'
            });
            
            done(); // util cuando se testean funciones o metodos que realizan llamados http o codigo asincrono
        });

    });

});