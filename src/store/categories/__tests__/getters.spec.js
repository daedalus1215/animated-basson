import { STORAGE_LIST_OF_CATEGORIES } from '../../constants';
import getters from '../getters';

describe('store/categories/__tests__/getters.spec.js', () => {
    describe('getListOfCategories', () => {
        it('should update state.listOfCategories with localStorage', () => {
            // Arrange
            const expected = { listOfCategories: { 'item': 'item' } };
            const getItemMock = jest.fn().mockImplementationOnce(() => { return JSON.stringify({ 'item': 'item' }) });
            Object.defineProperty(window, 'localStorage', {
                value: {
                    getItem: getItemMock
                },
            });

            // Act
            const actual = getters.getListOfCategories({});

            // Assert
            expect(getItemMock).toHaveBeenNthCalledWith(1, STORAGE_LIST_OF_CATEGORIES)
            expect(actual).toEqual(expected);
        });
    });
});