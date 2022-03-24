import { setCategories, STORAGE_LIST_OF_CATEGORIES } from "../../constants";
import getListOfTodosFromCategoryId from "../getters/getListOfTodosFromCategoryId";

const deleteTodoFromCategories = async (todoId, categoryId) => {
    const editCategory = await getListOfTodosFromCategoryId()(categoryId);

    const todos = editCategory?.todos?.filter(todo => todo.id != todoId) || [];
    editCategory.todos = todos;

    const categories = await JSON.parse(localStorage.getItem(STORAGE_LIST_OF_CATEGORIES));
    const allCategories = categories.filter(category => category.id !== categoryId);
    
    allCategories.push(editCategory);
    setCategories(allCategories);
}
export default deleteTodoFromCategories;