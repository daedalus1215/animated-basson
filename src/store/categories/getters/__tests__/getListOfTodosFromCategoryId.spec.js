import getListOfTodosFromCategoryId from '../getListOfTodosFromCategoryId';

describe('store/categories/__tests__/getters/getListOfTodosFromCategoryId.spec.js', () => {
    describe('getListOfTodosFromCategoryId', () => {
        it('should return category with todos, based on the categoryId', () => {
            // Arrange
            const categoryId = 'categoryId';
            const getItemMock = jest.fn().mockImplementationOnce(() => { return JSON.stringify([{ 'id': 'item' }, { id: categoryId, name: 'correctName' }]) });

            Object.defineProperty(window, 'localStorage', {
                value: {
                    getItem: getItemMock
                },
            });

            const expected = { "id": categoryId, "name": "correctName" };

            // Act
            const actual = getListOfTodosFromCategoryId()(categoryId);

            // Assert
            expect(actual).toEqual(expected);
        });
    });
});
