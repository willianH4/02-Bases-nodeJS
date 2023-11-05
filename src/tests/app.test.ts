describe('Test in the app file', () => { 
    
    test('should first', () => { 
        
        // 1. Arrange
        // declaracion de variables, mocks o funciones
        const num1 = 10;
        const num2 = 20;

        // 2. Act
        // Operaciones
        const sum = num1 + num2;

        // 3. Assert
        // Comparar o afirmar lo que se espera
        expect(sum).toBe(30);

     });

});