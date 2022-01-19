import store from "../categoriesStore";

describe('src/store/categories/__tests__/categoriesStore.spec.js', () => {
    describe('categoriesStore', () => {
        it('should return expected store', () => {
            // Arrange
            const expected = {
                "actions": {
                    "addToListOfCategories": expect.any(Function),
                },
                "getters": {
                    "getListOfCategories": expect.any(Function),
                    "getListOfTodosFromCategoryId": expect.any(Function),
                },
                "mutations": {
                    "addToListOfCategories": expect.any(Function),
                },
                "namespaced": true,
                "state": expect.any(Function),
            };
            // Act

            // Assert
            expect(store).toEqual(expected);
        })
    })
});