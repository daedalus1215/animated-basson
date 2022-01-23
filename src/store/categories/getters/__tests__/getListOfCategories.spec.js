import { STORAGE_LIST_OF_CATEGORIES } from "../../../constants";
import getListOfCategories from "../getListOfCategories";

describe('src/store/categories/getters/__tests__/getListOfCategories.spec.js', () => {
    describe('getListOfCategories', () => {
        it('should return all categories', () => {
            // Arrange
            const categoryId = 'categoryId';
            const getItemMock = jest.fn().mockImplementationOnce(() => { return JSON.stringify([{ 'id': 'item' }, { id: categoryId, name: 'correctName' }]) });

            Object.defineProperty(window, 'localStorage', {
                value: {
                    getItem: getItemMock
                },
            });

            const expected = [{ 'id': 'item' }, { id: categoryId, name: 'correctName' }];

            // Act
            const actual = getListOfCategories();

            // Assert
            expect(getItemMock).toHaveBeenNthCalledWith(1, STORAGE_LIST_OF_CATEGORIES)
            expect(actual).toEqual(expected);
        });
    });
});