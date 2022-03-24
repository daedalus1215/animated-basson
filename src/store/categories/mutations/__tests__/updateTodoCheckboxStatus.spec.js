import { setCategories } from '../../../constants';
import updateTodoCheckboxStatus from '../updateTodoCheckboxStatus';

jest.mock('../../../constants', () => ({
    getCategories: jest.fn().mockImplementationOnce(() => ([
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
    ])),
    setCategories: jest.fn()
}));

describe('src/store/categories/mutations/__tests__/updateTodoCheckboxStatus.spec.js', () => {
    describe('updateTodoCheckboxStatus', () => {
        it('should set isChecked to true for specific todo in specific category, when passing in true for isChecked', () => {
            // Arrange
            const todo = {
                todoId: 'id1',
                categoryId: 'categoryId1',
                isChecked: true
            };
            const expected = [{ "id": "categoryId1", "name": "categoryNameOne", "todos": [{ "categoryId": "categoryId2", "description": "desc2", "id": "id2" }, { "categoryId": "categoryId", "description": "desc1", "id": "id1", "isChecked": true }] }, { "id": "categoryId2", "name": "categoryNameTwo", "todos": [{ "categoryId": "categoryId", "description": "desc2", "id": "id2" }, { "categoryId": "categoryId2", "description": "desc2", "id": "id2" }] }];
            
            // Act
            updateTodoCheckboxStatus(todo);

            // Assert
            expect(setCategories).toHaveBeenNthCalledWith(1, expected);
        });
    });
});