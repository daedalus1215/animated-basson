import getters from '../getters';

describe('store/categories/__tests__/getters.spec.js', () => {
    describe('getListOfCategories', () => {
        it('should update state.listOfCategories with localStorage', () => {
            const expected = { listOfCategories: { 'item': 'item' } };
            Object.defineProperty(window, 'localStorage', {
                value: {
                    getItem: () => { return JSON.stringify({ 'item': 'item' }) }
                },
            });

            const actual = getters.getListOfCategories({});
            
            expect(actual).toEqual(expected);
        });
    });
});