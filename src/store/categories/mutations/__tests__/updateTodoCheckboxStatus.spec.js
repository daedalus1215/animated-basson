import { setCategories } from '../../../constants';
import updateTodoCheckboxStatus, { correctOrderForTodos } from '../updateTodoCheckboxStatus';

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

    describe('correctOrderForTodos', () => {
        it('should return currentTodo at top of the todos, when isChecked is false', () => {
            // Arrange
            const isChecked = false;
            const otherTodos = [{ id: 'id1' }, { id: 'id2' }];
            const currentTodo = { id: 'id3' };
            const expected = [currentTodo].concat(otherTodos);

            // Act
            const actual = correctOrderForTodos(isChecked, otherTodos, currentTodo);

            // Assert
            expect(actual).toEqual(expected);
        });
        it('should return currentTodo at bottom of the todos, when isChecked is true', () => {
            // Arrange
            const isChecked = true;
            const otherTodos = [{ id: 'id1' }, { id: 'id2' }];
            const currentTodo = { id: 'id3' };
            const expected = otherTodos.concat([currentTodo]);

            // Act
            const actual = correctOrderForTodos(isChecked, otherTodos, currentTodo);

            // Assert
            expect(actual).toEqual(expected);
        });
    });
});