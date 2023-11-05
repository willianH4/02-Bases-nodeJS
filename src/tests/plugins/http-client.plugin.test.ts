import { httpClientPlugin } from '../../plugins/http-client.plugin';

describe('plugins/http-client.plugin.ts', () => {
    
    test('httpClientPlugin.get() should return a string', async() => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: expect.any(Boolean)
        })
    });

    // test('should return error', async() => {
    //     const idTodo = 1;
    //     try {
    //         const data = await httpClientPlugin.get(`https://jsonplaceholder.typicode.com/todos/${idTodo}`); 
    //         expect(true).toBeFalsy(); 
    //     } catch (error) {
    //         console.error('error', error);
    //     }
    // })

});