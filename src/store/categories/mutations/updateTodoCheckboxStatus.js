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

    const currentTodo = currentCategory.todos.find(todo => todo.id === todoId);
    const otherTodos = currentCategory.todos.filter(todo => todo.id !== todoId);

    currentTodo.isChecked = isChecked;
    otherTodos.push(currentTodo);
    
    currentCategory.todos = otherTodos;
    
    setCategories([currentCategory].concat(otherCategories))
}

export default updateTodoCheckboxStatus;