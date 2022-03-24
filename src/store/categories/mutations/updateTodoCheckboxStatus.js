import { getCategories, setCategories } from "../../constants";

/**
 * 
 * @param {Object} state 
 * @param {Object} todo ie: {todoId:string, categoryId:string, isChecked:boolean}
 */
const updateTodoCheckboxStatus = todo => {
    const {todoId, categoryId, isChecked} = {...todo};
    
    const allCategories = getCategories();
    const currentCategory = allCategories.find(category => category.id === categoryId);
    const otherCategories = allCategories.filter(category => category.id !== categoryId);

    const currentTodo = currentCategory.todos.find(todo => todo.id == todoId);
    const otherTodos = currentCategory.todos.filter(todo => todo.id != todoId);

    currentTodo.isChecked = isChecked;

    const orderedTodos = correctOrderForTodos(isChecked, otherTodos, currentTodo);
    currentCategory.todos = orderedTodos;
    
    setCategories([currentCategory].concat(otherCategories))
}

export const correctOrderForTodos = (isChecked, otherTodos, currentTodo) => {
    if (isChecked) {
        return otherTodos.concat([currentTodo]);
    } else {
        return [currentTodo].concat(otherTodos)
    }
};

export default updateTodoCheckboxStatus;