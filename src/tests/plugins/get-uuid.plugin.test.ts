import { getUuid } from '../../plugins/get-uuid.plugin'

describe('plugins/get-uuid.plugin.ts', () => {
    
    test('getUuid() should return UUID', () => {
        
        const uuid = getUuid();

        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);
        
    });

});