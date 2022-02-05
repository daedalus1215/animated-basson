import addToListOfCategories from "../addToListOfCategories";
import { getCategories, STORAGE_LIST_OF_CATEGORIES } from '../../../constants';

jest.mock('../../../constants', () => ({
    getCategories: jest.fn().mockImplementationOnce(() => [{ id: 'id' }])
}));

describe('src/store/categories/mutations/__tests__/addToListOfCategories.spec.js', () => {
    describe('addToListOfCateegories', () => {
        it('should...', () => {
            // Arrange
            const expected = { listOfCategories: [{id: 'id'}, {id: '2'}]}
            const state = { listOfCategories: [] };
            const category = {id: '2'};
            const setItemMock = jest.fn();
            Object.defineProperty(window, 'localStorage', {
                value: {
                    setItem: setItemMock
                },
            });

            // Act
            const actual = addToListOfCategories(state, category)

            // Assert
            expect(setItemMock).toHaveBeenNthCalledWith(1, STORAGE_LIST_OF_CATEGORIES, JSON.stringify(expected.listOfCategories));
            expect(getCategories).toBeCalledTimes(1)
            expect(actual).toEqual(expected)
        });
    });
});