import { buildMakePerson } from '../../js-fundation/05-factory';

describe('js-foundation/05-factory.ts', () => { 

    const getUuid = () => '1234';
    const getAge = () => 35;

    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({ getUuid, getAge });

        expect(typeof makePerson).toBe('function');
    });

    test('makePerson should return a person', () => {
        const makePerson = buildMakePerson({ getUuid, getAge });

        const johnDoe = makePerson({name: 'John Doe', birthdate: '1987-10-21'});

        expect(johnDoe).toEqual({
            id: '1234',
            name: 'John Doe',
            birthdate: '1987-10-21',
            age: 35
        });
    });

});