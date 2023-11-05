import { characters } from '../../js-fundation/02-destructuring';

describe('js-foundation/02-destructuring.ts', () => { 
    
    test('characters should contains Superman, Batman', () => { 
        expect( characters ).toContain('Superman');
        expect( characters ).toContain('Batman');
    });

    test('fist character should be Flash and second Superman', () => { 
        const [ flash, superman ] = characters;

        expect( flash ).toBe('Flash');
        expect( superman ).toBe('Superman');
    });

});