import { getListOfTodosFromCategoryId } from "../../getters";
import { setCategories } from "../../../constants";
import deleteTodoFromCategories from "../deleteTodoFromCategories";

jest.mock("../../getters", () => ({
    getListOfTodosFromCategoryId: jest.fn().mockImplementation(() => [
        {
            id: 'categoryId1', name: 'categoryNameOne', todos: [
                { categoryId: 'categoryId', description: 'desc1', id: 'id1' },
                { categoryId: 'categoryId2', description: 'desc2', id: 'id2' }]
        },
        {
            id: 'categoryId2', name: 'categoryNameTwo', todos: [
                { categoryId: 'categoryId', description: 'desc2', id: 'id2' },
                { categoryId: 'categoryId2', description: 'desc2', id: 'id2' }
            ]
        }
    ])
}));

jest.mock('../../../constants', () => ({
    setCategories: jest.fn()
}));

describe('src/store/categories/mutations/__tests__/deleteTodoFromCategories.spec.js', () => {
    describe('deleteTodoFromCateogries', () => {
        it('should...', () => {
            // Arrange
            const todoId = 'id1';
            const categoryId = 'categoryId1';

            // Act
            deleteTodoFromCategories(todoId, categoryId);

            // Assert
            expect(getListOfTodosFromCategoryId).toBeCalled();
            expect(setCategories).toBeCalledWith({})
        });
    });
})